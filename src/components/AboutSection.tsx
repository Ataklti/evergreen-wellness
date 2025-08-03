import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Medical Expertise",
      description: "Physician-led treatments ensuring the highest standards of safety and efficacy"
    },
    {
      icon: Heart,
      title: "Wellness Focus",
      description: "Holistic approach combining medical science with beauty and wellness principles"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "State-of-the-art equipment and medical-grade products for optimal results"
    },
    {
      icon: Users,
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your unique skin needs and goals"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 subtle-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
                Where Medical Science Meets Beauty
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Evergreen Medical Spa, we believe that true beauty comes from the perfect 
                harmony between advanced medical science and personalized aesthetic care. Our 
                team of experienced physicians brings clinical expertise to every treatment, 
                ensuring both safety and exceptional results.
              </p>
              
              <p>
                Located in the heart of Wello Sefer, we've created a sanctuary where cutting-edge 
                medical aesthetics meet the tranquil luxury of a world-class spa. Every treatment 
                is thoughtfully designed to enhance your natural beauty while supporting your 
                overall wellness journey.
              </p>

              <p>
                Our commitment goes beyond surface-level treatments. We take the time to understand 
                your unique needs, lifestyle, and aesthetic goals to create a personalized treatment 
                plan that delivers lasting, natural-looking results.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-elegant transition-elegant border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;