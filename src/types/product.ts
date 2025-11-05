// types/product.ts
export interface ProductImage {
    url: string;
    alt?: string;
    priority?: number;
}

export interface ProductCategory {
    id: string;
    name: Record<string, string>;
    icon?: string;
    order?: number;
    slug?: Record<string, string>;
}

export interface ProductTag {
    id: string;
    name: Record<string, string>;
    color?: string;
    description?: Record<string, string>;
    slug?: Record<string, string>;
}

export interface Product {
    id: string;
    brandId: string;
    title: string;
    price: number;
    description: string;
    mainImage: string;
    images: ProductImage[];
    categoryId: string;
    tagIds: string[];
    createdAt: string;
    inventory: number | null;
    isAvailable?: boolean;
    updatedAt?: string;
}

export interface ProductWithDetails extends Product {
    category?: ProductCategory;
    tags?: ProductTag[];
}