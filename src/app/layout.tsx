import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">

        {/* ── Navigation ── */}
        <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center font-display font-black text-xl text-white glow-accent-sm group-hover:scale-105 transition-transform duration-200">
                ∞
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground hidden sm:block">
                Infinity<span className="text-accent">Bloods</span>
              </span>
            </Link>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
              {[
                ['Programs', '/programs'],
                ['Projects', '/projects'],
                ['About', '/about'],
                ['Community', '/community'],
                ['Pricing', '/pricing'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="/join"
                className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-hover transition-all duration-200 shadow-accent-lg hover:-translate-y-0.5"
              >
                Join Us
              </Link>

              {/* Mobile hamburger */}
              <button
                id="mobile-menu-button"
                aria-label="Open menu"
                className="md:hidden flex flex-col gap-[5px] p-2"
              >
                <span className="block w-6 h-0.5 bg-foreground rounded-full" />
                <span className="block w-6 h-0.5 bg-foreground rounded-full" />
                <span className="block w-4 h-0.5 bg-accent rounded-full" />
              </button>
            </div>
          </div>
        </header>

        {/* ── Page Content ── */}
        <main className="flex-1 flex flex-col pt-[70px]">
          {children}
        </main>

        {/* ── Footer ── */}
        <footer className="bg-surface border-t border-border mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center font-display font-black text-xl text-white">
                    ∞
                  </div>
                  <span className="font-display font-bold text-xl text-foreground">
                    Infinity<span className="text-accent">Bloods</span>
                  </span>
                </div>
                <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                  Technology becomes meaningful when you use it to solve real problems. We don't just teach technology—we build with it.
                </p>

                {/* Red accent line */}
                <div className="mt-6 flex gap-2">
                  <div className="h-0.5 w-8 rounded-full bg-red-50" style={{ backgroundColor: '#750000' }} />
                  <div className="h-0.5 w-8 rounded-full bg-red-100" style={{ backgroundColor: '#8e0000' }} />
                  <div className="h-0.5 w-8 rounded-full bg-red-200" style={{ backgroundColor: '#a80000' }} />
                  <div className="h-0.5 w-8 rounded-full bg-red-300" style={{ backgroundColor: '#c10000' }} />
                  <div className="h-0.5 w-8 rounded-full bg-accent" />
                </div>
              </div>

              {/* Platform links */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
                  Platform
                </h4>
                <ul className="space-y-3 text-sm">
                  {[['Programs', '/programs'], ['Projects', '/projects'], ['Community', '/community'], ['Pricing', '/pricing']].map(([l, h]) => (
                    <li key={h}>
                      <Link href={h} className="text-muted-foreground hover:text-accent transition-colors">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Org links */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-widest">
                  Organization
                </h4>
                <ul className="space-y-3 text-sm">
                  {[['About Us', '/about'], ['Join as Volunteer', '/join'], ['FAQ', '/faq'], ['Contact', '/contact']].map(([l, h]) => (
                    <li key={h}>
                      <Link href={h} className="text-muted-foreground hover:text-accent transition-colors">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} InfinityBloods. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Built for learners &amp; creators
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block ml-1" />
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
