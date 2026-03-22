<template>
    <NuxtLink
        :to="`${$route.path}/product/${product.id}`"
        class="product-card"
    >
        <NuxtImg 
            v-if="product.images?.length > 0"
            preset="thumbnail"
            :src="product.images?.[0]"
            :alt="product.name.en"
            class="product-image"
        />
        <div v-else class="image-fallback">
        </div>

        <div class="product-info">
            <div class="product-name">{{ product.name.en || "N/A" }}</div>
            <div class="product-price">{{ product.price }} DKK</div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/product';
const props = defineProps<{product: Product}>()
</script>

<style lang="scss" scoped>
.product-card {
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    border: 1px solid var(--grey);
    width: 200px;

    &:hover {
        border-color: var(--primary);
        text-decoration: none;
    }
}

.product-info {
    padding: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.2;
}

.product-name {
    color: var(--foreground);
    margin: 0;
}

.product-image {
    width: 100%;
    height: auto;
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

.product-price {
    color: var(--primary);
    margin-top: 0.5rem;
}
</style>