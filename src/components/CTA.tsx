import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-[0.2em] text-secondary-light font-semibold">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-semibold mb-8">Ready to Get Started?</h2>
          <div className="divider-elegant opacity-60"></div>
          
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed font-light">
            Contact us today for a free consultation and quote. We're ready to bring your vision to
            life with unparalleled craftsmanship and attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="group text-base px-10 py-6 h-auto shadow-xl hover:shadow-2xl"
            >
              <Phone className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Call (407) 555-0123
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group text-base px-10 py-6 h-auto border-white/30 text-white hover:bg-white/10"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Emergency Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Licensed</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">& Insured</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
