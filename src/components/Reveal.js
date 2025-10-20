import useInView from "../hooks/useInView";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reveal({ as: Tag = "div", className = "", variant = "slide-up", children }) {
  const { ref, isInView } = useInView({ threshold: 0.15 });
  return (
    <Tag ref={ref} className={classNames("reveal", variant, isInView && "is-visible", className)}>
      {children}
    </Tag>
  );
}


