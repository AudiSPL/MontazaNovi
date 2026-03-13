import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyUsSection />
        <BrandsSection />
        <ServicesSection />
        <ProcessSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Index;
