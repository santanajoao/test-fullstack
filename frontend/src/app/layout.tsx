import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { FiUser } from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UOL',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />

        <main className="pt-16 px-6 pb-12 max-w-6xl mx-auto">
          <h1 className="text-2xl flex items-center font-medium text-[#333] border-b-2 border-b-[#f0f0f0] pb-6">
            <FiUser className="mr-4 text-3xl text-black" />

            Painel de clientes
          </h1>

          {children}
        </main>
      </body>
    </html>
  );
}
