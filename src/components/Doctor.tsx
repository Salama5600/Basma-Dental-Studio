import { BadgeCheck, ArrowUpRight } from 'lucide-react';
import { BotanicalLeaf, DoctorPortrait } from './SVGs';
import { Reveal } from './Reveal';

export function Doctor() {
  return (
    <section id="doctor" className="doctor section">
      <div className="container doctor-layout">
        <Reveal className="doctor-portrait">
          <BotanicalLeaf className="portrait-botanical" />
          <DoctorPortrait />
          <div className="doctor-caption">
            <span>DR. SALMA EL-SHERIF</span>
            <span>Care with a human touch.</span>
          </div>
        </Reveal>

        <Reveal className="doctor-copy">
          <div className="eyebrow">A FAMILIAR FACE, BEFORE YOU ARRIVE</div>
          <h2>
            A doctor who listens.
            <br />
            <em>A person who cares.</em>
          </h2>

          <blockquote>
            “Your comfort isn’t an extra.
            <br />
            It’s where good dentistry begins.”
          </blockquote>

          <p>
            I’m Dr. Salma. In over 10 years of helping people smile, I’ve learned that
            the best results start with trust. I’ll explain every step, answer every
            question, and never rush your decision.
          </p>

          <div className="doctor-credentials">
            <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
            Cosmetic dentistry & implants <span>·</span> 10+ years of care
          </div>

          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full border border-primary/25 bg-transparent text-primary hover:bg-secondary shadow-none min-h-12 px-6 py-3 text-sm"
          >
            Come say hello <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
