import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/home-repairs-hero.jpg";
import { CheckCircle2 } from "lucide-react";

const HomeRepairs = () => {
  const interiorServices = [
    "Drywall Repair & Installation",
    "Painting Services",
    "Flooring Repair",
    "Door Repairs",
    "Window Repairs",
    "Ceiling Repairs",
    "Baseboard & Trim"
  ];

  const exteriorServices = [
    "Siding Repair",
    "Roof Repairs",
    "Gutter Services",
    "Deck & Patio",
    "Fence Repair",
    "Pressure Washing",
    "Weatherproofing"
  ];

  const kitchenBathroom = [
    "Plumbing Fixes",
    "Cabinet Repair",
    "Countertop Repair",
    "Tile & Grout",
    "Appliance Installation"
  ];

  const electricalHvac = [
    "Outlet and switch replacement",
    "Light fixture installation",
    "HVAC vent repair",
    "Thermostat installation"
  ];

  const monthlyTasks = [
    "Test smoke and carbon monoxide detectors",
    "Check HVAC filters and replace if needed",
    "Inspect plumbing for leaks",
    "Clean garbage disposal",
    "Test garage door safety features"
  ];

  const quarterlyTasks = [
    "Deep clean kitchen exhaust fan",
    "Inspect and clean gutters",
    "Check weatherstripping on doors and windows",
    "Test sump pump",
    "Inspect caulking around tubs and showers"
  ];

  const annualTasks = [
    "Schedule professional HVAC maintenance",
    "Inspect roof for damage",
    "Clean dryer vents thoroughly",
    "Check water heater and flush if needed",
    "Inspect foundation for cracks",
    "Service garage door opener",
    "Deep clean and seal deck or patio"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Home Repair Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="container px-4 relative z-10 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
            Comprehensive Home Repair Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your Trusted Partner for Every Home Repair Need
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              At The Vadim Group, we understand that your home is your sanctuary. Whether you need a quick fix or a complete renovation, our experienced team handles every project with the same level of care and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">
            Our Home Repair Services
          </h2>
          
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="interior" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Interior Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    {interiorServices.map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exterior" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Exterior Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    {exteriorServices.map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kitchen" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Kitchen & Bathroom
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    {kitchenBathroom.map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="electrical" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Electrical & HVAC
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    {electricalHvac.map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Home Maintenance Guide */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in-up">
              Home Maintenance Guide
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Stay ahead of repairs with our recommended maintenance schedule
            </p>
            
            <Tabs defaultValue="monthly" className="w-full animate-fade-in">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Monthly Tasks</CardTitle>
                    <CardDescription>Essential checks to perform every month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {monthlyTasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="quarterly">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Quarterly Tasks</CardTitle>
                    <CardDescription>Important maintenance every 3 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {quarterlyTasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="annual">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Annual Tasks</CardTitle>
                    <CardDescription>Comprehensive yearly maintenance checklist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {annualTasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fix Your Home?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free estimate and let us restore your home to perfection.
          </p>
          <CTA />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeRepairs;
