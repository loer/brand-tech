<template>
    <div class="page-sidebar">
        <div class="sidebar-nav">
            <nav-tree :root-category-id="rootCategoryId ?? ''" />
        </div>
        <div>
            <h1 class="page-title">{{ category?.name?.en }}</h1>
            <product-list :products="categoryProducts" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/product';
import type { Category } from '~/interfaces/category';
const route = useRoute()
const rootCategoryId = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const currentCategoryId = route.params.slug?.[route.params.slug.length - 1]

const { data } = await useFetch<Product[]>('/api/products', { query: { categoryId: currentCategoryId } })
const categoryProducts = data as unknown as Product[] || []

const { data:categoryData } = await useFetch('/api/category', { query: { categoryId: currentCategoryId } })
const category = categoryData as unknown as Category
</script>
