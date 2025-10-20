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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  serviceType: z.string().min(1, "Please select a service type"),
  contactMethod: z.enum(["phone", "email"]),
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
    defaultValues: {
      contactMethod: "phone",
    },
  });

  const contactMethod = watch("contactMethod");
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
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to transform your space? Contact us today for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-16 md:py-20">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="bg-card border rounded-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Request a Free Quote</h2>
              
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

                {/* Preferred Contact Method */}
                <div className="space-y-3">
                  <Label>Preferred Contact Method</Label>
                  <RadioGroup
                    value={contactMethod}
                    onValueChange={(value) => setValue("contactMethod", value as "phone" | "email")}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact" className="cursor-pointer font-normal">
                        Phone
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact" className="cursor-pointer font-normal">
                        Email
                      </Label>
                    </div>
                  </RadioGroup>
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
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Let's Connect</h2>
              </div>

              {/* Phone */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground">Main: (407) 555-0123</p>
                    <p className="text-muted-foreground">Emergency: (407) 555-0124</p>
                  </div>
                </div>
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
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted border rounded-lg h-64 flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">Orlando, FL Service Area</p>
                <p className="text-sm text-muted-foreground">50-mile radius coverage</p>
              </div>
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
          <p className="text-lg text-muted-foreground mb-4">Prefer to talk?</p>
          <Button size="lg" variant="outline">
            <Phone className="mr-2 h-5 w-5" />
            Call us directly at (407) 555-0123
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
