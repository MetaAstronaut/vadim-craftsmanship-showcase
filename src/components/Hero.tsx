import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            We Make Every Space Feel Like Home
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            From luxury residences and business spaces to boats, RVs, and high-end cars, The Vadim
            Group brings craftsmanship, innovation, and trust to every project we touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button size="lg" className="text-base">
              Request a Free Quote
            </Button>
            <Button size="lg" variant="secondary" className="text-base">
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
