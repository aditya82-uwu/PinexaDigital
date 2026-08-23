export default function Eyebrow({
  children,
  tone = "default",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "default" | "on-contrast";
  className?: string;
}) {
  const color = tone === "on-contrast" ? "text-accent-solid" : "text-link";

  return (
    <p className={`eyebrow flex items-center gap-2 ${color} ${className}`}>
      <span aria-hidden className="inline-block w-4 h-px bg-current" />
      {children}
    </p>
  );
}
