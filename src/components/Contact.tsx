import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 XXXXX XXXXX",
      action: "Call Now",
      href: "tel:+91XXXXXXXXXX",
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@sanjeevaniclinic.com",
      action: "Send Email",
      href: "mailto:contact@sanjeevaniclinic.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 8:00 PM\nSunday: 10:00 AM - 2:00 PM",
      action: null,
      href: null,
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Sanjeevani Clinic\nYour City, Your State - 000000",
      action: "Get Directions",
      href: "#location",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-sm font-semibold text-primary">Get In Touch</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-primary">Sanjeevani Clinic</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your appointment or reach out to us with any questions. 
            We're here to help you achieve optimal health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-lg transition-all border-primary/20"
            >
              <div className="mb-4 p-4 bg-primary/10 rounded-full inline-block">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{info.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                {info.details}
              </p>
              {info.action && info.href && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  onClick={(e) => {
                    if (info.href === "#location") {
                      e.preventDefault();
                      document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <a href={info.href}>
                    {info.action}
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>

        {/* Emergency Notice */}
        <Card className="p-6 bg-primary/5 border-primary/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Need Immediate Medical Attention?</h3>
              <p className="text-muted-foreground">
                For medical emergencies, please call our emergency line or visit the nearest hospital.
              </p>
            </div>
            <Button variant="hero" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: +91 XXXXX XXXXX
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
