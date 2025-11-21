import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Sanjeevini Clinic</h3>
            <p className="text-sm opacity-90 mb-4">
              Providing compassionate healthcare with over 23 years of medical excellence 
              in general practice, diabetology, and critical care.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-primary" />
              <span>Your health is our priority</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#about" 
                  className="opacity-90 hover:opacity-100 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Doctor
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="opacity-90 hover:opacity-100 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="opacity-90 hover:opacity-100 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#location" 
                  className="opacity-90 hover:opacity-100 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Timing */}
          <div>
            <h4 className="font-semibold mb-4">Clinic Hours</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
              <li className="pt-2 text-primary">
                Emergency consultations available
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>© {new Date().getFullYear()} Sanjeevini Clinic. All rights reserved.</p>
            <p className="text-xs">
              Built with care for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
