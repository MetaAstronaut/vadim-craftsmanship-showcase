import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white-new.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Home Repairs", href: "/home-repairs" },
    { name: "Other Services", href: "/other-services" },
    { name: "Emergency Services", href: "/emergency-services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src={logoWhite} alt="The Vadim Group" className="h-20 w-20 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-white">The Vadim Group</h3>
            <p className="text-white/70 text-base leading-relaxed">
              Professional repair services for homes, businesses, marine vessels, and luxury vehicles throughout the Orlando area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/70 hover:text-secondary transition-colors text-base"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/70">
                <Phone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:4075550123" className="hover:text-secondary transition-colors text-base">
                    (407) 555-0123
                  </a>
                  <p className="text-sm mt-1">Mon-Fri: 8AM - 6PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <a href="mailto:info@thevadimgroup.com" className="hover:text-secondary transition-colors text-base">
                  info@thevadimgroup.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-base">
                  Orlando, Lake Nona, Hunters Creek & surrounding areas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} The Vadim Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
