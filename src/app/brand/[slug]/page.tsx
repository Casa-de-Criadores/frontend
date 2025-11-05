// app/brand/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { apiGet } from '@/lib/api-client';
import { Brand } from '@/types/brand';
import { Product, ProductCategory } from '@/types/product';
import { formatPrice, getLocalizedText } from '@/lib/utils';
import ProductGrid from '@/components/ProductGrid';
import type { Metadata } from 'next';

interface PageProps {
    params: {
        slug: string;
    };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    try {
        const brand = await apiGet<Brand>(`/brand/slug/${params.slug}`);

        return {
            title: `${brand.title} | Casa de Criadores Marketplace`,
            description: brand.description || `Confira a coleção de ${brand.title} na Casa de Criadores`,
            openGraph: {
                title: brand.title,
                description: brand.description,
                images: brand.bannerUrl ? [brand.bannerUrl] : [],
            },
        };
    } catch {
        return {
            title: 'Marca não encontrada | Casa de Criadores',
        };
    }
}

async function getBrandData(slug: string): Promise<{ brand: Brand; products: Product[] }> {
    try {
        // Fetch brand by slug
        const brand = await apiGet<Brand>(`/brand/slug/${slug}`);

        // Only show active brands publicly
        if (brand.status !== 'active') {
            notFound();
        }

        // Fetch products for this brand
        const products = await apiGet<Product[]>(`/product?brandId=${brand.id}`);

        // Filter out unavailable products
        const availableProducts = products.filter(p => p.isAvailable !== false);

        return { brand, products: availableProducts };
    } catch (error) {
        console.error('Error fetching brand data:', error);
        notFound();
    }
}

export default async function BrandStorefrontPage({ params }: PageProps) {
    const { brand, products } = await getBrandData(params.slug);

    return (
        <div className="min-h-screen bg-white text-black pt-20">
            {/* Hero Section */}
            <section>
                {/* Banner Image */}
                {brand.bannerUrl ? (
                    <div className="w-full h-[60vh] relative">
                        <Image
                            src={brand.bannerUrl}
                            alt={brand.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                ) : (
                    <div className="w-full h-[40vh] bg-black/5 flex items-center justify-center">
                        {brand.logoUrl && (
                            <div className="relative h-24 w-48">
                                <Image
                                    src={brand.logoUrl}
                                    alt={brand.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* Brand Info */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="max-w-4xl">
                        <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold leading-[0.9] tracking-tighter mb-8">
                            {brand.title}
                        </h1>

                        {brand.description && (
                            <p className="text-xl text-black/70 leading-relaxed mb-8 max-w-2xl">
                                {brand.description}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-6 text-sm text-black/60">
                            {brand.websiteUrl && (
                                <a
                                    href={brand.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black transition-colors flex items-center gap-2"
                                >
                                    <span>→</span> Website
                                </a>
                            )}
                            {brand.contactEmail && (
                                <a
                                    href={`mailto:${brand.contactEmail}`}
                                    className="hover:text-black transition-colors flex items-center gap-2"
                                >
                                    <span>→</span> Contato
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <ProductGrid products={products} brandSlug={brand.slug} />

            {/* Brand Story Section */}
            <section className="py-20 px-6 bg-black/5">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Sobre {brand.title}</h2>
                    <div className="space-y-6 text-black/70 leading-relaxed">
                        <p>
                            Criador participante da Casa de Criadores, {brand.title} representa
                            uma nova geração de designers brasileiros comprometidos com moda autoral e sustentável.
                        </p>
                        <p>
                            Todas as peças são produzidas em pequenas tiragens, garantindo exclusividade
                            e atenção aos detalhes. Cada item inclui lookbook digital com informações
                            sobre o processo criativo e cuidados com a peça.
                        </p>
                    </div>

                    {/* Contact CTA */}
                    {brand.contactEmail && (
                        <div className="mt-12 pt-12 border-t border-black/10">
                            <h3 className="text-xl font-bold mb-4">Dúvidas sobre produtos?</h3>
                            <p className="text-black/60 mb-6">
                                Entre em contato diretamente com {brand.title} para informações sobre
                                encomendas personalizadas, medidas, ou disponibilidade de produtos.
                            </p>
                            <a
                                href={`mailto:${brand.contactEmail}`}
                                className="inline-block bg-black text-white px-6 py-3 hover:bg-black/80 transition-colors"
                            >
                                Enviar mensagem
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}