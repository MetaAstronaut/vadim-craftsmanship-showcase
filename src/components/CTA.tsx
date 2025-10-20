import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote. We're ready to bring your vision to
          life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-base">
            <Phone className="mr-2 h-5 w-5" />
            Call (407) 555-0123
          </Button>
          <Button size="lg" variant="outline" className="text-base bg-white/10 hover:bg-white/20 border-white/20 text-white">
            <Mail className="mr-2 h-5 w-5" />
            Email Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
