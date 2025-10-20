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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${homeRepairsHero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
          {/* Main Headline */}
          <h1 
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ 
              textShadow: '2px 4px 8px rgba(0, 0, 0, 0.3)',
              fontWeight: 700 
            }}
          >
            We Make Every Space Feel Like Home
          </h1>

          {/* Animated Subheadline */}
          <div 
            className="text-2xl md:text-5xl font-bold text-white flex flex-wrap items-center justify-center gap-2 md:gap-3"
            style={{ 
              textShadow: '2px 4px 8px rgba(0, 0, 0, 0.3)',
              fontWeight: 700 
            }}
          >
            <span>Professional</span>
            <span 
              key={currentText}
              className="inline-block animate-fade-in"
              style={{ color: "#ed8936" }}
            >
              {rotatingTexts[currentText]}
            </span>
            <span>Services in Orlando</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button 
              size="default"
              className="text-base px-8 py-6 h-auto font-semibold bg-secondary hover:bg-secondary-glow text-white shadow-md"
            >
              Get a Free Quote
            </Button>
            <Button 
              size="default"
              variant="outline" 
              className="text-base px-8 py-6 h-auto font-semibold border-2 border-white/90 bg-transparent text-white hover:bg-white/10 hover:border-white"
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
