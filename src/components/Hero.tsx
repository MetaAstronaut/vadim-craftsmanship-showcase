import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import homeRepairsHero from "@/assets/home-repairs-hero.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const rotatingTexts = ["Home Repair", "Commercial", "Marine & RV", "Automotive", "Emergency"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-75"
        style={{ 
          backgroundImage: `url(${homeRepairsHero})`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-primary/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom text-center px-4 max-w-5xl">
        {/* Premium Badge */}
        <div className="inline-flex items-center space-x-2 mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
          <Shield className="w-4 h-4 text-secondary-light" />
          <span className="text-sm text-white/90 tracking-widest uppercase font-medium">Trusted Since 2010</span>
        </div>

        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
        >
          Crafting Excellence<br />
          <span className="text-gradient">In Every Detail</span>
        </h1>

        <div className="divider-elegant opacity-60"></div>

        <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/90 mb-4 tracking-wide">
          Premium{" "}
          <span 
            key={currentText}
            className="font-semibold text-secondary-light transition-opacity duration-500 inline-block animate-fade-in"
          >
            {rotatingTexts[currentText]}
          </span>{" "}
          Services
        </p>
        
        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto font-light">
          Serving Orlando's most discerning clients with unparalleled craftsmanship
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button 
            size="lg" 
            variant="premium"
            className="group text-base px-10 py-6 h-auto"
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base px-10 py-6 h-auto border-white/30 text-white hover:bg-white/10"
          >
            Emergency Service
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Years</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
