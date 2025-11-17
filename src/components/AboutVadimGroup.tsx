import { CheckCircle, Home, Building2, Ship, ClipboardList, AlertCircle, Calendar } from "lucide-react";
import vadimPortrait from "@/assets/vadim-portrait.jpg";

const AboutVadimGroup = () => {
  const promises = [
    "We listen first — understanding your needs and vision",
    "We work with precision — on time and on budget",
    "We deliver results that not only last but elevate how you live and work",
    "We stand behind our work with comprehensive warranties and guarantees",
  ];

  const expertise = [
    { icon: Home, text: "Home renovations and custom builds" },
    { icon: Building2, text: "Business and commercial remodeling" },
    { icon: Ship, text: "Boat and RV maintenance and redesign" },
    { icon: ClipboardList, text: "Full-service project management" },
    { icon: AlertCircle, text: "Emergency repair services" },
    { icon: Calendar, text: "Preventative maintenance programs" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              About The Vadim Group
            </h2>
            <p className="text-2xl text-secondary mb-8 font-medium">
              Precision. Passion. Perfection.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              The Vadim Group is a multidisciplinary team of professionals who share a commitment 
              to excellence. Whether renovating a home, upgrading a business space, or restoring 
              a luxury vehicle, every project reflects our signature blend of quality craftsmanship 
              and refined aesthetics.
            </p>
            
            <div className="space-y-8 mb-12">
              <h3 className="text-2xl font-medium">Our Promise:</h3>
              <ul className="space-y-4">
                {promises.map((promise, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-base text-foreground/80">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-medium">Our Expertise Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/50 hover:bg-muted/70 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden shadow-md">
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
