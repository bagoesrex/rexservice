import HeroSection from "./_components/hero/hero-section";
import ServicesSection from "./_components/services/services-section";
import StatsSection from "./_components/stats/stats-section";
import WhyChooseSection from "./_components/whychoose/why-choose-section";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ServicesSection />

      <StatsSection />

      <WhyChooseSection />

      {/* <HowItWorksSection /> */}
    </main>
  );
}
