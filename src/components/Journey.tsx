import { MessageCircle, ClipboardCheck, HeartHandshake } from 'lucide-react';
import { Reveal } from './Reveal';

const JOURNEY_STEPS = [
  {
    icon: MessageCircle,
    title: 'First, we listen.',
    body: 'A real conversation about what you want and what worries you. No tools. No rush. Just you.',
  },
  {
    icon: ClipboardCheck,
    title: 'Then, we make a plan.',
    body: 'A gentle check-up, a clear plan, and honest costs. You’ll know what to expect before we begin.',
  },
  {
    icon: HeartHandshake,
    title: 'Always, at your pace.',
    body: 'We check in, keep you comfortable, and pause whenever you need. You’re in control, every step.',
  },
];

export function Journey() {
  return (
    <section id="journey" className="journey section">
      <div className="container">
        <Reveal className="section-heading centered">
          <div className="eyebrow">A LITTLE LESS WORRY</div>
          <h2>
            Your visit, <em>without the unknowns.</em>
          </h2>
          <p>Good care starts with feeling safe. Here’s how we get there.</p>
        </Reveal>

        <div className="journey-grid">
          {JOURNEY_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} className="journey-step" delay={idx * 0.1}>
                <div className="step-top">
                  <span className="step-icon">
                    <Icon />
                  </span>
                  <span className="step-number">0{idx + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
