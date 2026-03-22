<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/collection">Collection</NuxtLink>
            </li>
            <li v-for="category in topLevelCategories" :key="category.id">
                <NuxtLink :to="`/category/${category.id}`">
                {{ category.name.en }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
    level: number
}>()

const { data: topLevelCategories } = await useFetch('/api/categories', { query: { level: props.level } })
</script>
