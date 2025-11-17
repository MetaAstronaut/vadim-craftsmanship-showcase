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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-destructive/40 via-primary-dark/85 to-primary-dark/90" />
        <div className="absolute inset-0 bg-texture-noise opacity-20" />
        
        {/* Animated accent elements */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-destructive/10 rounded-full blur-[120px] animate-pulse" />
        
        <div className="container-custom relative z-10 text-center px-4 py-32">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-[1.05]">
            <span className="text-secondary-glow">24/7</span> Emergency Repair Services
          </h1>
          
          {/* Decorative line */}
          <div className="flex items-center gap-4 py-2 justify-center mb-6">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-secondary/40" />
            <div className="h-[2px] w-16 bg-gradient-to-r from-secondary-glow to-secondary" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-secondary/40 to-transparent" />
          </div>
          
          <p className="text-2xl text-white/90 mb-8 font-light">
            We're Here When You Need Us Most
          </p>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Submit your emergency request below and we'll respond immediately
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <p className="text-xl text-center max-w-4xl mx-auto text-muted-foreground font-light leading-relaxed">
            Home emergencies don't wait for convenient times. That's why The Vadim Group offers rapid-response 
            emergency repair services for critical issues that can't wait.
          </p>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        
        <div className="container-custom relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight">
            Emergency Services We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <Card key={index} className="group border-2 border-destructive/30 hover:border-destructive/60 transition-all duration-300 p-8 hover:shadow-premium bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <service.icon className="h-12 w-12 text-destructive mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">{service.description}</p>
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
