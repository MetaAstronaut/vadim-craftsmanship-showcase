import { CheckCircle } from "lucide-react";
import vadimPortrait from "@/assets/vadim-portrait.jpg";

const AboutVadimGroup = () => {
  const promises = [
    "We listen first — understanding your needs and vision",
    "We work with precision — on time and on budget",
    "We deliver results that not only last but elevate how you live and work",
    "We stand behind our work with comprehensive warranties and guarantees",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              About The Vadim Group
            </h2>
            <p className="text-2xl font-semibold text-secondary mb-6">
              Precision. Passion. Perfection.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Vadim Group is a multidisciplinary team of professionals who share a commitment 
              to excellence. Whether renovating a home, upgrading a business space, or restoring 
              a luxury vehicle, every project reflects our signature blend of quality craftsmanship 
              and refined aesthetics.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Promise:</h3>
              <ul className="space-y-4">
                {promises.map((promise, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-slide-in-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-base text-foreground leading-relaxed">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-glow)] transition-all duration-500">
              <img
                src={vadimPortrait}
                alt="Vadim professional portrait"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVadimGroup;
