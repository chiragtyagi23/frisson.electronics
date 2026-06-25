"use client";

import { useRef } from "react";

type ServiceCardImgProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  solar?: boolean;
};

export default function ServiceCardImg({
  imageSrc,
  imageAlt,
  title,
  description,
  icon,
  solar = false,
}: ServiceCardImgProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, #1e2438 0%, #1A1D24 65%)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.background = "";
  };

  return (
    <div
      ref={cardRef}
      className={`service-card-img${solar ? " solar" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-img-wrap">
        <img src={imageSrc} alt={imageAlt} loading="lazy" />
        <div className="card-img-badge">{icon}</div>
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-desc">{description}</div>
      </div>
    </div>
  );
}
