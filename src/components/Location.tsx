import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const Location = () => {
  // Replace with actual Google Maps coordinates
  const googleMapsUrl = "https://www.google.com/maps/search/Sanjeevini+Clinic";

  return (
    <section id="location" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
            <p className="text-xs sm:text-sm font-semibold text-primary">Visit Us</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Find <span className="text-primary">Our Clinic</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conveniently located and easily accessible. Visit us for a consultation or book an appointment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* Map Card */}
          <Card className="lg:col-span-2 p-0 overflow-hidden border-primary/20">
            <div className="aspect-video w-full bg-muted relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093716!2d-122.41941708468143!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Sanjeevini Clinic Location"
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 bg-card">
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => window.open(googleMapsUrl, '_blank')}
              >
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions to Clinic
              </Button>
            </div>
          </Card>

          {/* Address Details */}
          <div className="space-y-6">
            <Card className="p-6 border-primary/20">
              <div className="mb-4 p-3 bg-primary/10 rounded-xl inline-block">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clinic Address</h3>
              <address className="not-italic text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground">Sanjeevini Clinic</p>
                <p>Building/Street Name</p>
                <p>Area, Locality</p>
                <p>City, State - 000000</p>
                <p className="pt-2">India</p>
              </address>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/30">
              <h3 className="font-semibold mb-3">Parking Available</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Ample parking space available for patients. Wheelchair accessible entrance.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Ground floor clinic</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Easy public transport access</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
