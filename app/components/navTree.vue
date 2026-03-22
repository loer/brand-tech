<template>
    <div>
        <CategoryChildren
            v-if="category?.categories?.length"
            :childCategories="category.categories || []"
            :parents="routeParents"
        />
    </div>
</template>

<script setup lang="ts">
import type { Category } from '~/interfaces/category';
import CategoryChildren from '~/components/categoryChildren.vue';

const props = defineProps<{
    rootCategoryId: string | string[]
}>()
const { data } = await useFetch('/api/category', { query: { categoryId: props.rootCategoryId } })
const category = data as unknown as Category
const route = useRoute()
const routeParents = ['/category', ...props.rootCategoryId ? (Array.isArray(props.rootCategoryId) ? props.rootCategoryId : [props.rootCategoryId]) : []]
</script>
