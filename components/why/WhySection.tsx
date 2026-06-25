import FadeUp from "@/components/FadeUp";
import { WhyCheckIcon, WhyBadgeStarIcon } from "@/components/icons/SharedIcons";

const whyItems = [
  "Proven field experience in embedded systems and electronics",
  "End-to-end hardware & software integration capability",
  "Scalable solar, surveillance, and monitoring solutions",
  "Reliable deployment, maintenance, and post-deployment support",
  "Experience delivering for utility-sector & NPCL projects",
  "Strong focus on performance, security, and long-term reliability",
];

export default function WhySection() {
  return (
    <section id="why-section">
      <div className="container">
        <FadeUp className="why-grid">
          <div className="why-image-col">
            <div className="why-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=900&q=80"
                alt="Solar panel field installation at sunset"
                loading="lazy"
              />
              <div className="why-img-badge">
                <div className="why-img-badge-icon">
                  <WhyBadgeStarIcon />
                </div>
                <div className="why-img-badge-text">
                  <strong>Enterprise-Grade Reliability</strong>
                  Systems engineered for 24/7 uptime
                </div>
              </div>
            </div>
          </div>

          <div className="why-content-col">
            <span className="section-eyebrow">Why Frisson</span>
            <h2 className="section-heading">
              Why Organizations <span className="accent">Choose Us</span>
            </h2>
            <p className="section-subtext" style={{ marginBottom: 0 }}>
              We bring proven field expertise in embedded systems, solar, and surveillance to every engagement — from prototype to large-scale deployment.
            </p>
            <ul className="why-list">
              {whyItems.map((item) => (
                <li key={item}>
                  <span className="why-check">
                    <WhyCheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
