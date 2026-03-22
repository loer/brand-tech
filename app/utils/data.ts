import type { Product } from '~/interfaces/product'
import data from './data.json'
import type { Category } from '~/interfaces/category'

export const getCategories = (): Category[] => {
    return data?.categories as unknown as Category[] || []
}

export const getCategoryLevel = (level: number): Category[] => {
    const root = data?.categories as unknown as Category
    if (!root) return []

    const collect = (category: Category): Category[] => {
        if (category.level === level) return [category]
        return category.categories?.flatMap(collect) ?? []
    }
    return collect(root)
}

export const getCategory = (categoryId: string): Category | null => {
    const root = data?.categories as unknown as Category
    if (!root) return null

    const find = (category: Category): Category | null => {
        if (category.id === categoryId) return category
        return category.categories?.map(find).find(Boolean) ?? null
    }
    return find(root)
}

export const getProducts = (): Product[] => {
    return (data?.products as Product[]) || []
}

export const getProduct = (productId: number): Product | null => {
    return (data?.products as Product[])?.find(product => product.id === productId) || null
}

export const getCategoryProducts = (categoryId: string): Product[] => {
    return (data?.products as Product[])?.filter(product => product.categories?.includes(categoryId)) || []
}

export const getSpots = (): Spot[] => {
    return (data?.promotionalSpots as Spot[]) || []
}
