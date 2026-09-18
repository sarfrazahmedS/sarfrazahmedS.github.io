// Scroll-reveal wrapper: fades + lifts its children into view once.
// Under prefers-reduced-motion the CSS simply shows them with no transform.

import { useInView } from "../lib/hooks.js";

export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
