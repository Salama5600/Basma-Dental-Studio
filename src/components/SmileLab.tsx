import React, { useState, useRef, useEffect } from 'react';
import {
  FlaskConical,
  ArrowUpRight,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  MoveHorizontal,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useSmile } from '../context/SmileContext';
import { SHADES } from '../types';
import { SmileIllustration } from './SVGs';
import { Reveal } from './Reveal';

function ComparisonSlider() {
  const { shade } = useSmile();
  const [position, setPosition] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Teaser peek effect on scroll
  useEffect(() => {
    if (prefersReduced || hasInteracted) return;
    const t1 = setTimeout(() => setPosition(56), 650);
    const t2 = setTimeout(() => setPosition(50), 1250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [prefersReduced, hasInteracted]);

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clamped = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(clamped);
  };

  return (
    <div
      className="comparison"
      ref={containerRef}
      onPointerDown={(e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        setHasInteracted(true);
        e.currentTarget.setPointerCapture(e.pointerId);
        updatePosition(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          updatePosition(e.clientX);
        }
      }}
      onPointerUp={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      }}
    >
      <div className="comparison-layer">
        <SmileIllustration />
      </div>
      <div
        className="comparison-layer after-layer"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <SmileIllustration after shade={shade} />
      </div>

      <span className="comparison-label label-now">NOW</span>
      <span className="comparison-label label-after">
        YOUR POSSIBILITY <Sparkles size={12} />
      </span>

      <div
        className={`comparison-divider ${hasInteracted ? 'has-interacted' : ''}`}
        style={{ left: `${position}%` }}
      >
        <div
          className="comparison-handle"
          role="slider"
          tabIndex={0}
          aria-label="Compare your current and selected smile shade"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% current smile visible`}
          onKeyDown={(e) => {
            let next = position;
            if (e.key === 'ArrowLeft') next -= 5;
            else if (e.key === 'ArrowRight') next += 5;
            else if (e.key === 'Home') next = 0;
            else if (e.key === 'End') next = 100;
            else return;
            e.preventDefault();
            setHasInteracted(true);
            setPosition(Math.max(0, Math.min(100, next)));
          }}
        >
          <ArrowLeft size={16} />
          <ArrowRight size={16} />
        </div>
      </div>

      <motion.div
        key={shade}
        className="shade-sparkle"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1] }}
        transition={{ duration: prefersReduced ? 0 : 0.8 }}
      >
        <Sparkles />
      </motion.div>

      <div className="comparison-hint">
        <MoveHorizontal size={15} /> A little slide. A new perspective.
      </div>
    </div>
  );
}

function ShadeGuide() {
  const { shade, setShade } = useSmile();
  const currentShadeObj = SHADES.find((s) => s.code === shade);
  const shadeDiff = 7 - SHADES.findIndex((s) => s.code === shade);

  return (
    <div className="shade-guide">
      <div className="shade-guide-heading">
        <span>FIND YOUR SHADE</span>
        <span>Subtle to luminous</span>
      </div>

      <div className="shade-options" role="radiogroup" aria-label="Choose your smile shade">
        {SHADES.map((s, idx) => (
          <button
            key={s.code}
            type="button"
            role="radio"
            aria-checked={shade === s.code}
            aria-label={`${s.code}, ${s.name}`}
            className={`shade-option ${shade === s.code ? 'selected' : ''}`}
            onClick={() => setShade(s.code)}
            onKeyDown={(e) => {
              if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(e.key)) return;
              e.preventDefault();
              const step = ['ArrowRight', 'ArrowDown'].includes(e.key) ? 1 : SHADES.length - 1;
              const nextIndex = (idx + step) % SHADES.length;
              const nextShade = SHADES[nextIndex];
              if (nextShade) {
                setShade(nextShade.code);
                const buttons = e.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
                  '[role="radio"]'
                );
                buttons?.[nextIndex]?.focus();
              }
            }}
          >
            <span className={`shade-swatch shade-${s.code.replace('.', '-')}`}>
              <svg viewBox="0 0 24 28" aria-hidden="true">
                <path d="M12 3C7-1 1 3 3 10l2 12c1 5 4 5 5 0l2-7 2 7c1 5 4 5 5 0l2-12c2-7-4-11-9-7Z" />
              </svg>
            </span>
            <span>{s.code}</span>
          </button>
        ))}
      </div>

      <div className="shade-selected" aria-live="polite">
        <span className="selected-dot" />
        <strong>{shade}</strong>
        <span>· {currentShadeObj?.name}</span>
        <span className="shade-level">{shadeDiff} shades brighter</span>
      </div>
    </div>
  );
}

export function SmileLab() {
  return (
    <section id="smile-lab" className="smile-lab section">
      <div className="container lab-layout">
        <Reveal className="lab-copy">
          <div className="eyebrow">
            <FlaskConical size={16} /> THE SMILE LAB
          </div>
          <h2>
            A glimpse of
            <br />
            your next <em>smile.</em>
          </h2>
          <p>
            Not too white. Not someone else’s smile.
            <br />
            Just a little closer to how you want to feel.
          </p>
          <p className="lab-instruction">
            Pick a shade that feels like you.
            <br />
            Drag the line and see the difference.
          </p>

          <a
            href="#booking"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-none min-h-12 px-6 py-3 text-sm"
          >
            I like this smile <ArrowUpRight />
          </a>

          <div className="lab-footnote">
            A possibility, not a promise.
            <br />
            We’ll find your final shade together.
          </div>
        </Reveal>

        <Reveal className="lab-tool" delay={0.1}>
          <div className="lab-tool-top">
            <span>
              <span className="status-dot" /> YOUR SMILE, REIMAGINED
            </span>
            <span>01 / EXPLORE</span>
          </div>

          <ComparisonSlider />
          <ShadeGuide />

          <p className="simulation-note">
            An illustrative preview, not a clinical shade match. Every smile is unique.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
