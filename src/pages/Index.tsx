import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoWall from "@/components/LogoWall";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogoWall />
      <ServicesSection />
      <ResultsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
