import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import homeRepairsHero from "@/assets/home-repairs-hero.jpg";
const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const rotatingTexts = ["Home Repair", "Commercial", "Marine & RV", "Automotive", "Emergency"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
      backgroundImage: `url(${homeRepairsHero})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom text-center px-4 max-w-5xl">
        {/* Premium Badge */}
        

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight" style={{
        textShadow: '0 4px 20px rgba(0,0,0,0.4)'
      }}>
          We Make Every Space Feel Like Home
        </h1>

        <div className="divider-elegant opacity-60"></div>

        <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4 tracking-wide">
          Premium{" "}
          <span key={currentText} className="font-semibold text-secondary-light transition-opacity duration-500 inline-block animate-fade-in">
            {rotatingTexts[currentText]}
          </span>{" "}
          Services
        </p>
        
        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto font-light">
          Serving Orlando's most discerning clients with unparalleled craftsmanship
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button size="lg" variant="premium" className="group text-base px-10 py-6 h-auto">
            Schedule Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-10 py-6 h-auto border-white/30 text-white hover:bg-white/10">
            Emergency Service
          </Button>
        </div>

        {/* Stats */}
        
      </div>
    </section>;
};
export default Hero;