<template>
  <div class="wrapper">
    <div class="container">
      <h1 class="page-title">Our selected collection</h1>
      <collection-grid :products="allProducts" :spots="spots" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/product';
import type { Spot } from '~/interfaces/spot';
const { data:productData } = await useFetch<Product[]>('/api/products', { query: { categoryId: "" } })
const { data:spotData } = await useFetch<Spot[]>('/api/spots')
const allProducts = productData as unknown as Product[] || []
const spots = spotData as unknown as Spot[] || []
</script>
