"use client";

import FadeUp from "@/components/FadeUp";
import { CtaArrowIcon } from "@/components/icons/SharedIcons";

type CtaSectionProps = { onOpenContact: () => void };

export default function CtaSection({ onOpenContact }: CtaSectionProps) {
  return (
    <section id="cta-section">
      <div className="container">
        <FadeUp>
          <div className="cta-wrap">
            <div className="cta-img-side">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                alt="Modern technology enterprise office"
                loading="lazy"
              />
            </div>
            <div className="cta-content-side">
              <div className="cta-eyebrow">Ready to Build</div>
              <h2 className="cta-heading">Ready to Build Intelligent Embedded Solutions?</h2>
              <p className="cta-text">
                From smart cameras to embedded electronics, solar energy systems, and infrastructure monitoring — we help organizations deploy reliable technology at scale.
              </p>
              <button type="button" className="btn-primary" onClick={onOpenContact}>
                Discuss Your Project
                <CtaArrowIcon />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
