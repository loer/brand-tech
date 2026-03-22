<template>
    <a :href="spot-link" class="item-card">
        <img :src="spot.image.imageUrl" :alt="spot.image.alt" class="item-image" />
    </a>
</template>

<script setup lang="ts">
import type { Spot } from '~/interfaces/spot';

const props = defineProps<{
    spot: Spot
}>()
</script>

<style lang="scss" scoped>
.item-card {
    background-color: var(--background);
    border: 1px solid var(--grey);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &:hover {
        border-color: var(--primary);
        text-decoration: none;
    }
}
.item-image {
    width: 100%;
    height: 100%;
}
</style>