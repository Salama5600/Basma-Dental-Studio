import { Sparkles, ArrowUpRight, Check, ArrowDown } from 'lucide-react';
import { BotanicalLeaf } from './SVGs';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="hero">
      <BotanicalLeaf className="hero-botanical botanical-left" />
      <BotanicalLeaf className="hero-botanical botanical-right" />

      <Reveal className="hero-content">
        <div className="eyebrow">
          <span className="little-line" />
          A SMALL CHANGE. A WHOLE NEW FEELING.
          <span className="little-line" />
        </div>

        <h1>
          Try your smile.
          <br />
          <em>Find your kind of bright.</em>
        </h1>

        <p>
          A brighter smile should still feel like you.
          <br />
          Explore your shade, take your time, and let’s find it together.
        </p>

        <div className="hero-actions">
          <a
            href="#smile-lab"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-none min-h-12 px-6 py-3 text-sm"
          >
            Try my smile <Sparkles />
          </a>
          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full border border-primary/25 bg-transparent text-primary hover:bg-secondary shadow-none min-h-12 px-6 py-3 text-sm"
          >
            Book a free consultation <ArrowUpRight />
          </a>
        </div>

        <div className="reassurance">
          <span>
            <Check className="w-3.5 h-3.5" />
            No commitment
          </span>
          <span>
            <Check className="w-3.5 h-3.5" />
            At your pace
          </span>
          <span>
            <Check className="w-3.5 h-3.5" />
            No surprises
          </span>
        </div>
      </Reveal>

      <a className="hero-scroll" href="#smile-lab" aria-label="Explore the Smile Lab">
        <ArrowDown />
      </a>

      <div className="hero-note">
        Thoughtful dentistry. Beautifully personal.
        <span>NASR CITY, CAIRO</span>
      </div>
    </section>
  );
}
