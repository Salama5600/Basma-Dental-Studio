import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, MapPin, Clock, Phone } from 'lucide-react';
import { BrandLogo } from './SVGs';

const NAV_LINKS: [string, string][] = [
  ['smile-lab', 'Try your smile'],
  ['services', 'Our care'],
  ['journey', 'Your visit'],
  ['doctor', 'Meet the doctor'],
  ['faq', 'FAQs'],
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'instant'
            : 'smooth',
        });
        history.replaceState(null, '', `#${id}`);
      }
    }, 150);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#" className="brand" aria-label="Basma Dental Studio home">
          <BrandLogo />
          <span>
            basma
            <span className="brand-sub">DENTAL STUDIO</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollTo(e, id)}>
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#booking"
          onClick={(e) => scrollTo(e, 'booking')}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-none nav-book"
        >
          Let’s talk <ArrowUpRight />
        </a>

        <button
          type="button"
          className="mobile-menu inline-flex items-center justify-center rounded-full p-2 text-foreground hover:bg-black/5"
          aria-label="Open navigation"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer Sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-background p-6 shadow-2xl flex flex-col justify-between z-10 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border">
                <a href="#" className="brand" onClick={() => setMobileOpen(false)}>
                  <BrandLogo />
                  <span>
                    basma
                    <span className="brand-sub">DENTAL STUDIO</span>
                  </span>
                </a>
                <button
                  type="button"
                  className="rounded-full p-2 text-foreground/70 hover:text-foreground hover:bg-black/5 cursor-pointer"
                  aria-label="Close navigation"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Basma Dental Studio
                </h3>
                <p className="text-xs text-muted-text mt-0.5">
                  Your next smile starts here.
                </p>
              </div>

              <nav className="flex flex-col gap-5 mt-8" aria-label="Mobile navigation">
                {NAV_LINKS.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => scrollTo(e, id)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-1"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-4">
                <a
                  href="#booking"
                  onClick={(e) => scrollTo(e, 'booking')}
                  className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-none min-h-12 px-6 py-3 text-sm"
                >
                  Book a free consultation <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-border flex flex-col gap-2.5 text-xs text-muted-text">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                15 El-Nasr St, Nasr City, Cairo
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                Sat – Thu, 12 PM – 9 PM · Friday closed
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                0100 000 0000 <small>(demo number)</small>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
