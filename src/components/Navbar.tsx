import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // inside Navbar component (replace your existing scrollToSection)
// replace your scrollToSection with this
const scrollToSection = (sectionId: string) => {
  setIsMenuOpen(false);

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.replace(/\/$/, "");
  const currentPath = location.pathname.replace(/\/$/, "");
  const isHome =
    (normalizedBase === "" && (currentPath === "" || currentPath === "/")) ||
    currentPath === normalizedBase;

  const cleanId = sectionId.replace(/^#/, "");

  if (isHome) {
    // Try to scroll immediately if element exists
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // If element not present, navigate to base#id — the Home component will smooth-scroll after load
    window.location.href = `${base}#${cleanId}`;
    return;
  }

  // Not on homepage -> navigate to home + hash (home will handle smooth scroll)
  window.location.href = `${base}#${cleanId}`;
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
              <span className="font-bold text-xl text-foreground">
                Sanjeevini
              </span>
              <span className="text-xs text-muted-foreground block -mt-1">
                Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.path === location.pathname && !link.section;

              // Section links: scroll within page (no Link component)
              if (link.section) {
                return (
                  <Button
                    key={link.label}
                    variant="ghost"
                    onClick={() => scrollToSection(link.section!)}
                    className={isActive ? "bg-accent text-primary" : ""}
                  >
                    {link.label}
                  </Button>
                );
              }

              // Normal route links
              return (
                <Button
                  key={link.label}
                  variant="ghost"
                  asChild
                  className={isActive ? "bg-accent text-primary" : ""}
                >
                  <Link to={link.path}>{link.label}</Link>
                </Button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="hero" onClick={() => scrollToSection("contact")}>
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
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.path === location.pathname && !link.section;

                if (link.section) {
                  return (
                    <Button
                      key={link.label}
                      variant="ghost"
                      className={`justify-start ${
                        isActive ? "bg-accent text-primary" : ""
                      }`}
                      onClick={() => scrollToSection(link.section!)}
                    >
                      {link.label}
                    </Button>
                  );
                }

                return (
                  <Button
                    key={link.label}
                    variant="ghost"
                    asChild
                    className={`justify-start ${
                      isActive ? "bg-accent text-primary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to={link.path}>{link.label}</Link>
                  </Button>
                );
              })}

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
