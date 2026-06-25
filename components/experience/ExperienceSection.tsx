"use client";

import FadeUp from "@/components/FadeUp";
import AnimatedCounter from "@/components/AnimatedCounter";

const experienceItems = [
  "Embedded Electronics Engineering",
  "Camera & Surveillance Solutions",
  "Solar Energy System Deployment",
  "Utility & Infrastructure Projects",
  "Hardware-Software Integration",
  "Field Deployment & Maintenance Support",
  "NPCL Project Experience",
];

export default function ExperienceSection() {
  return (
    <section id="experience-section">
      <div className="container">
        <FadeUp className="exp-split">
          <div className="exp-image-side">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80"
              alt="Engineer working on embedded system hardware"
              loading="lazy"
            />
            <div className="exp-float-stat top-left">
              <div className="exp-float-num">
                <AnimatedCounter target={4} duration={1200} />
                <span>+</span>
              </div>
              <div className="exp-float-label">Years of Experience</div>
            </div>
            <div className="exp-float-stat bot-right">
              <div className="exp-float-num">
                <AnimatedCounter target={50} duration={1600} />
                <span>+</span>
              </div>
              <div className="exp-float-label">Projects Delivered</div>
            </div>
          </div>

          <div className="exp-content-side">
            <span className="section-eyebrow">Our Track Record</span>
            <h2 className="exp-content-heading">
              Proven Experience Across Embedded, Solar &amp; Surveillance
            </h2>
            <p className="exp-content-sub">
              We have worked on complex embedded electronics and infrastructure monitoring projects — including NPCL utility deployments — building systems that operate reliably in demanding field conditions.
            </p>
            <ul className="exp-list">
              {experienceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="exp-mini-stats">
              <div>
                <div className="exp-mini-num">
                  <AnimatedCounter target={20} duration={1400} />
                  <span className="accent">+</span>
                </div>
                <div className="exp-mini-desc">Enterprise Clients</div>
              </div>
              <div>
                <div className="exp-mini-num">
                  100<span className="accent">%</span>
                </div>
                <div className="exp-mini-desc">Field Uptime SLA</div>
              </div>
              <div>
                <div className="exp-mini-num">
                  24<span className="accent">/7</span>
                </div>
                <div className="exp-mini-desc">Tech Support</div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
