import { useEffect, useRef, useState } from "react";

const LazySection = ({
  children,
  fallback = null,
  rootMargin = "200px",
  /**
   * Reserve space to reduce CLS when `fallback` isn't provided.
   * Can be a number (px) or any CSS length (e.g. "40vh").
   */
  minHeight = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [rootMargin]);

  const placeholder =
    fallback !== null ? (
      fallback
    ) : minHeight ? (
      <div
        style={{
          minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
          width: "100%",
        }}
        aria-hidden="true"
      />
    ) : null;

  return <div ref={ref}>{isVisible ? children : placeholder}</div>;
};

export default LazySection;

