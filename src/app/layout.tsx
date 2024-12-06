import type { Metadata } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Container from '@/components/ui/container';
import ArticleContextProvider from '@/context/ArticleContext';
import PodcastContextProvider from '@/context/PodcastContext';

import './globals.css';

export const metadata: Metadata = {
  title: 'Fyrre Magazine',
  description: 'Art & Life',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logos/FyrreMagazineFavicon.svg" type="image/x-icon" />
      </head>
      <body>
        <ArticleContextProvider>
          <PodcastContextProvider>
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </PodcastContextProvider>
        </ArticleContextProvider>
      </body>
    </html>
  );
}
