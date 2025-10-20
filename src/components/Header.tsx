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
    { name: "Emergency", href: "#emergency", isRoute: false },
    { name: "FAQ", href: "#faq", isRoute: false },
    { name: "Contact", href: "#contact", isRoute: false },
    { name: "Blog", href: "#blog", isRoute: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="The Vadim Group" className="h-10 w-10" />
          <span className="text-xl font-bold text-foreground">The Vadim Group</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => 
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            )
          )}
          <Button size="sm" className="ml-2">
            Get a Quote
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => 
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
            <Button size="sm" className="w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
