import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
    <section id="home" className="relative min-h-[700px] md:min-h-[800px] flex items-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="container relative z-10 px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 animate-fade-in leading-tight">
            We Make Every Space Feel Like Home
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-10 md:mb-12 animate-fade-in-up min-h-[3rem] md:min-h-[4rem]">
            <span>Professional </span>
            <span 
              key={currentText}
              className="text-secondary animate-fade-in inline-block"
              style={{ color: "#ed8936" }}
            >
              {rotatingTexts[currentText]}
            </span>
            <span> Services in Orlando</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="text-lg px-8 py-6 h-auto font-semibold">
              Get a Free Quote
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Repair Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
