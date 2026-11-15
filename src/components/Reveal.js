// Retained as a semantic wrapper for the existing CV sections. Content stays
// visible immediately, including print and reduced-motion contexts.
export default function Reveal({ as: Tag = "div", className = "", children }) {
  return <Tag className={className || undefined}>{children}</Tag>;
}
