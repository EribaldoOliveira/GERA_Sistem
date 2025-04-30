// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'GERA System',
  description: 'Sistema de Gestão Pessoal e Projetos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-6 bg-gray-100 flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
