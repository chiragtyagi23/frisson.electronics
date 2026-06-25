"use client";

import { useEffect, useRef } from "react";

type CardGridProps = {
  children: React.ReactNode;
  className: string;
  cardSelector?: string;
};

export default function CardGrid({
  children,
  className,
  cardSelector = ".service-card-img, .client-card",
}: CardGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            grid.querySelectorAll(cardSelector).forEach((c, i) => {
              setTimeout(() => c.classList.add("visible"), i * 110);
            });
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    cardObserver.observe(grid);
    return () => cardObserver.disconnect();
  }, [cardSelector]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
