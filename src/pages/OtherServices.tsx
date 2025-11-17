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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/85 to-primary-dark/90" />
        <div className="absolute inset-0 bg-texture-noise opacity-20" />
        
        {/* Animated accent elements */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-[400px] h-[400px] bg-secondary-glow/8 rounded-full blur-[140px]" />
        
        <div className="container-custom text-center px-4 relative z-10 py-32">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-[1.05]">
            Specialized Services
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center gap-4 py-2 justify-center mb-6">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-secondary-glow to-secondary" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
          </div>
          
          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed font-light">
            Professional solutions for your business and recreational vehicles
          </p>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-2xl mb-8 shadow-lg">
              <Building2 className="h-10 w-10 text-blue-500" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Commercial & Business Spaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Your business environment impacts productivity, brand perception, and customer experience. 
              The Vadim Group provides comprehensive commercial repair and renovation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {commercialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group p-6 border-2 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-premium bg-card/50 backdrop-blur-sm">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
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
            <Button size="lg" className="group bg-secondary hover:bg-secondary-light text-white border-0 px-12 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1">
              GET A CONSULTATION
            </Button>
          </div>
        </div>
      </section>

      {/* Marine & RV Services Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-2xl mb-8 shadow-lg">
              <Ship className="h-10 w-10 text-cyan-500" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Marine & RV Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Whether it's your weekend escape or your home on wheels, we provide specialized repair and maintenance 
              services for boats and RVs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {marineServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group p-6 border-2 border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-premium bg-card/50 backdrop-blur-sm">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-cyan-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
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
            <Button size="lg" className="group bg-secondary hover:bg-secondary-light text-white border-0 px-12 py-7 h-auto shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:-translate-y-1">
              GET A CONSULTATION
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
