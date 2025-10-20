import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, Droplets, Wrench, Zap, Home, Shield, AlertTriangle, Flame } from "lucide-react";
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

  const steps = [
    {
      number: 1,
      title: "Call our emergency hotline",
      description: "Available 24/7, every day of the year"
    },
    {
      number: 2,
      title: "Describe your urgent situation",
      description: "Our team will assess the severity and priority"
    },
    {
      number: 3,
      title: "We dispatch our emergency team",
      description: "Rapid response to your location"
    },
    {
      number: 4,
      title: "Immediate assessment and action",
      description: "On-site evaluation and emergency response"
    },
    {
      number: 5,
      title: "Temporary fixes to prevent further damage",
      description: "Stop the problem from getting worse"
    },
    {
      number: 6,
      title: "Schedule permanent repairs",
      description: "Plan for complete restoration and repair"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-destructive/20 via-background to-background">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="inline-block animate-pulse text-destructive">24/7</span>{" "}
              <span className="text-foreground">Emergency Repair Services</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-semibold">
              We're Here When You Need Us Most
            </p>
            <Button size="lg" className="text-lg h-14 px-8 bg-destructive hover:bg-destructive/90">
              <Phone className="mr-2 h-6 w-6" />
              Call Emergency Line: (407) 555-0123
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <p className="text-xl text-center max-w-4xl mx-auto text-muted-foreground leading-relaxed">
            Home emergencies don't wait for convenient times. That's why The Vadim Group offers rapid-response 
            emergency repair services for critical issues that can't wait.
          </p>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Emergency Services We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {emergencyServices.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 border-destructive/20 hover:border-destructive/50 transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-destructive mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-16 bg-destructive/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="h-16 w-16 text-destructive mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rapid Response When It Matters
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our emergency team is on-call 24/7 to handle urgent repairs. We understand that every minute 
              counts when you're facing a home emergency.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="flex gap-6 items-start p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice Banner */}
      <section className="py-8 bg-amber-500/20 border-y-2 border-amber-500/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto flex gap-4 items-start">
            <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-amber-900 dark:text-amber-100">
                Important Notice
              </h3>
              <p className="text-lg text-amber-900/80 dark:text-amber-100/80">
                For life-threatening emergencies, always call 911 first. Our emergency services are for urgent 
                property repairs that cannot wait for regular business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-destructive/10 to-background">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait — Act Now
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Water damage, electrical issues, and structural problems get worse by the minute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg h-14 px-8 bg-destructive hover:bg-destructive/90">
              <Phone className="mr-2 h-6 w-6" />
              Call Emergency Line Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-2">
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
