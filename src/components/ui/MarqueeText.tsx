export default function MarqueeText({
  items,
  direction = "left",
  speed = 28,
  size = "lg",
  separator = "—",
  tone = "default",
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  size?: "lg" | "xl";
  separator?: string;
  tone?: "default" | "on-contrast";
}) {
  const text = items.join(` ${separator} `) + ` ${separator} `;
  const sizeClass = size === "xl" ? "text-[64px] md:text-[96px]" : "text-[32px] md:text-[48px]";
  const colorClass = tone === "on-contrast" ? "text-on-contrast" : "text-title";

  return (
    <div className="overflow-hidden whitespace-nowrap" aria-hidden={false}>
      <div
        className="animate-marquee inline-flex"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((rep) => (
          <span
            key={rep}
            className={`${sizeClass} ${colorClass} font-display font-semibold tracking-tight pr-4`}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
