import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const serviceType = watch("serviceType");

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2-4 business hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-background">
        <div className="container-custom text-center px-4">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="bg-card border p-8">
              <h2 className="text-3xl font-semibold mb-8">Request a Free Quote</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(407) 555-0123"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select
                    value={serviceType}
                    onValueChange={(value) => setValue("serviceType", value)}
                  >
                    <SelectTrigger className={errors.serviceType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home-repairs">Home Repairs</SelectItem>
                      <SelectItem value="commercial">Commercial Services</SelectItem>
                      <SelectItem value="marine-rv">Marine & RV Services</SelectItem>
                      <SelectItem value="automotive">Automotive Services</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.serviceType && (
                    <p className="text-sm text-destructive">{errors.serviceType.message}</p>
                  )}
                </div>


                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-semibold mb-8">Let's Connect</h2>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">info@thevadimgroup.com</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Emergency Services Only</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Area</h3>
                    <p className="text-muted-foreground">
                      We proudly serve Orlando and surrounding areas within a 50-mile radius.
                      Contact us to confirm service availability in your location.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 2-4 business hours during regular
                  business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="border overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95102373245!2d-81.81330678125!3d28.538336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Orlando, FL Service Area Map"
              />
            </div>
            <p className="text-center text-lg font-medium">
              Mobile service - we come to you!
            </p>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-12 bg-background">
        <div className="container px-4 text-center">
          <p className="text-lg text-muted-foreground mb-4">Ready to get started?</p>
          <Button 
            size="lg" 
            onClick={() => {
              document.querySelector('form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            REQUEST A QUOTE
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
