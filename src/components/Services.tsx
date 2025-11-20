import { Card } from "@/components/ui/card";
import { Activity, Heart, Pill, Stethoscope, UserCheck, AlertCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Practice",
      description: "Comprehensive primary healthcare for all ages, including routine checkups, diagnosis, and treatment of common illnesses.",
      features: ["Health Checkups", "Preventive Care", "Acute Illness Treatment", "Chronic Disease Management"],
    },
    {
      icon: Activity,
      title: "Diabetology",
      description: "Specialized diabetes care including diagnosis, treatment planning, and long-term management of Type 1 and Type 2 diabetes.",
      features: ["Diabetes Screening", "HbA1c Monitoring", "Diet Planning", "Insulin Management"],
    },
    {
      icon: AlertCircle,
      title: "Critical Care Consultation",
      description: "Expert guidance for critical and intensive care cases, leveraging 23+ years of ICU experience.",
      features: ["Emergency Consultation", "Post-ICU Follow-up", "Critical Condition Management", "Family Counseling"],
    },
    {
      icon: Heart,
      title: "Hypertension Management",
      description: "Comprehensive blood pressure monitoring and treatment to prevent cardiovascular complications.",
      features: ["BP Monitoring", "Medication Management", "Lifestyle Counseling", "Risk Assessment"],
    },
    {
      icon: UserCheck,
      title: "Health Screenings",
      description: "Regular health assessments and preventive screenings to detect potential health issues early.",
      features: ["Full Body Checkup", "Blood Tests", "ECG", "Health Reports"],
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Expert prescription management and monitoring to ensure safe and effective treatment outcomes.",
      features: ["Prescription Review", "Drug Interaction Check", "Follow-up Care", "Dosage Optimization"],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
            <p className="text-xs sm:text-sm font-semibold text-primary">Our Services</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Comprehensive <span className="text-primary">Healthcare Services</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            From routine checkups to specialized diabetology care, we provide comprehensive 
            medical services tailored to your health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-xl inline-block">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
