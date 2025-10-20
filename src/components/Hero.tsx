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
    <section id="home" className="relative h-[70vh] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${homeRepairsHero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container-custom text-center px-4">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
        >
          We Make Every Space Feel Like Home
        </h1>

        <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-12">
          Professional <span 
            key={currentText}
            className="text-secondary transition-opacity duration-500 inline-block animate-fade-in"
          >
            {rotatingTexts[currentText]}
          </span> Services in Orlando
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary-glow text-white text-base px-8">
            Get a Free Quote
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            Emergency Repair Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
