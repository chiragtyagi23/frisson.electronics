"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const FadeUp = forwardRef<HTMLDivElement, FadeUpProps>(function FadeUp(
  { children, className = "", style },
  forwardedRef
) {
  const ref = useRef<HTMLDivElement>(null);

  useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-up ${className}`.trim()} style={style}>
      {children}
    </div>
  );
});

export default FadeUp;
