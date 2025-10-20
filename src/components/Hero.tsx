import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import homeRepairsHero from "@/assets/home-repairs-hero.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const rotatingTexts = ["Home Repair", "Commercial", "Marine & RV", "Automotive", "Emergency"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${homeRepairsHero})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="container relative z-10 px-4 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            We Make Every Space Feel Like Home
          </h1>
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
            <span>Professional </span>
            <span 
              key={currentText}
              className="ml-3 inline-block animate-fade-in"
              style={{ color: "#ff8800" }}
            >
              {rotatingTexts[currentText]}
            </span>
            <span className="ml-3">Services in Orlando</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 h-auto font-bold bg-secondary hover:bg-secondary-glow text-white shadow-lg"
            >
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 h-auto font-bold border-2 border-white/90 bg-transparent text-white hover:bg-white/10 hover:border-white backdrop-blur-sm"
            >
              Emergency Repair Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
