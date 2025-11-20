import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: "Home", path: "/", section: null },
    { label: "About", path: "/", section: "about" },
    { label: "Services", path: "/", section: "services" },
    { label: "Diet Charts", path: "/diet-charts", section: null },
    { label: "Contact", path: "/", section: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <span className="font-bold text-xl text-foreground">Sanjeevani</span>
              <span className="text-xs text-muted-foreground block -mt-1">Clinic</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                asChild={!link.section}
                onClick={link.section ? () => scrollToSection(link.section) : undefined}
                className={`${
                  link.path === location.pathname && !link.section
                    ? "bg-accent text-primary"
                    : ""
                }`}
              >
                {link.section ? (
                  <button>{link.label}</button>
                ) : (
                  <Link to={link.path}>{link.label}</Link>
                )}
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              variant="hero" 
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="ghost"
                  asChild={!link.section}
                  onClick={link.section ? () => scrollToSection(link.section) : () => setIsMenuOpen(false)}
                  className={`justify-start ${
                    link.path === location.pathname && !link.section
                      ? "bg-accent text-primary"
                      : ""
                  }`}
                >
                  {link.section ? (
                    <button>{link.label}</button>
                  ) : (
                    <Link to={link.path}>{link.label}</Link>
                  )}
                </Button>
              ))}
              <Button 
                variant="hero" 
                className="mt-2"
                onClick={() => scrollToSection("contact")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
