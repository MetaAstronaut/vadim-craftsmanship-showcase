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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive repair solutions for every aspect of your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-md transition-all duration-300 p-8"
            >
              <CardHeader className="p-0 mb-6">
                <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-medium">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-base text-foreground/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
