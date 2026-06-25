import FadeUp from "@/components/FadeUp";
import CardGrid from "@/components/CardGrid";
import ClientCard from "@/components/clients/ClientCard";
import TrustStrip from "@/components/clients/TrustStrip";
import { SheelaFoamHeaderLogo, ServotechHeaderLogo } from "@/components/clients/ClientLogos";

export default function ClientsSection() {
  return (
    <section id="clients-section">
      <div className="container">
        <FadeUp>
          <div className="clients-intro">
            <span className="section-eyebrow">Trusted By</span>
            <h2 className="clients-heading">
              Clients Who Trust <span style={{ color: "var(--frisson-s-text-accent)" }}>Frisson</span>
            </h2>
            <p className="clients-sub">
              We are proud to serve leading enterprises across manufacturing, energy, and power electronics — delivering systems that perform at scale.
            </p>
          </div>
        </FadeUp>

        <CardGrid className="clients-grid">
          <ClientCard
            headerLogo={<SheelaFoamHeaderLogo />}
            title="Sheela Foam Limited"
            subtitle="Manufacturing & Foam Solutions"
            description="India's leading foam manufacturer — embedded monitoring and surveillance systems deployed across their facilities."
            websiteUrl="https://www.sheelafoam.com/"
          />
          <ClientCard
            headerLogo={<ServotechHeaderLogo />}
            title="Servotech Power Systems"
            subtitle="Power Electronics & Solar"
            description="Leading power electronics and EV charging brand — IoT integration and embedded solutions for their smart energy systems."
            websiteUrl="https://www.servotech.in/media-kit"
          />
        </CardGrid>

        <TrustStrip />
      </div>
    </section>
  );
}
