<template>
    <NuxtLink
        :to="`${$route.path}/product/${product.id}`"
        class="item-card"
    >
        <NuxtImg 
            v-if="product.images?.length > 0"
            preset="thumbnail"
            :src="product.images?.[0]"
            :alt="product.name.en"
            class="item-image"
        />
        <div v-else class="image-fallback">
        </div>

        <div class="item-info">
            <div class="item-name">{{ product.name.en || "N/A" }}</div>
            <div class="item-price">{{ product.price }} DKK</div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/product';

const props = defineProps<{
    product: Product
}>()
</script>

<style lang="scss" scoped>
.item-card {
    display: flex;
    flex-direction: column;
    width: 100%;

    &:hover {
        border-color: var(--primary);
        text-decoration: none;
    }
}
.item-info {
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
}
.item-name {
    color: var(--foreground);
    margin: 0;
}
.item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 3/4;
}
.image-fallback {
    width: 100%;
    height: 0;
    padding-bottom: 133.33%; /* 3:4 aspect ratio */
    background-color: var(--background-60);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey);
    font-size: 14px;
}

.item-price {
    color: var(--primary);
    margin-top: 0.5rem;
}
</style>