// Lucide arrows (https://lucide.dev, ISC licence), drawn thin to sit beside text.
// Each is sized in em so it tracks the type it follows; the box is larger than
// its layout footprint so the arrow reads at the size the old text arrows did.
const arrows = {
  "arrow-up-right": "M7 7h10v10M7 17 17 7",
  "arrow-down": "M12 5v14M19 12l-7 7-7-7",
  "arrow-up": "m5 12 7-7 7 7M12 19V5",
  "arrow-left": "m12 19-7-7 7-7M19 12H5",
};

export default function Icon({ name, className = "", weight = 1 }) {
  return (
    <svg
      className={`icon-arrow icon-${name} ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={weight}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={arrows[name]} />
    </svg>
  );
}
