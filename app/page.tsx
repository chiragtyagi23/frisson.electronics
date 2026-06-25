import DemoNav from "@/components/DemoNav";
import SectionDivider from "@/components/SectionDivider";
import HeroBanner from "@/components/hero/HeroBanner";
import ServicesSection from "@/components/services/ServicesSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import WhySection from "@/components/why/WhySection";
import ClientsSection from "@/components/clients/ClientsSection";
import CtaSection from "@/components/cta/CtaSection";

export default function Home() {
  return (
    <>
      <DemoNav />
      <SectionDivider />
      <HeroBanner />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <WhySection />
      <SectionDivider />
      <ClientsSection />
      <SectionDivider />
      <CtaSection />
    </>
  );
}
