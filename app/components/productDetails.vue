<template>
    <div class="product-details">
        <h1 class="page-title">{{ product?.name?.en }}</h1>
        <div class="product-info">
            <div class="product-images">
                <image-carousel 
                    v-if="product?.images?.length"
                    :images="product.images" 
                    :product-name="product.name.en"
                />
            </div>
            <div>
                <dl class="product-specs">
                    <dt>Brand</dt>
                    <dd>{{ product?.brand || 'N/A' }}</dd>

                    <dt>Color</dt>
                    <dd>{{ product?.color || 'N/A' }}</dd>

                    <dt>Size</dt>
                    <dd class="product-sizes">
                        <span v-for="(size, index) in product?.size || []" :key="index">
                            {{ size }}
                        </span>
                    </dd>

                    <dt>Stock</dt>
                    <dd>{{ product?.stock || 'N/A' }}</dd>

                    <dt>Price</dt>
                    <dd>{{ product?.price }}</dd>
                </dl>

                <button class="button-primary">Add to Cart</button>                
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/product';
const props = defineProps<{product: Product}>()
</script>

<style lang="scss" scoped>
.product-details {
    display: flex;
    flex-direction: column;
}
.product-info {
    display: flex;
    gap: 20px;
}
.product-images {
    width: 100%;
    max-width: 450px;
}
.product-specs {
    display: flex;
    flex-direction: column;

    dt {
        font-size: 14px;
        color: var(--primary);
    }
    dd {
        font-size: 18px;
        font-weight: 700;
        margin: 0;
        margin: 0 0 2em;
        color: var(--foreground);
    }
    .product-sizes {
        display: flex;
        gap: 10px;
        span {
            background-color: var(--background-60);
            padding: 5px 10px;
        }
    }
}
</style>