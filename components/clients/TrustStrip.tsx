import FadeUp from "@/components/FadeUp";
import { TrustStarIcon } from "@/components/icons/SharedIcons";

export default function TrustStrip() {
  return (
    <FadeUp>
      <div className="trust-strip">
        <div className="trust-icon">
          <TrustStarIcon />
        </div>
        <div className="trust-text">
          <strong>Trusted by industry leaders</strong> across manufacturing, solar energy, and power electronics. Frisson delivers embedded and surveillance systems that meet enterprise-grade reliability, security, and scalability requirements — on time, every time.
        </div>
      </div>
    </FadeUp>
  );
}
