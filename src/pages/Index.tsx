import Header from "@/components/marmoraria/Header";
import Hero from "@/components/marmoraria/Hero";
import Services from "@/components/marmoraria/Services";
import Materials from "@/components/marmoraria/Materials";
import Conversion from "@/components/marmoraria/Conversion";
import Testimonials from "@/components/marmoraria/Testimonials";
import Contact from "@/components/marmoraria/Contact";
import Footer from "@/components/marmoraria/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Materials />
      <Conversion />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
