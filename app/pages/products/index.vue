<template>
  <h1>all products</h1>
  <product-list :products="data || []" />
</template>

<script setup lang="ts">
import productList from '../../components/productList.vue'
import type { Product } from '~/interfaces/product';
const { data } = await useFetch<Product[]>('/api/products')
</script>


<style>

</style>