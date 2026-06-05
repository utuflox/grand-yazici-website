import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAF8',
};

export const metadata: Metadata = {
  title: 'Grand Yazıcı Club Turban Thermal - Marmaris Oteli | Ultra Her Şey Dahil Lüks Tatil',
  description: 'Marmaris Otelleri Arasında Ultra Her Şey Dahil Konseptiyle Grand Yazıcı Club Turban Termal. Marmaris Termal Otel Tatilinizin Keyfini Çıkarın!',
  keywords: 'Marmaris otel, lüks otel, all-inclusive, tatil, termal, Turban, Grand Yazıcı',
  authors: [{ name: 'Grand Yazıcı' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://grandyazicihotels.com',
    siteName: 'Grand Yazıcı Club Turban Thermal',
    title: 'Grand Yazıcı Club Turban Thermal - Marmaris Oteli',
    description: 'Ultra Her Şey Dahil Konseptiyle Marmaris\'in En Lüks Otel Tatili',
    images: [
      {
        url: 'https://turban-landing.grandyazicihotels.com/content-images/bundles/slider-d.jpg',
        width: 1200,
        height: 630,
        alt: 'Grand Yazıcı Club Turban Thermal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grand Yazıcı Club Turban Thermal',
    description: 'Ultra Her Şey Dahil Konseptiyle Lüks Tatil',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon-180x180.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://grandyazicihotels.com" />
      </head>
      <body className="font-body text-textPrimary bg-background">
        {children}
      </body>
    </html>
  );
}
