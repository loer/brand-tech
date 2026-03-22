<template>
    <!-- <pre>spots{{ spots }}</pre>
    <div class="collection-grid">
        <div
            v-for="(product, index) in products"
            :key="product.id"
            class="grid-item"
        >
            {{ index + 1 }}
        </div>
    </div> -->
    <div class="collection-grid">
        <div
            v-for="item in allItems"
            :key="item.id"
            :data-type="item.type"
            :class="getClass(item.type, item.data)"
        >
            <template v-if="item.type === 'product'">
                <collection-grid-item-product :product="item.data" />
            </template>
            <template v-else-if="item.type === 'spot'">
                <collection-grid-item-spot :spot="item.data" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/product';
import type { Spot } from '~/interfaces/spot';

const props = defineProps<{
    products: Product[],
    spots: Spot[]
}>()

const getClass = (itemType: string, data: Product | Spot) => {
    return itemType === 'product' ? 'grid-item' : `grid-item-spot-${data.type}`
}
const allItems: Array<{
    id: number | string,
    type: 'product' | 'spot',
    data: Product | Spot,
    position: number,
    name?: Record<string, string>
  }> = []

// Add all products with their positions
props.products.forEach((product, index) => {
    allItems.push({
        id: product.id,
        type: 'product',
        data: product,
        position: index + 1,
        name: product.name
    })
})

// Add all spots with their positions
props.spots.forEach(spot => {
    allItems.push({
        id: `spot-${spot.position}`,
        type: 'spot',
        data: spot,
        position: spot.position
    })
})

// Sort by position to get correct order
allItems.sort((a, b) => a.position - b.position)
</script>

<style lang="scss" scoped>
.collection-grid {
    display: grid;
    // grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}
.grid-item {
    background-color: var(--background);
    border: 1px solid var(--grey);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 150px;

    // &:nth-child(3) {
    //     // grid-column: span 2;
    //     // grid-row: span 2;
    //     background-color: var(--primary);
    // }

    // &:nth-child(11) {
    //     grid-column: span 2;
    //     // grid-row: span 2;
    //     background-color: var(--alert);
    // }

    // &:nth-child(16) {
    //     grid-column: span 2;
    //     grid-row: span 2;
    //     background-color: var(--accent);
    //     height: 100%;
    // }    
}

.grid-item-spot-1x1 {
    background-color: olive;
}
.grid-item-spot-2x1 {
    grid-column: span 2;
    background-color: aqua;
}
.grid-item-spot-2x2 {
    grid-column: span 2;
    grid-row: span 2;
    background-color: tomato;
}
</style>