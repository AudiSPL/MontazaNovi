import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AssemblyAnimation from "@/components/AssemblyAnimation";
import WhyUsSection from "@/components/WhyUsSection";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import TransportSection from "@/components/TransportSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-w-0 overflow-x-clip">
        <HeroSection />
        <AssemblyAnimation />
        <ServicesSection />
        <ProcessSection />
        <WhyUsSection />
        <BrandsSection />
        <TransportSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Index;
