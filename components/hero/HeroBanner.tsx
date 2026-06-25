"use client";

import FadeUp from "@/components/FadeUp";
import { CtaArrowIcon, HeroStarIcon } from "@/components/icons/SharedIcons";

type HeroBannerProps = { onOpenContact: () => void };

export default function HeroBanner({ onOpenContact }: HeroBannerProps) {
  return (
    <section id="hero-banner">
      <div className="hero-bg" />
      <div className="container">
        <FadeUp className="hero-tag">
          <span className="hero-tag-dot" />
          Embedded Electronics &amp; Smart Surveillance
        </FadeUp>
        <FadeUp style={{ transitionDelay: "0.1s" }}>
          <h1 className="hero-heading">
            Engineering <span className="accent">Intelligent</span>
            <br />
            Embedded &amp; Camera Solutions
          </h1>
        </FadeUp>
        <FadeUp style={{ transitionDelay: "0.2s" }}>
          <p className="hero-sub">
            4+ years delivering embedded electronics, solar systems, and smart surveillance for utility, infrastructure, and enterprise environments — including NPCL projects.
          </p>
        </FadeUp>
        <FadeUp className="hero-actions" style={{ transitionDelay: "0.3s" }}>
          <button type="button" className="btn-primary" onClick={onOpenContact}>
            Discuss Your Project
            <CtaArrowIcon />
          </button>
          <div className="hero-badge">
            <HeroStarIcon />
            Trusted by enterprises since 2020
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
