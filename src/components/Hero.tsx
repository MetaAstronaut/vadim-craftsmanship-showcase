import { Button } from "@/components/ui/button";
import homeRepairsHero from "@/assets/home-repairs-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${homeRepairsHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/60" />
      </div>

      <div className="container relative z-10 px-4 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Home repair<br />and restoration<br />services in{" "}
            <span className="text-secondary">Orlando</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 h-auto font-bold bg-secondary hover:bg-secondary-glow text-white shadow-xl"
            >
              Get a Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 h-auto font-bold border-2 border-white/80 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm"
            >
              See our reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
