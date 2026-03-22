import { getProducts } from '~/utils/data'

export default defineEventHandler(() => {
    const brands = Array.from(
        new Set(
            getProducts()
                .map((product: { brand?: unknown }) => product?.brand)
                .filter((brand): brand is string => typeof brand === 'string' && brand.trim().length > 0)
        )
    )

    return {
        brands
    }
})