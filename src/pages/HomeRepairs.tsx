import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import heroImage from "@/assets/home-repairs-hero.jpg";
import { CheckCircle2, MessageSquare, ClipboardCheck, FileText, Calendar, Wrench, Search, Handshake, ShieldCheck, Home, Hammer, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
const HomeRepairs = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "We'll get back to you within 24 hours."
    });
    setIsContactOpen(false);
  };
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-[120px]">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Home Repair Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">
            Comprehensive Home Repair Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your Trusted Partner for Every Home Repair Need
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-[100px] bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Info className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-semibold">Why Choose Us</h2>
            </div>
            <p className="text-xl text-foreground/90 leading-[1.7]">
              At The Vadim Group, we understand that your home is your sanctuary. Whether you need a quick fix or a complete renovation, our experienced team handles every project with the same level of care and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-[100px] bg-muted/30 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Hammer className="h-10 w-10 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-center">Common Home Repairs We Handle</h2>
          </div>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-[1.7]">
            From minor fixes to major renovations, we provide comprehensive repair services for every part of your home.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="interior" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Interior Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {interiorServices.map((service, index) => <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="exterior" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Exterior Repairs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {exteriorServices.map((service, index) => <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="kitchen" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Kitchen & Bathroom
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {kitchenBathroom.map((service, index) => <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="electrical" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Electrical & HVAC
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 pt-6">
                    {electricalRepairs.map((service, index) => <li key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div className="space-y-1">
                          <span className="font-semibold text-foreground text-[17px] block">{service.name}</span>
                          <span className="text-muted-foreground leading-[1.7] block">{service.desc}</span>
                        </div>
                      </li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="structural" className="border bg-card p-6">
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

              <AccordionItem value="hvac" className="border bg-card p-6">
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
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
              Home Maintenance Guide
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
              Regular maintenance can prevent costly repairs and extend the life of your home's systems and structures
            </p>
            
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-3xl mx-auto mb-8">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
                <TabsTrigger value="biannual">Every 2-3 Years</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly">
                <Card>
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
                <Card>
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
                <Card>
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
                <Card>
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
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
              Why Homes Need Regular Repairs
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              Understanding the Natural Aging Process
            </p>
            
            <div className="space-y-10">
              <p className="text-base text-muted-foreground">
                Every home, regardless of quality or age, requires ongoing maintenance and repairs. Understanding why repairs are necessary helps homeowners make informed decisions and budget appropriately.
              </p>
              
              <div>
                <h3 className="text-2xl font-medium mb-8">
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
              
              <div className="bg-muted/30 p-8 border border-border">
                <h3 className="text-xl font-medium mb-4">
                  The Cost of Waiting
                </h3>
                <p className="text-base text-muted-foreground">
                  Delaying repairs often leads to exponentially higher costs. A small roof leak ignored can result in thousands in water damage, mold remediation, and structural repairs. Our team helps you prioritize repairs to prevent small issues from becoming major problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Quality Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
              Our Quality Process
            </h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              The Difference Is in the Details
            </p>
            
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-base text-muted-foreground mb-8">
                At The Vadim Group, quality isn't an option — it's our foundation. Every finish, material, and fixture is chosen with care. Our network of specialists and craftsmen ensures that every surface, seam, and detail meets the highest standard of precision and design.
              </p>
              
              <h3 className="text-2xl font-medium mb-8">
                We Deliver:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Tailored solutions that reflect your lifestyle and brand</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Sustainable materials and modern techniques</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Flawless finishes that enhance comfort and value</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Transparent communication and project integrity</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Professionals with years of specialized experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Premium materials sourced from trusted suppliers</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Code-compliant work that passes inspections</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Clean job sites with respect for your property</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <ClipboardCheck className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle>Consultation & Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We listen carefully to understand your needs, inspect the issue thoroughly, and provide honest recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle>Detailed Estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You'll receive a clear, itemized estimate with no hidden fees. We explain every line item so you understand exactly what you're paying for.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle>Scheduling & Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work around your schedule and provide realistic timelines. Our team arrives on time, in uniform, and ready to work.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <CardTitle>Expert Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our skilled craftsmen complete the work using proper techniques, quality materials, and attention to detail.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">5</span>
                  </div>
                  <CardTitle>Inspection & Cleanup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We inspect our own work to ensure it meets our standards, then clean up thoroughly, leaving your space better than we found it.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <Handshake className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">6</span>
                  </div>
                  <CardTitle>Final Walkthrough</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We review the completed work with you, answer any questions, and ensure you're completely satisfied.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 lg:col-span-3 lg:max-w-md lg:mx-auto">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-primary">7</span>
                  </div>
                  <CardTitle>Warranty & Follow-Up</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every project is backed by our warranty, and we're always available for follow-up questions or concerns.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[100px] bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Common Home Repair Questions Answered
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto leading-[1.7]">
              Get answers to the most frequently asked questions about our home repair services.
            </p>
            
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="cost" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  How much does a typical home repair cost?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pt-6 leading-[1.7] text-[17px]">
                    Home repair costs vary based on the scope of work, materials needed, and labor time. Minor repairs like fixing a leaky faucet typically range from $150-$300, while larger projects like drywall repair can range from $300-$1,500. We provide transparent, detailed estimates before beginning any work so you know exactly what to expect.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="response" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  How quickly can you respond to repair requests?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pt-6 leading-[1.7] text-[17px]">
                    For standard repairs, we typically schedule within 2-5 business days. Emergency repairs receive same-day or next-day service depending on availability. We understand that some issues can't wait, and we prioritize urgent situations accordingly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranty" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  What kind of warranty do you offer?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pt-6 leading-[1.7] text-[17px]">
                    All our work comes with a comprehensive warranty that covers both labor and materials. The specific warranty length varies by project type, but we stand behind everything we do. If something isn't right, we'll make it right—no questions asked.
                  </p>
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="size" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Can you handle both small repairs and large renovations?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pt-6 leading-[1.7] text-[17px]">
                    Yes! No job is too small or too large for The Vadim Group. Whether you need a single outlet replaced or a complete home renovation, we approach every project with the same dedication to quality and customer satisfaction.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="presence" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  Do I need to be home during the repair?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pt-6 leading-[1.7] text-[17px]">
                    It depends on the project. For some repairs, we can work independently after an initial consultation. For others, we may need access or input throughout the process. We'll discuss the specifics during scheduling and work around your availability.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="additional" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  What if the problem is worse than initially thought?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pt-6 leading-[1.7] text-[17px]">
                    Transparency is one of our core values. If we discover additional issues during a repair, we'll stop work, document the problem, and provide you with options and pricing before proceeding. You'll never receive surprise charges.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prioritize" className="border-2 border-border bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <AccordionTrigger className="text-[20px] font-bold hover:no-underline hover:text-primary transition-colors">
                  How do I know what repairs to prioritize?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pt-6 leading-[1.7] text-[17px]">
                    During our initial assessment, we'll help you identify which repairs are urgent (safety or structural concerns), important (preventing further damage), and desirable (aesthetic improvements). We'll provide honest recommendations based on your budget and goals.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-[120px] relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-light">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-light rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Ready to Fix Your Home?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-[1.7]">
              Contact us today for a free estimate and let us restore your home to perfection.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="secondary" className="text-lg px-12 py-7 h-auto font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl" onClick={() => setIsContactOpen(true)}>
                <MessageSquare className="h-6 w-6 mr-3" />
                REQUEST FREE ESTIMATE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Request Free Estimate</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Needed</Label>
              <Input id="service" required placeholder="e.g., Drywall repair, Plumbing fix" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional Details</Label>
              <Textarea id="message" placeholder="Describe the repair needed..." />
            </div>
            <Button type="submit" className="w-full">Submit Request</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>;
};
export default HomeRepairs;