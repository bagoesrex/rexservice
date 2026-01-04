import HeroSection from "./_components/hero/hero-section";
import HowItWorksSection from "./_components/howitworks/how-it-works-section";
import ServicesSection from "./_components/services/services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ServicesSection />

      <HowItWorksSection />
    </main>
  );
}
