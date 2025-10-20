import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, 
  Paintbrush, 
  Lightbulb, 
  AlertCircle, 
  Ship, 
  Wrench, 
  Droplet,
  Car,
  Armchair,
  Sparkles,
  Settings,
  CheckCircle2,
  Phone
} from "lucide-react";

const OtherServices = () => {
  const commercialServices = [
    { icon: Building2, name: "Office renovations and updates" },
    { icon: Building2, name: "Retail space design and build-outs" },
    { icon: Building2, name: "Restaurant and hospitality upgrades" },
    { icon: Building2, name: "Medical office improvements" },
    { icon: CheckCircle2, name: "ADA compliance modifications" },
    { icon: Paintbrush, name: "Commercial painting and flooring" },
    { icon: Lightbulb, name: "Lighting upgrades and electrical work" },
    { icon: AlertCircle, name: "Emergency repair services" },
  ];

  const marineServices = [
    { icon: Ship, name: "Interior cabin repairs and upgrades" },
    { icon: Sparkles, name: "Gel coat repair and restoration" },
    { icon: Ship, name: "Teak and wood refinishing" },
    { icon: Armchair, name: "Upholstery repair and replacement" },
    { icon: Lightbulb, name: "Electrical system troubleshooting" },
    { icon: Droplet, name: "Plumbing repairs" },
    { icon: Wrench, name: "Structural repairs" },
    { icon: Sparkles, name: "Cosmetic restoration" },
  ];

  const automotiveServices = [
    { icon: Car, name: "Interior restoration and repair" },
    { icon: Armchair, name: "Leather conditioning and repair" },
    { icon: Armchair, name: "Custom upholstery" },
    { icon: Sparkles, name: "Detailing and paint correction" },
    { icon: Settings, name: "Trim and dashboard restoration" },
    { icon: Wrench, name: "Minor body work and touch-ups" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-background">
        <div className="container-custom text-center px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Specialized Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional solutions for your business, recreational vehicles, and luxury automobiles
          </p>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/10 mb-6">
              <Building2 className="h-10 w-10 text-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Commercial & Business Spaces
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your business environment impacts productivity, brand perception, and customer experience. 
              The Vadim Group provides comprehensive commercial repair and renovation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {commercialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <CardTitle className="text-base font-medium">
                        {service.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Marine & RV Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/10 mb-6">
              <Ship className="h-10 w-10 text-cyan-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Marine & RV Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Boats and RVs require specialized knowledge and materials. 
              Our team has extensive experience maintaining and restoring these mobile investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {marineServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                      <CardTitle className="text-base font-medium">
                        {service.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Automotive Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 mb-6">
              <Car className="h-10 w-10 text-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Luxury Automotive Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              High-end vehicles deserve expert care. From classic car restoration to modern luxury vehicle 
              detailing and repair, we treat your automotive investment with respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {automotiveServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-secondary flex-shrink-0" />
                      <CardTitle className="text-base font-medium">
                        {service.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="px-8">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg mb-10 opacity-90 max-w-3xl mx-auto">
            Contact us for specialized service consultation tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-8"
              asChild
            >
              <a href="tel:+14075550123" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-8"
              asChild
            >
              <a href="#contact">
                Get a Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtherServices;
