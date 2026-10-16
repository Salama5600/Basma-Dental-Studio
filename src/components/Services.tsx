import {
  Sparkles,
  Smile,
  AlignHorizontalSpaceAround,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { Reveal } from './Reveal';

const SERVICES = [
  {
    icon: Sparkles,
    name: 'Teeth whitening',
    desc: 'A little brighter, still naturally you. Gentle whitening with sensitivity in mind.',
    tag: 'A FRESH START',
  },
  {
    icon: Smile,
    name: 'Cosmetic dentistry',
    desc: 'Thoughtful veneers and fillings that complement your face, not change who you are.',
    tag: 'THE LITTLE DETAILS',
  },
  {
    icon: AlignHorizontalSpaceAround,
    name: 'Orthodontics',
    desc: 'Clear aligners or traditional braces. A straighter smile, with a plan that fits your life.',
    tag: 'IN YOUR OWN TIME',
  },
  {
    icon: ShieldCheck,
    name: 'Everyday dental care',
    desc: 'From a small filling to relief from pain. Calm, careful care for a healthy foundation.',
    tag: 'CARE THAT COUNTS',
  },
];

export function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <Reveal className="section-heading services-heading">
          <div>
            <div className="eyebrow">THOUGHTFUL CARE, JUST FOR YOU</div>
            <h2>
              Small changes.
              <br />
              <em>Beautiful possibilities.</em>
            </h2>
          </div>
          <p>
            Whatever brings you here,
            <br />
            we’ll find the right way forward. Together.
          </p>
        </Reveal>

        <div className="services-grid">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <Reveal key={srv.name} className="service-card" delay={idx * 0.08}>
                <Icon className="service-icon" />
                <span className="service-tag">{srv.tag}</span>
                <h3>{srv.name}</h3>
                <p>{srv.desc}</p>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline service-link font-medium text-xs mt-auto pt-4"
                >
                  Let’s talk about it <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
