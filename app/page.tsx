"use client";

import { useState } from "react";
import DemoNav from "@/components/DemoNav";
import SectionDivider from "@/components/SectionDivider";
import HeroBanner from "@/components/hero/HeroBanner";
import ServicesSection from "@/components/services/ServicesSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import WhySection from "@/components/why/WhySection";
import ClientsSection from "@/components/clients/ClientsSection";
import CtaSection from "@/components/cta/CtaSection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <DemoNav onOpenContact={() => setContactOpen(true)} />
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
      <CtaSection onOpenContact={() => setContactOpen(true)} />
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
