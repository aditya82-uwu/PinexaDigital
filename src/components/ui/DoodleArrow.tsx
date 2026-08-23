export default function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M62 10 C 82 10 96 26 94 44 C 92 60 76 70 60 66 C 47 63 40 50 45 38 C 49 29 61 25 68 32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30 76 C 40 96 54 112 76 120"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 114 L 76 120 L 72 103"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
