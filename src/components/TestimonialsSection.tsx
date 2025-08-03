import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      treatment: "HydraFacial & Botox",
      rating: 5,
      text: "The team at Evergreen Medical Spa is absolutely incredible. Dr. Smith's expertise and the luxurious atmosphere made me feel completely at ease. My skin has never looked better!",
      beforeAfter: "Reduced fine lines and glowing complexion"
    },
    {
      name: "Michael R.",
      treatment: "Laser Hair Removal",
      rating: 5,
      text: "Professional, clean, and results-driven. The laser treatments were comfortable and the results exceeded my expectations. The medical approach gives me complete confidence.",
      beforeAfter: "90% hair reduction after 6 sessions"
    },
    {
      name: "Aster K.",
      treatment: "Chemical Peel Series",
      rating: 5,
      text: "I've struggled with acne scars for years. The customized chemical peel treatment plan has transformed my skin. The physicians here truly understand skin science.",
      beforeAfter: "Significant improvement in skin texture and scarring"
    },
    {
      name: "Hanna T.",
      treatment: "PRP Therapy",
      rating: 5,
      text: "The PRP therapy was a game-changer for my aging skin. Natural results that keep improving over time. The medical team's knowledge and care is exceptional.",
      beforeAfter: "Enhanced collagen and skin elasticity"
    },
    {
      name: "David L.",
      treatment: "Dermal Fillers",
      rating: 5,
      text: "Subtle, natural-looking results that enhanced my features without looking overdone. The physician's artistic eye and medical expertise created the perfect balance.",
      beforeAfter: "Restored facial volume and youthful contours"
    },
    {
      name: "Ruth W.",
      treatment: "Microneedling + Medical Skincare",
      rating: 5,
      text: "The combination of microneedling treatments and medical-grade skincare has completely transformed my complexion. Professional, caring, and knowledgeable staff.",
      beforeAfter: "Improved skin tone and reduced pore size"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 luxury-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real experiences from real patients who have transformed their confidence 
            with our medical aesthetic treatments.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-soft hover:shadow-elegant transition-elegant border-border/50 bg-card/90 backdrop-blur-sm h-full"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Results */}
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-sm font-medium text-primary mb-1">Results:</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.beforeAfter}
                  </p>
                </div>

                {/* Patient Info */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary">
                    {testimonial.treatment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              Join Our Happy Patients
            </h3>
            <p className="text-muted-foreground">
              Experience the difference that physician-led aesthetic care can make. 
              Your transformation story starts with a consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;