import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/home-repairs-hero.jpg";
import { CheckCircle2 } from "lucide-react";
const HomeRepairs = () => {
  const interiorServices = [{
    name: "Drywall Repair & Installation",
    desc: "Fixing holes, cracks, water damage, and texture matching"
  }, {
    name: "Painting Services",
    desc: "Interior and exterior painting, color consultation, and specialty finishes"
  }, {
    name: "Flooring Repair",
    desc: "Hardwood refinishing, tile replacement, carpet repair, and vinyl installation"
  }, {
    name: "Door Repairs",
    desc: "Fixing squeaky hinges, alignment issues, lock installation, and door replacement"
  }, {
    name: "Window Repairs",
    desc: "Broken glass replacement, seal repairs, weatherproofing, and frame restoration"
  }, {
    name: "Ceiling Repairs",
    desc: "Water stain removal, popcorn ceiling removal, and crack repair"
  }, {
    name: "Baseboard & Trim",
    desc: "Installation, replacement, and custom millwork"
  }];
  const exteriorServices = [{
    name: "Siding Repair",
    desc: "Vinyl, wood, and fiber cement siding repair and replacement"
  }, {
    name: "Roof Repairs",
    desc: "Shingle replacement, leak repair, flashing installation, and emergency repairs"
  }, {
    name: "Gutter Services",
    desc: "Cleaning, repair, installation, and gutter guard systems"
  }, {
    name: "Deck & Patio",
    desc: "Wood and composite deck repair, staining, sealing, and structural reinforcement"
  }, {
    name: "Fence Repair",
    desc: "Post replacement, panel repair, gate adjustment, and staining"
  }, {
    name: "Pressure Washing",
    desc: "House washing, driveway cleaning, deck restoration, and surface preparation"
  }, {
    name: "Weatherproofing",
    desc: "Sealing, caulking, insulation upgrades, and moisture barrier installation"
  }];
  const kitchenBathroom = [{
    name: "Plumbing Fixes",
    desc: "Faucet repair, leak fixes, drain cleaning, and toilet repairs"
  }, {
    name: "Cabinet Repair",
    desc: "Hinge replacement, drawer repair, refinishing, and hardware upgrades"
  }, {
    name: "Countertop Repair",
    desc: "Chip repair, seam repair, resealing, and minor crack fixes"
  }, {
    name: "Tile & Grout",
    desc: "Tile replacement, grout repair and recoloring, caulking, and waterproofing"
  }, {
    name: "Appliance Installation",
    desc: "Dishwasher, garbage disposal, range hood, and built-in appliance installation"
  }];
  const electricalRepairs = [{
    name: "Outlet and Switch Replacement",
    desc: "Upgrading outlets, dimmer switches, and USB outlets"
  }, {
    name: "Light Fixture Installation",
    desc: "Installing and upgrading interior and exterior lighting"
  }, {
    name: "Ceiling Fan Installation and Repair",
    desc: "Professional installation, balancing, and repair services"
  }, {
    name: "Circuit Breaker Troubleshooting",
    desc: "Diagnosing and fixing electrical issues"
  }, {
    name: "GFCI Outlet Installation",
    desc: "Safety outlet installation for wet areas"
  }, {
    name: "Electrical Panel Upgrades",
    desc: "Modernizing electrical systems for increased capacity"
  }, {
    name: "Safety Inspections",
    desc: "Comprehensive electrical system evaluation"
  }];
  
  const structuralFoundation = [{
    name: "Foundation Crack Repair",
    desc: "Fixing cracks and preventing water intrusion"
  }, {
    name: "Settling Issues Assessment",
    desc: "Professional evaluation of structural settling"
  }, {
    name: "Load-Bearing Wall Modifications",
    desc: "Safe alterations to structural walls"
  }, {
    name: "Beam and Joist Reinforcement",
    desc: "Strengthening structural support systems"
  }, {
    name: "Structural Inspection Services",
    desc: "Detailed assessment of home structural integrity"
  }];
  
  const hvacClimate = [{
    name: "Vent Repair and Cleaning",
    desc: "Ductwork maintenance and airflow optimization"
  }, {
    name: "Thermostat Installation",
    desc: "Smart and programmable thermostat setup"
  }, {
    name: "Ductwork Repair",
    desc: "Sealing leaks and improving system efficiency"
  }, {
    name: "Insulation Installation",
    desc: "Enhancing energy efficiency and comfort"
  }, {
    name: "Weatherstripping and Draft Prevention",
    desc: "Sealing air leaks around doors and windows"
  }];
  const monthlyTasks = ["Test smoke and carbon monoxide detectors", "Check for plumbing leaks under sinks and around toilets", "Clean or replace HVAC filters", "Inspect weatherstripping around doors and windows", "Test GFCI outlets"];
  const quarterlyTasks = ["Clean gutters and downspouts", "Inspect roof for damaged shingles", "Check caulking around tubs, showers, and sinks", "Test garage door safety features", "Inspect foundation for cracks"];
  const annualTasks = ["Service HVAC system", "Inspect and clean chimney and fireplace", "Check attic and basement for moisture and pests", "Test sump pump (if applicable)", "Inspect exterior paint and siding", "Service water heater", "Check deck and patio for structural issues"];
  const biannualTasks = ["Deep clean carpets and upholstery", "Inspect and service septic system", "Reseal driveway and walkways", "Inspect and treat wood for termites"];
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Home Repair Services" className="w-full h-full object-cover" />
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">Common Home Repairs We Handle</h2>
          
          <div className="max-w-4xl mx-auto animate-fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="interior" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Interior Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-4 pt-4">
                    {interiorServices.map((service, index) => <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground">{service.name}</span>
                          <span className="text-muted-foreground"> - {service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exterior" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Exterior Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-4 pt-4">
                    {exteriorServices.map((service, index) => <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground">{service.name}</span>
                          <span className="text-muted-foreground"> - {service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kitchen" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Kitchen & Bathroom
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-4 pt-4">
                    {kitchenBathroom.map((service, index) => <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground">{service.name}</span>
                          <span className="text-muted-foreground"> - {service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="electrical" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Electrical Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-4 pt-4">
                    {electricalRepairs.map((service, index) => <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground">{service.name}</span>
                          <span className="text-muted-foreground"> - {service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="structural" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  Structural & Foundation
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-4 pt-4">
                    {structuralFoundation.map((service, index) => <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground">{service.name}</span>
                          <span className="text-muted-foreground"> - {service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hvac" className="card-hover border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                  HVAC & Climate Control
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-4 pt-4">
                    {hvacClimate.map((service, index) => <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium text-foreground">{service.name}</span>
                          <span className="text-muted-foreground"> - {service.desc}</span>
                        </div>
                      </li>)}
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
              <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
                <TabsTrigger value="biannual">Every 2-3 Years</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Monthly Tasks</CardTitle>
                    <CardDescription>Essential checks to perform every month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {monthlyTasks.map((task, index) => <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>)}
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
                      {quarterlyTasks.map((task, index) => <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>)}
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
                      {annualTasks.map((task, index) => <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="biannual">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Every 2-3 Years</CardTitle>
                    <CardDescription>Long-term maintenance for optimal home care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {biannualTasks.map((task, index) => <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{task}</span>
                        </li>)}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why Homes Need Regular Repairs */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in-up">
              Why Homes Need Regular Repairs
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Understanding the Natural Aging Process
            </p>
            
            <div className="animate-fade-in space-y-8">
              <p className="text-lg text-foreground leading-relaxed">
                Every home, regardless of quality or age, requires ongoing maintenance and repairs. Understanding why repairs are necessary helps homeowners make informed decisions and budget appropriately.
              </p>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Common Causes of Home Repair Needs:
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0">1.</span>
                    <div>
                      <span className="font-semibold text-foreground">Wear and Tear</span>
                      <span className="text-muted-foreground"> - Daily use gradually degrades materials, finishes, and mechanical systems</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0">2.</span>
                    <div>
                      <span className="font-semibold text-foreground">Weather Exposure</span>
                      <span className="text-muted-foreground"> - Sun, rain, wind, humidity, and temperature fluctuations affect exterior and interior elements</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0">3.</span>
                    <div>
                      <span className="font-semibold text-foreground">Settling</span>
                      <span className="text-muted-foreground"> - Homes naturally settle over time, causing minor cracks and alignment issues</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0">4.</span>
                    <div>
                      <span className="font-semibold text-foreground">Material Degradation</span>
                      <span className="text-muted-foreground"> - Wood rots, metal corrodes, rubber seals crack, and paint fades</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0">5.</span>
                    <div>
                      <span className="font-semibold text-foreground">System Aging</span>
                      <span className="text-muted-foreground"> - Plumbing, electrical, and HVAC systems have limited lifespans</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0">6.</span>
                    <div>
                      <span className="font-semibold text-foreground">Improper Installation</span>
                      <span className="text-muted-foreground"> - Previous substandard work often reveals itself over time</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-primary font-bold text-lg flex-shrink-0">7.</span>
                    <div>
                      <span className="font-semibold text-foreground">Neglect</span>
                      <span className="text-muted-foreground"> - Deferred maintenance leads to compound problems</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  The Cost of Waiting
                </h3>
                <p className="text-foreground leading-relaxed">
                  Delaying repairs often leads to exponentially higher costs. A small roof leak ignored can result in thousands in water damage, mold remediation, and structural repairs. Our team helps you prioritize repairs to prevent small issues from becoming major problems.
                </p>
              </div>
            </div>
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
    </div>;
};
export default HomeRepairs;