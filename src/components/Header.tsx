import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Home Repairs", href: "/home-repairs", isRoute: true },
    { name: "Other Services", href: "/other-services", isRoute: true },
    { name: "Emergency", href: "/emergency-services", isRoute: true },
    { name: "Contact", href: "/contact", isRoute: true },
    { name: "Blog", href: "/blog", isRoute: true },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-primary/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="The Vadim Group" className="h-10 w-10" />
          <span className="text-xl font-semibold text-white tracking-tight">The Vadim Group</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => 
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-base font-normal text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-normal text-white/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:4075550123" className="text-lg font-semibold text-secondary hover:text-secondary-glow transition-colors">
            (407) 555-0123
          </a>
          <Button size="default" className="bg-secondary hover:bg-secondary-glow text-white font-semibold px-6">
            Get a Quote
          </Button>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto flex flex-col py-6 px-8 gap-4">
            {navLinks.map((link) => 
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-white/90 hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white/90 hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <a href="tel:4075550123" className="text-lg font-bold text-secondary">
              (407) 555-0123
            </a>
            <Button size="lg" className="w-full bg-secondary hover:bg-secondary-glow text-white font-semibold">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
