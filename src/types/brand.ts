// types/brand.ts
export interface Brand {
    id: string;
    userId: string;
    title: string;
    slug: string;
    status: 'pending' | 'active' | 'inactive';
    createdAt: string;
    updatedAt: string;
    description?: string;
    logoUrl?: string;
    bannerUrl?: string;
    contactEmail?: string;
    websiteUrl?: string;
}

export interface CreateBrandDto {
    title: string;
    slug: string;
    description?: string;
    logoUrl?: string;
    bannerUrl?: string;
    contactEmail?: string;
    websiteUrl?: string;
}

export interface UpdateBrandDto {
    title?: string;
    slug?: string;
    description?: string;
    logoUrl?: string;
    bannerUrl?: string;
    contactEmail?: string;
    websiteUrl?: string;
}