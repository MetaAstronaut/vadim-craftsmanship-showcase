import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/logo-white-new.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container px-4">
        {/* Logo and Company Info - Centered */}
        <div className="flex flex-col items-center text-center mb-12">
          <img src={logoWhite} alt="The Vadim Group" className="h-32 w-32 mb-6" />
          <p className="text-white/80 max-w-2xl mb-6 text-lg">
            Professional repair services for homes, businesses, marine vessels, and luxury
            vehicles throughout the Orlando area.
          </p>
          <div className="flex gap-4 mb-8">
            <a href="#" className="text-secondary hover:text-secondary-glow transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-secondary hover:text-secondary-glow transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:4075550123" className="hover:text-secondary transition-colors">
                  (407) 555-0123
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                <Mail className="h-5 w-5 text-secondary" />
                <a href="mailto:info@thevadimgroup.com" className="hover:text-secondary transition-colors">
                  info@thevadimgroup.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Service Areas</h3>
            <div className="flex items-start justify-center md:justify-start gap-2 text-white/80">
              <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
              <span>
                Orlando, Lake Nona, Hunters Creek, Avalon Park, Dr. Phillips, Windermere & more
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Business Hours</h3>
            <div className="space-y-2 text-white/80">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Emergency Services Only</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} The Vadim Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
