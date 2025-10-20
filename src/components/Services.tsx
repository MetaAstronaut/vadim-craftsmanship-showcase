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
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive repair solutions for every aspect of your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
