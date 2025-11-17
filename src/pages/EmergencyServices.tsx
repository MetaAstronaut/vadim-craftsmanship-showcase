import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Droplets, Wrench, Zap, Home, Shield, AlertTriangle, Flame } from "lucide-react";
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Submit your emergency request below and we'll respond immediately
          </p>
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

      {/* Emergency Request Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
              Request Emergency Service
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-center">
              Fill out this form and we'll respond immediately. For life-threatening emergencies, call 911 first.
            </p>
            
            <Card className="border-destructive/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">Property Address *</label>
                    <Input id="address" placeholder="123 Main St, Orlando, FL" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="emergency" className="text-sm font-medium">Type of Emergency *</label>
                    <select 
                      id="emergency" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      required
                    >
                      <option value="">Select emergency type</option>
                      <option value="water">Water Damage & Flooding</option>
                      <option value="pipes">Burst Pipes & Plumbing</option>
                      <option value="electrical">Electrical Hazards</option>
                      <option value="storm">Storm Structural Damage</option>
                      <option value="boardup">Emergency Board-Up</option>
                      <option value="gas">Gas Leak</option>
                      <option value="roof">Roof Leak</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium">Emergency Description *</label>
                    <Textarea 
                      id="description" 
                      placeholder="Please describe the emergency situation in detail..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-destructive hover:bg-destructive/90 text-white text-base"
                  >
                    Submit Emergency Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmergencyServices;
