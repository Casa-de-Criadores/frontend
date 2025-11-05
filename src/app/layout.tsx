// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Casa de Criadores Marketplace",
    description: "Plataforma oficial de vendas para criadores da Casa de Criadores",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}