<template>
    <ul v-if="childCategories?.length">
        <li v-for="child in childCategories" :key="child?.id">
            <NuxtLink
                :to="getChildPath(child.id)"
                :class="child.id===currentCategoryId ? 'active' : ''"
            >
                {{ child.name.en }}
            </NuxtLink>

            <CategoryChildren 
                v-if="child.categories?.length"
                :childCategories="child.categories || []" 
                :parents="[...parents, child.id]" 
            />
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { Category } from '~/interfaces/category'

const props = defineProps<{
    childCategories: Category[]
    parents: string[]
}>()
const getChildPath = (childId: string) => {
    return [...props.parents, childId].join('/')
}
const route = useRoute()
const parentPath = route.fullPath.split('/').filter(Boolean).join('/').replace(/\/[^\/]+$/, '')
const currentCategoryId = Array.isArray(route.params.slug) ? route.params.slug[route.params.slug.length - 1] : route.params.slug
</script>

<style scoped>
ul {
    list-style: none;
    padding-left: 1em;
}
li {
    margin: .25em 0;
    min-width: max-content;
}
.active {
    font-weight: bold;
}
</style>