// components/Navigation.tsx
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-black/10 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="flex items-center gap-3 hover:opacity-60 transition-opacity"
                >
                    <div className="font-bold text-xl tracking-tight">CASA DE CRIADORES</div>
                    <div className="text-xs text-black/40 hidden sm:block">/ MARKETPLACE</div>
                </Link>

                <div className="flex gap-6 items-center">
                    <Link
                        href="/brand"
                        className="text-sm hover:opacity-60 transition-opacity hidden sm:block"
                    >
                        Marcas
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm hover:opacity-60 transition-opacity hidden sm:block"
                    >
                        Sobre
                    </Link>
                    <button className="text-sm hover:opacity-60 transition-opacity">
                        Carrinho (0)
                    </button>
                </div>
            </div>
        </nav>
    );
}