import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden border-t border-border">
      {/* Premium Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-secondary/10"></div>
      
      {/* Elegant accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      
      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-8">
            <span className="text-sm uppercase tracking-[0.3em] text-secondary font-bold">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
            Ready to Get Started?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-10"></div>
          
          <p className="text-xl md:text-2xl mb-14 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and quote. We're ready to bring your vision to
            life with unparalleled craftsmanship and attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              variant="default" 
              className="group text-lg px-12 py-7 h-auto shadow-premium hover:shadow-2xl font-semibold"
            >
              <Phone className="mr-3 h-6 w-6 transition-transform group-hover:scale-110" />
              Call (407) 555-0123
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group text-lg px-12 py-7 h-auto border-2 border-foreground/20 hover:border-secondary hover:bg-secondary/5 font-semibold"
            >
              <Mail className="mr-3 h-6 w-6" />
              Email Us
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-16 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group">
                <div className="text-5xl font-bold mb-3 text-secondary">24/7</div>
                <div className="text-sm text-foreground/70 uppercase tracking-[0.2em] font-semibold">Emergency Service</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-3 text-secondary">Licensed</div>
                <div className="text-sm text-foreground/70 uppercase tracking-[0.2em] font-semibold">& Insured</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold mb-3 text-secondary">100%</div>
                <div className="text-sm text-foreground/70 uppercase tracking-[0.2em] font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
