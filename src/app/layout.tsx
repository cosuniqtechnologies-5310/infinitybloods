import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'InfinityBloods | Learn. Build. Contribute.',
  description:
    'Learn technology by working on real problems, building real products, and collaborating with people who are building the future.',
  keywords:
    'technology learning, real projects, developer community, volunteer, mentorship, fullstack, AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
        <Header />
        <main className="flex-1 flex flex-col pt-[104px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
