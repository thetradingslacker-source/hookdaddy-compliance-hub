import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ViralHooks from "@/components/ViralHooks";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Trigger rebuild for preview deployment
  return (
    <div className="min-h-screen pt-16">
      <Header />
      <Hero />
      <About />
      <Services />
      <ViralHooks />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
