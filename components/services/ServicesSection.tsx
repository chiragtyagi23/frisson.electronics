import FadeUp from "@/components/FadeUp";
import CardGrid from "@/components/CardGrid";
import ServiceCardImg from "@/components/services/ServiceCardImg";
import {
  EmbeddedElectronicsBadgeIcon,
  SmartCameraBadgeIcon,
  IotEdgeBadgeIcon,
  InfrastructureBadgeIcon,
  SolarBadgeIcon,
} from "@/components/services/ServiceIcons";

export default function ServicesSection() {
  return (
    <section id="services-section">
      <div className="container">
        <FadeUp>
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-heading">
            What We <span className="accent">Build & Deploy</span>
          </h2>
          <p className="section-subtext">
            From firmware to field — we engineer and deploy technology that runs at the edge of infrastructure, where reliability isn&apos;t optional.
          </p>
        </FadeUp>

        <CardGrid className="cards-row-top">
          <ServiceCardImg
            imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=75"
            imageAlt="Embedded Electronics PCB circuit board"
            title="Embedded Electronics Development"
            description="Custom hardware integration, controller-based systems, sensor interfaces, and embedded firmware solutions tailored to your exact specifications."
            icon={<EmbeddedElectronicsBadgeIcon />}
          />
          <ServiceCardImg
            imageSrc="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=700&q=75"
            imageAlt="Smart CCTV surveillance camera"
            title="Smart Camera Solutions"
            description="AI-enabled cameras, video analytics, intelligent monitoring systems, and large-scale surveillance deployments for secure environments."
            icon={<SmartCameraBadgeIcon />}
          />
          <ServiceCardImg
            imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75"
            imageAlt="IoT connected devices network"
            title="IoT & Edge Devices"
            description="Connected devices, remote monitoring systems, edge computing solutions, and real-time data acquisition for distributed infrastructure."
            icon={<IotEdgeBadgeIcon />}
          />
        </CardGrid>

        <CardGrid className="cards-row-bottom">
          <ServiceCardImg
            imageSrc="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=700&q=75"
            imageAlt="Infrastructure monitoring control room"
            title="Infrastructure Monitoring"
            description="Utility monitoring, security surveillance, field deployments, and large-scale monitoring systems for enterprise and government infrastructure."
            icon={<InfrastructureBadgeIcon />}
          />
          <ServiceCardImg
            imageSrc="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=75"
            imageAlt="Solar panels renewable energy installation"
            title="Solar Energy Solutions"
            description="Solar panel installation, grid-tie & off-grid systems, solar-powered embedded devices, and renewable energy integration for utility and enterprise sites."
            icon={<SolarBadgeIcon />}
            solar
          />
        </CardGrid>
      </div>
    </section>
  );
}
