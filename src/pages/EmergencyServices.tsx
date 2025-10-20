import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Droplets, Wrench, Zap, Home, Shield, AlertTriangle, Flame } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EmergencyServices = () => {
  const emergencyServices = [
    {
      icon: Droplets,
      title: "Water Damage & Flooding",
      description: "Immediate water extraction and damage mitigation"
    },
    {
      icon: Wrench,
      title: "Burst Pipes & Plumbing",
      description: "Emergency plumbing repairs to stop water damage"
    },
    {
      icon: Zap,
      title: "Electrical Hazards",
      description: "Critical electrical issues and power restoration"
    },
    {
      icon: Home,
      title: "Storm Structural Damage",
      description: "Emergency structural repairs and stabilization"
    },
    {
      icon: Shield,
      title: "Emergency Board-Up",
      description: "Secure your property after break-ins or damage"
    },
    {
      icon: Flame,
      title: "Gas Leak Coordination",
      description: "Fast response and utility company coordination"
    },
    {
      icon: AlertTriangle,
      title: "Roof Leak Repairs",
      description: "Emergency tarping and temporary roof repairs"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-destructive/10 to-background">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            <span className="text-destructive">24/7</span> Emergency Repair Services
          </h1>
          <p className="text-2xl text-muted-foreground mb-10 font-medium">
            We're Here When You Need Us Most
          </p>
          <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white text-base px-8">
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency: (407) 555-0123
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <p className="text-lg text-center max-w-4xl mx-auto text-muted-foreground">
            Home emergencies don't wait for convenient times. That's why The Vadim Group offers rapid-response 
            emergency repair services for critical issues that can't wait.
          </p>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
            Emergency Services We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="border border-destructive/20 hover:border-destructive/40 transition-all p-6">
                <CardContent className="p-0">
                  <service.icon className="h-12 w-12 text-destructive mb-6" />
                  <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                  <p className="text-base text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice Banner */}
      <section className="py-12 bg-amber-500/10 border-y border-amber-500/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex gap-6 items-start">
            <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-medium mb-3 text-amber-900 dark:text-amber-100">
                Important Notice
              </h3>
              <p className="text-base text-amber-900/80 dark:text-amber-100/80">
                For life-threatening emergencies, always call 911 first. Our emergency services are for urgent 
                property repairs that cannot wait for regular business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Don't Wait — Act Now
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Water damage, electrical issues, and structural problems get worse by the minute.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white text-base px-8">
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Line Now
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              Save Our Number
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmergencyServices;
