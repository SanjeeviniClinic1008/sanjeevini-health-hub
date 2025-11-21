import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/clinic-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sanjeevini Clinic Interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent rounded-full">
            <p className="text-xs sm:text-sm font-semibold text-primary">
              Trusted Healthcare Since 2000
            </p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-foreground">Welcome to</span>
            <br />
            <span className="text-primary">Sanjeevini Clinic</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Expert medical care with over 23 years of experience in general practice, 
            diabetology, and critical care. Your health is our priority.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base sm:text-lg w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base sm:text-lg w-full sm:w-auto"
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Find Us
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-border">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">23+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">10k+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
