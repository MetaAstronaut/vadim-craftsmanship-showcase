import { Home, Building2, Anchor, Car } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Home Repairs",
      description:
        "Complete residential repair services from minor fixes to major renovations. Your home deserves the best care.",
    },
    {
      icon: Building2,
      title: "Commercial Services",
      description:
        "Professional commercial space maintenance and repairs. Keep your business running smoothly with minimal downtime.",
    },
    {
      icon: Anchor,
      title: "Marine & RV Services",
      description:
        "Specialized repairs for boats and RVs. Expert care for your recreational vehicles and watercraft.",
    },
    {
      icon: Car,
      title: "Automotive Services",
      description:
        "High-end car repair and maintenance. Premium service for luxury and specialty vehicles.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-foreground">Our Services</h2>
          <div className="divider-elegant"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-8 leading-relaxed">
            Comprehensive repair solutions delivered with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="card-premium group p-10 bg-card border-border/30 hover:border-secondary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0 mb-8">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-secondary/10 transition-all duration-500 relative overflow-hidden">
                    <service.icon className="h-9 w-9 text-secondary relative z-10 transition-transform group-hover:scale-110 duration-500" />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-all duration-500"></div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-semibold tracking-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base text-foreground/60 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
