// app/brand/[slug]/loading.tsx
export default function Loading() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero skeleton */}
            <div className="w-full h-[40vh] bg-black/5 animate-pulse" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Title skeleton */}
                <div className="h-20 w-2/3 bg-black/5 animate-pulse mb-8" />

                {/* Description skeleton */}
                <div className="space-y-3 max-w-2xl mb-8">
                    <div className="h-6 bg-black/5 animate-pulse" />
                    <div className="h-6 bg-black/5 animate-pulse w-4/5" />
                </div>
            </div>

            {/* Products skeleton */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="space-y-4">
                            <div className="aspect-[3/4] bg-black/5 animate-pulse" />
                            <div className="h-6 bg-black/5 animate-pulse w-3/4" />
                            <div className="h-4 bg-black/5 animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}