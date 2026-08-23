export default function DottedWaveBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 800"
      fill="none"
    >
      <defs>
        <pattern id="dotted-wave-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" className="fill-border-contrast" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#dotted-wave-grid)" />
      <path
        d="M-100 620 C 200 480, 400 720, 700 560 S 1100 420, 1300 540"
        stroke="var(--color-accent-solid)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M-100 400 C 250 300, 450 500, 750 360 S 1150 220, 1300 340"
        stroke="var(--color-accent-solid)"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
