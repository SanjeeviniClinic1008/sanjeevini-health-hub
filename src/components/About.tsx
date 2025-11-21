import { Card } from "@/components/ui/card";
import { Award, Heart, Users, Stethoscope } from "lucide-react";
import doctorImage from "@/assets/doctor-portrait.jpg";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "23+ Years Experience",
      description: "Extensive experience in critical and intensive care",
    },
    {
      icon: Stethoscope,
      title: "Specialized Care",
      description: "General Practice & Diabetology expertise",
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "Compassionate care for every individual",
    },
    {
      icon: Heart,
      title: "Hospital Expertise",
      description: "Worked with leading private hospital organizations",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-3xl blur-2xl" />
            <img
              src={doctorImage}
              alt="Doctor Portrait"
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
              <p className="text-xs sm:text-sm font-semibold text-primary">Meet Your Doctor</p>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Dedicated to Your <span className="text-primary">Health & Wellbeing</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              With over 23 years of distinguished experience in general practice, diabetology, 
              and critical care, I bring comprehensive medical expertise to Sanjeevini Clinic.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              My extensive background includes working with leading private hospital organizations, 
              specializing in intensive care and managing complex medical conditions. At Sanjeevini 
              Clinic, every patient receives personalized, compassionate care backed by decades of 
              medical excellence.
            </p>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 border-primary/20 hover:border-primary/40 transition-all hover:shadow-md">
                  <achievement.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
