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
  Armchair,
  Sparkles,
  Settings,
  CheckCircle2
} from "lucide-react";

const OtherServices = () => {
  const commercialServices = [
    { icon: Building2, name: "Office renovations and updates" },
    { icon: Building2, name: "Retail space design and build-outs" },
    { icon: Paintbrush, name: "Commercial painting and flooring" },
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


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]" />
        
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10" />
        
        <div className="container-custom text-center px-4 relative z-10 py-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground">
            Specialized Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Professional solutions for your business and recreational vehicles
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


      {/* Final CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-lg mb-10 opacity-90 max-w-3xl mx-auto">
            Contact us for specialized service consultation tailored to your unique needs.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary"
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
