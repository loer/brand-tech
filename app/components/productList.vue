<template>
    <div class="productList">
        <product-card
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/product';
const props = defineProps<{products: Product[]}>()
</script>

<style scoped>
.productList {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>