import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Get Started?</h2>
        <p className="text-lg mb-10 opacity-90 max-w-3xl mx-auto">
          Contact us today for a free consultation and quote. We're ready to bring your vision to
          life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-base px-8">
            <Phone className="mr-2 h-5 w-5" />
            Call (407) 555-0123
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            <Mail className="mr-2 h-5 w-5" />
            Email Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
