import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const REVIEWS = [
  {
    quote:
      'I used to be so afraid of the dentist. Here, nothing happened without being explained. For the first time, I felt at ease.',
    name: 'Menna',
    age: 28,
    initial: 'M',
    tag: 'FEELING SAFE AGAIN',
  },
  {
    quote:
      'I tried the shades before coming in, and arrived knowing what I wanted. It felt like we were already on the same page.',
    name: 'Karim',
    age: 34,
    initial: 'K',
    tag: 'FROM A CLICK TO A SMILE',
  },
  {
    quote:
      'Nobody noticed I’d had anything done. They just said I looked happier. That’s exactly the kind of result I wanted.',
    name: 'Heba',
    age: 31,
    initial: 'H',
    tag: 'NATURALLY, BEAUTIFULLY ME',
  },
];

export function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <Reveal className="section-heading centered">
          <div className="eyebrow">THE FEELING AFTER</div>
          <h2>
            More than a brighter smile.
            <br />
            <em>A lighter feeling.</em>
          </h2>
        </Reveal>

        <div className="testimonials-grid">
          {REVIEWS.map((review, idx) => (
            <Reveal key={review.name} className="review" delay={idx * 0.1}>
              <div className="review-top">
                <div className="stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <Quote size={23} className="text-primary/60 shrink-0" />
              </div>

              <blockquote>“{review.quote}”</blockquote>

              <div className="review-person">
                <span className="review-avatar">{review.initial}</span>
                <div>
                  <strong>
                    {review.name}, {review.age}
                  </strong>
                  <span>{review.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="demo-note">
          Stories shown are fictional, created for this portfolio concept.
        </p>
      </div>
    </section>
  );
}
