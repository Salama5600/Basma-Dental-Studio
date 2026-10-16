export interface Shade {
  code: string;
  name: string;
}

export const SHADES: Shade[] = [
  { code: 'OM1', name: 'Bright snow' },
  { code: 'OM2', name: 'Hollywood white' },
  { code: 'OM3', name: 'Pearl white' },
  { code: 'B1', name: 'Soft white' },
  { code: 'A1', name: 'Light ivory' },
  { code: 'A2', name: 'Warm natural' },
  { code: 'A3', name: 'Deep natural' },
  { code: 'A3.5', name: 'Your starting shade' },
];

export interface JourneyStep {
  title: string;
  body: string;
  icon: string;
}

export interface ServiceItem {
  name: string;
  desc: string;
  tag: string;
  icon: string;
}

export interface ReviewItem {
  quote: string;
  name: string;
  age: number;
  initial: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
