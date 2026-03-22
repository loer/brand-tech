<template>
    <div class="image-carousel">
        <NuxtImg 
            preset="carouselLarge"
            :src="images[current]"
            :alt="props.productName"
            class="carousel-large"
        />
        <div class="carousel-list">
            <NuxtImg 
                v-for="(image, index) in images"
                :key="index"
                @click="current = index"
                preset="carouselThumbnail"
                :src="image"
                :alt="props.productName"
                class="carousel-thumbnail"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    images: string[]
    productName?: string
}>()

import { ref } from 'vue'
const current = ref(0)
</script>

<style scoped>
.image-carousel {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.carousel-large {
    width: 100%;
    min-width: 450px;
    height: auto;
    object-fit: contain;
}
.carousel-list {
    display: flex;
    /* justify-content: flex-start; */
    gap: 10px;
}
.carousel-thumbnail {
    /* flex: 0 0 auto; */
    width: 100%;
    max-width: 75px;
    height: auto;
    object-fit: contain;
    cursor: pointer;
}
</style>