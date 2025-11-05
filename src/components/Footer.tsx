// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-black/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="font-bold mb-4">Plataforma</div>
                        <div className="space-y-2 text-sm text-black/60">
                            <div><Link href="/features" className="hover:text-black transition-colors">Funcionalidades</Link></div>
                            <div><Link href="/roadmap" className="hover:text-black transition-colors">Roadmap</Link></div>
                            <div><Link href="/status" className="hover:text-black transition-colors">Status do sistema</Link></div>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold mb-4">Recursos</div>
                        <div className="space-y-2 text-sm text-black/60">
                            <div><Link href="/docs" className="hover:text-black transition-colors">Documentação</Link></div>
                            <div><Link href="/tutorials" className="hover:text-black transition-colors">Tutoriais</Link></div>
                            <div><Link href="/help" className="hover:text-black transition-colors">Central de ajuda</Link></div>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold mb-4">Casa de Criadores</div>
                        <div className="space-y-2 text-sm text-black/60">
                            <div><Link href="/about" className="hover:text-black transition-colors">Sobre o coletivo</Link></div>
                            <div><Link href="/events" className="hover:text-black transition-colors">Próximos eventos</Link></div>
                            <div><Link href="/contact" className="hover:text-black transition-colors">Contato institucional</Link></div>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold mb-4">Suporte</div>
                        <div className="space-y-2 text-sm text-black/60">
                            <div><Link href="/support" className="hover:text-black transition-colors">Central de ajuda</Link></div>
                            <div><Link href="/contact" className="hover:text-black transition-colors">Falar com equipe</Link></div>
                            <div><Link href="/report" className="hover:text-black transition-colors">Reportar problema</Link></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-black/10 text-sm text-black/40">
                    <div>© 2025 Casa de Criadores Marketplace. Projeto sem fins lucrativos.</div>
                    <div className="flex gap-6">
                        <Link href="https://instagram.com/casadecriadores" className="hover:text-black transition-colors">
                            Instagram
                        </Link>
                        <Link href="/privacy" className="hover:text-black transition-colors">
                            Privacidade
                        </Link>
                        <Link href="/terms" className="hover:text-black transition-colors">
                            Termos
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}