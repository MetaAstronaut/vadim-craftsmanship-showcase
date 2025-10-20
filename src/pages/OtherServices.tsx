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
  Waves, 
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
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Specialized Services Beyond Home Repairs
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Professional solutions for your business, recreational vehicles, and luxury automobiles
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950/10 via-blue-900/5 to-background border-y border-blue-900/20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-6">
                <Building2 className="h-8 w-8 text-blue-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Commercial & Business Spaces
              </h2>
              <p className="text-xl text-blue-600/80 dark:text-blue-400/80 font-semibold mb-6">
                Your business environment impacts productivity, brand perception, and customer experience
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The Vadim Group provides comprehensive commercial repair and renovation services that minimize downtime and maximize results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in">
              {commercialServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="card-hover border-blue-900/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <CardTitle className="text-sm font-medium leading-tight">
                          {service.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="text-center animate-fade-in">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marine & RV Services Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-950/10 via-teal-900/5 to-background border-b border-cyan-900/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Waves className="absolute top-10 left-10 h-32 w-32 text-cyan-500" />
          <Waves className="absolute bottom-10 right-10 h-40 w-40 text-teal-500" />
        </div>
        <div className="container px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 mb-6">
                <Ship className="h-8 w-8 text-cyan-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Marine & RV Services
              </h2>
              <p className="text-xl text-cyan-600/80 dark:text-cyan-400/80 font-semibold mb-6">
                Boats and RVs require specialized knowledge and materials
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our team has extensive experience maintaining and restoring these mobile investments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in">
              {marineServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="card-hover border-cyan-900/20">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                        <CardTitle className="text-sm font-medium leading-tight">
                          {service.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="text-center animate-fade-in">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automotive Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950/20 via-slate-900/10 to-background border-b border-slate-900/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-500/10 mb-6">
                <Car className="h-8 w-8 text-slate-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Luxury Automotive Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-semibold mb-6">
                High-end vehicles deserve expert care
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From classic car restoration to modern luxury vehicle detailing and repair, we treat your automotive investment with the respect it deserves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
              {automotiveServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="card-hover border-slate-900/30 bg-slate-950/5">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-slate-400 flex-shrink-0" />
                        <CardTitle className="text-sm font-medium leading-tight">
                          {service.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>

            <div className="text-center animate-fade-in">
              <Button size="lg" variant="secondary">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us for specialized service consultation tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
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
              className="text-lg px-8 py-6 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
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
