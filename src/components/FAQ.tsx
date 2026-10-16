import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const FAQS: [string, string][] = [
  [
    'Will whitening hurt?',
    'Some people experience mild, temporary sensitivity. We choose materials and steps to keep this to a minimum, and discuss any sensitivity with you before treatment.',
  ],
  [
    'How long will the results last?',
    'Every smile is different, but results often last one to two years with good care. Tea, coffee, smoking, and your daily habits can affect how long your shade stays bright.',
  ],
  [
    'Can I whiten if I have fillings or crowns?',
    'Whitening only changes the shade of natural teeth, not fillings, crowns, or veneers. We’ll examine your smile first and suggest an approach that keeps everything looking balanced.',
  ],
  [
    'Is the first consultation really free?',
    'Yes. Your first consultation is free and without obligation. We’ll talk through your goals, outline your options, and explain any treatment costs clearly before you decide.',
  ],
  [
    'Is the Smile Lab preview my final result?',
    'No — it’s an illustration to help you explore your preferences, not a prediction or clinical shade match. Your actual result depends on your teeth and the treatment we choose together.',
  ],
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container faq-layout">
        <Reveal className="section-heading">
          <div className="eyebrow">IT’S OKAY TO ASK</div>
          <h2>
            A few answers.
            <br />
            <em>A little peace of mind.</em>
          </h2>
          <p>
            Nothing is too small to ask about.
            <br />
            We’re here to make things clearer.
          </p>
          <a href="#booking" className="text-link">
            Have another question? Let’s talk ↗
          </a>
        </Reveal>

        <Reveal>
          <div className="faq-accordion" data-orientation="vertical">
            {FAQS.map(([question, answer], idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={question}
                  data-state={isOpen ? 'open' : 'closed'}
                  data-orientation="vertical"
                  className="border-b border-border/70 py-1"
                >
                  <h3 data-orientation="vertical" data-state={isOpen ? 'open' : 'closed'} className="flex m-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      data-state={isOpen ? 'open' : 'closed'}
                      data-orientation="vertical"
                      className="flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left text-foreground"
                      onClick={() => toggle(idx)}
                    >
                      {question}
                      <ChevronDown
                        className={`lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-text transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      data-state={isOpen ? 'open' : 'closed'}
                      role="region"
                      className="overflow-hidden text-sm text-foreground/80 pb-4 leading-relaxed animate-in fade-in duration-200"
                    >
                      {answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
