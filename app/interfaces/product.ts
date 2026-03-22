export interface Product {
  id: number;
  brand: string;
  price: number;
  stock: number;
  color: string;
  size: string[];
  name: Record<string, string>;
  images: string[];
  variant?: ProductVariant[];
  categories: string[];
}

export interface ProductVariant {
  stock: number;
  color: string;
  size: string[];
  images: string[];
}