// components/ProductGrid.tsx
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, ProductCategory } from '@/types/product';
import { formatPrice } from '@/lib/utils';

interface ProductGridProps {
    products: Product[];
    brandSlug: string;
}

export default function ProductGrid({ products, brandSlug }: ProductGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Get unique categories from products
    const categories = useMemo(() => {
        const categoryIds = Array.from(new Set(products.map(p => p.categoryId)));
        // TODO: Fetch actual category data from API
        // For now, we'll just show category IDs
        return categoryIds;
    }, [products]);

    // Filter products by category
    const displayedProducts = useMemo(() => {
        if (!selectedCategory) return products;
        return products.filter(p => p.categoryId === selectedCategory);
    }, [products, selectedCategory]);

    if (products.length === 0) {
        return (
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-xl text-black/40">
                        Esta marca ainda não possui produtos disponíveis.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Category Filters */}
            {categories.length > 1 && (
                <section className="border-t border-b border-black/10 sticky top-[73px] bg-white z-40">
                    <div className="max-w-7xl mx-auto px-6 py-4">
                        <div className="flex gap-6 items-center overflow-x-auto">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`text-sm whitespace-nowrap transition-colors ${
                                    selectedCategory === null
                                        ? 'font-bold text-black'
                                        : 'text-black/40 hover:text-black'
                                }`}
                            >
                                Todos os produtos
                            </button>
                            {categories.map(catId => (
                                <button
                                    key={catId}
                                    onClick={() => setSelectedCategory(catId)}
                                    className={`text-sm whitespace-nowrap transition-colors ${
                                        selectedCategory === catId
                                            ? 'font-bold text-black'
                                            : 'text-black/40 hover:text-black'
                                    }`}
                                >
                                    Categoria {catId}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Products Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {displayedProducts.map(product => (
                            <Link
                                key={product.id}
                                href={`/brand/${brandSlug}/product/${product.id}`}
                                className="group space-y-4"
                            >
                                {/* Product Image */}
                                <div className="aspect-[3/4] bg-black/5 overflow-hidden relative">
                                    <Image
                                        src={product.mainImage}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-start gap-4">
                                        <h3 className="font-bold text-lg group-hover:opacity-60 transition-opacity">
                                            {product.title}
                                        </h3>
                                        <div className="text-lg font-bold whitespace-nowrap">
                                            {formatPrice(product.price)}
                                        </div>
                                    </div>

                                    <p className="text-sm text-black/60 line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* Availability indicator */}
                                    {product.inventory !== null && (
                                        <div className="text-xs text-black/40">
                                            {product.inventory === 0 ? (
                                                <span className="text-red-600">Esgotado</span>
                                            ) : product.inventory <= 2 ? (
                                                <span>Últimas {product.inventory} unidades</span>
                                            ) : (
                                                <span>{product.inventory} unidades disponíveis</span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Empty state for filtered results */}
                    {displayedProducts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-black/40">
                                Nenhum produto encontrado nesta categoria.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}