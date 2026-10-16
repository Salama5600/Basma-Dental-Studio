import { useId } from 'react';

export function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 46" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 8C12 1 3 6 4 16c1 8 4 12 5 19 1 7 6 8 7 0l2-8c1-4 3-4 4 0l2 8c1 8 6 7 7 0 1-7 4-11 5-19C37 6 28 1 20 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13 9c4 1 8 4 12 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BotanicalLeaf({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 240" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M27 233C56 157 110 89 153 13" />
        <path d="M50 179C3 141 18 116 18 116s53 15 32 63Zm17-30C31 107 45 85 45 85s40 24 22 64Zm23-34C66 72 87 55 87 55s30 29 3 60Zm20-32C97 48 113 30 113 30s25 27-3 53Zm-52 86c49 0 65-27 65-27s-48-11-65 27Zm21-35c54-1 68-32 68-32s-50-4-68 32Zm22-34c48-7 58-39 58-39s-40 4-58 39Zm22-36c43-6 48-35 48-35s-37 5-48 35Z" />
      </g>
    </svg>
  );
}

export function DoctorPortrait({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 440"
      className={`doctor-illustration ${className}`}
      role="img"
      aria-label="Illustrated portrait of fictional Dr. Salma El-Sherif"
    >
      <circle cx="210" cy="192" r="150" fill="var(--sand)" />
      <path d="M95 440v-96c0-59 49-90 115-90s115 31 115 90v96" fill="var(--coat)" />
      <path d="M171 249v44l39 39 39-39v-44" fill="var(--skin)" />
      <path d="M129 163c0-78 31-109 81-109s81 36 81 109v100l-47 16h-72l-43-16Z" fill="var(--hair)" />
      <ellipse cx="210" cy="180" rx="64" ry="86" fill="var(--skin-light)" />
      <path d="M143 162c6-67 31-85 71-81 36 4 59 34 63 81-40-10-67-35-81-58-11 30-28 49-53 58Z" fill="var(--hair)" />
      <path d="M171 176q10-6 20 0m40 0q10-6 20 0" stroke="var(--hair)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M203 185l-5 22h15m-25 14q21 22 44-1" stroke="var(--lip)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M171 288l39 44-28 39-36-63m103-20-39 44 28 39 36-63M210 332v108" fill="none" stroke="var(--sage-light)" strokeWidth="2" />
      <path d="M158 331v31c0 24 43 24 43 0v-31m-22 52v24h52v-76" fill="none" stroke="var(--sage)" strokeWidth="2" />
      <circle cx="231" cy="333" r="8" fill="var(--sage)" />
      <path d="M260 388h40" stroke="var(--sage-light)" strokeWidth="2" />
    </svg>
  );
}

const TEETH_PATHS = [
  'M138 142Q145 138 161 146L164 185Q148 185 140 173Z',
  'M163 145Q176 146 187 150L189 194Q174 199 164 186Z',
  'M188 149Q201 151 218 152L219 199Q205 208 189 196Z',
  'M219 152Q235 153 251 152L251 201Q235 211 220 201Z',
  'M253 152Q270 153 285 152L285 201Q270 211 253 201Z',
  'M287 152Q304 151 316 149L315 197Q300 207 287 200Z',
  'M318 148Q330 144 342 143L340 185Q328 200 317 195Z',
  'M344 142Q355 139 363 135L360 167Q353 180 342 184Z',
];

export function SmileIllustration({
  after = false,
  shade = 'A2',
}: {
  after?: boolean;
  shade?: string;
}) {
  const rawId = useId();
  const id = rawId.replace(/:/g, '');

  const shadeClass = after ? `shade-${shade.replace('.', '-')}` : 'shade-before';

  return (
    <svg
      viewBox="0 0 500 330"
      className={`smile-illustration ${shadeClass}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-skin`}>
          <stop offset="0" stopColor="var(--skin-light)" />
          <stop offset="1" stopColor="var(--skin)" />
        </radialGradient>
        <linearGradient id={`${id}-lip`} x2="0" y2="1">
          <stop stopColor="var(--lip-light)" />
          <stop offset="1" stopColor="var(--lip)" />
        </linearGradient>
      </defs>
      <path
        d="M63-20C18 28 38 106 61 170c26 80 86 142 188 148 96 6 173-60 197-149C471 79 466 24 439-20Z"
        fill={`url(#${id}-skin)`}
      />
      <path
        d="M207 24c-2 40-17 65-17 78 0 12 15 16 28 11m65-89c2 40 17 65 17 78 0 12-15 16-28 11"
        fill="none"
        stroke="var(--skin-contour)"
        strokeWidth="2"
        opacity=".45"
      />
      <path
        d="M118 133c19-11 65-27 101-10 17 9 22 13 32 13 10 0 21-10 34-15 36-12 73 3 102 8-10 35-40 87-136 93-76 4-119-47-133-89Z"
        fill={`url(#${id}-lip)`}
      />
      <path
        d="M128 139c34 8 70 15 123 14 55 1 90-9 127-16-18 47-68 68-125 69-63 0-102-24-125-67Z"
        fill="var(--mouth)"
      />
      <path
        d="M165 188q83 28 174-5l-18 19q-69 28-134-1Z"
        fill="var(--tooth-color)"
        opacity=".9"
      />
      <g
        className="teeth"
        stroke="var(--tooth-outline)"
        strokeWidth="1.2"
        strokeLinejoin="round"
      >
        {TEETH_PATHS.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
      <path
        d="M128 138c46 14 80 17 123 17 47 0 86-7 126-17"
        fill="none"
        stroke="var(--lip-shadow)"
        strokeWidth="3"
      />
      <path
        d="M177 211c44 15 95 17 143-2"
        fill="none"
        stroke="var(--lip-highlight)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".55"
      />
      <path
        d="M103 117c-9 10-13 22-14 32m306-32c10 12 13 22 13 34"
        fill="none"
        stroke="var(--skin-contour)"
        strokeWidth="2"
        opacity=".5"
      />
    </svg>
  );
}
