import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/src/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'People Data Table',
  description: 'Tabular display of people data',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}