// app/brand/[slug]/error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Brand page error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-white pt-20 flex items-center justify-center px-6">
            <div className="max-w-2xl text-center space-y-8">
                <h1 className="text-6xl font-bold">Ops!</h1>

                <p className="text-xl text-black/60">
                    Algo deu errado ao carregar esta página.
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        onClick={reset}
                        className="bg-black text-white px-6 py-3 hover:bg-black/80 transition-colors"
                    >
                        Tentar novamente
                    </button>
                    <Link
                        href="/frontend/public"
                        className="border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors inline-block"
                    >
                        Voltar ao início
                    </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <details className="text-left mt-8 p-4 bg-red-50 border border-red-200 rounded">
                        <summary className="cursor-pointer font-bold text-red-800 mb-2">
                            Debug Info (dev only)
                        </summary>
                        <pre className="text-xs overflow-auto text-red-900">
              {error.message}
                            {error.stack}
            </pre>
                    </details>
                )}
            </div>
        </div>
    );
}