import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles, 
  Zap, 
  Beaker, 
  Syringe, 
  Zap as LaserIcon, 
  Droplets, 
  Stethoscope 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "HydraFacial",
      description: "Deep cleansing, exfoliation, and hydration treatment that delivers instant, noticeable results with no downtime.",
      features: ["Immediate glow", "Deep hydration", "Customizable serums"],
      duration: "45-60 minutes"
    },
    {
      icon: Zap,
      title: "Microneedling",
      description: "Stimulate collagen production and improve skin texture with our advanced microneedling technology.",
      features: ["Reduces fine lines", "Improves texture", "Minimizes pores"],
      duration: "60-90 minutes"
    },
    {
      icon: Beaker,
      title: "Chemical Peels",
      description: "Professional-grade chemical peels to address various skin concerns from acne to aging.",
      features: ["Customized formulations", "Multiple depths", "Proven results"],
      duration: "30-45 minutes"
    },
    {
      icon: Syringe,
      title: "Botox & Dermal Fillers",
      description: "Physician-administered injectable treatments to smooth wrinkles and restore volume.",
      features: ["Natural-looking results", "FDA-approved products", "Expert injection technique"],
      duration: "15-30 minutes"
    },
    {
      icon: LaserIcon,
      title: "Laser Skin Treatments",
      description: "Advanced laser technology for skin rejuvenation, hair removal, and pigmentation correction.",
      features: ["Multiple laser systems", "Customized protocols", "Minimal downtime"],
      duration: "30-60 minutes"
    },
    {
      icon: Droplets,
      title: "PRP Therapy",
      description: "Harness your body's natural healing power with Platelet-Rich Plasma for skin rejuvenation.",
      features: ["Natural regeneration", "Collagen stimulation", "Long-lasting results"],
      duration: "60-90 minutes"
    },
    {
      icon: Stethoscope,
      title: "Medical Grade Skincare",
      description: "Comprehensive skin consultations with personalized medical-grade skincare regimens.",
      features: ["Professional assessment", "Custom protocols", "Ongoing support"],
      duration: "45-60 minutes"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Our Medical Aesthetic Services
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experience the perfect blend of medical expertise and luxury treatments, 
            each designed to enhance your natural beauty safely and effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group shadow-soft hover:shadow-elegant transition-elegant border-border/50 bg-card/90 backdrop-blur-sm h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif text-foreground">
                  {service.title}
                </CardTitle>
                <p className="text-sm text-primary font-medium">
                  Duration: {service.duration}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Ready to Begin Your Aesthetic Journey?
            </h3>
            <p className="text-muted-foreground">
              Schedule a consultation with our medical team to create a personalized treatment plan 
              tailored to your unique needs and aesthetic goals.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant px-8 py-4"
              onClick={scrollToContact}
            >
              Schedule Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;