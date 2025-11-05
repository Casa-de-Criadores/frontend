// app/brand/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white pt-20 flex items-center justify-center px-6">
            <div className="max-w-2xl text-center space-y-8">
                <h1 className="text-[clamp(4rem,8vw,8rem)] font-bold leading-none">404</h1>

                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Marca não encontrada</h2>
                    <p className="text-xl text-black/60">
                        Esta marca não existe ou ainda não está ativa na plataforma.
                    </p>
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                        href="/brands"
                        className="bg-black text-white px-6 py-3 hover:bg-black/80 transition-colors"
                    >
                        Ver todas as marcas
                    </Link>
                    <Link
                        href="/frontend/public"
                        className="border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
                    >
                        Voltar ao início
                    </Link>
                </div>
            </div>
        </div>
    );
}