<template>
    <div class="page-sidebar">
        <nav-tree :root-category-id="rootCategoryId ?? ''" />
        <product-details :product="product" />
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/product';
const route = useRoute()
const { data } = await useFetch<Product>('/api/product', { query: { id: route.params.id } })
const product = data as unknown as Product || null
const rootCategoryId = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
</script>
