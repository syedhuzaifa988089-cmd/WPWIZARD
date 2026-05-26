import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Hospital Analytics Management System',
  description: 'A professional hospital management system for analytics and patient administration.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans bg-black text-white antialiased selection:bg-blue-900 selection:text-blue-100 suppressHydrationWarning">
        {children}
      </body>
    </html>
  );
}
