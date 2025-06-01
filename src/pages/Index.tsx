import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import IntroSection from "@/components/IntroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToLaunch from "@/components/HowToLaunch";
import KeyFeatures from "@/components/KeyFeatures";
import ShowcaseSection from "@/components/ShowcaseSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import GridBackground from "@/components/GridBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <GridBackground />
        <HeroSection />
        <TechStack />
        <IntroSection />
        <BenefitsSection />
        <HowToLaunch />
        <KeyFeatures />
        <ShowcaseSection />
        <StatsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;