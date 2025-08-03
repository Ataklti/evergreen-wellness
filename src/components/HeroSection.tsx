import { Button } from '@/components/ui/button';
import { Calendar, Phone, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-spa-treatment.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elegant spa treatment room" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Evergreen
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-white/90 mt-2">
              Medical Spa
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            A clinical approach to aesthetics from physicians who care about your wellness and beauty
          </p>

          {/* Subtitle */}
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Experience the perfect blend of medical expertise and luxury spa treatments in the heart of Wello Sefer
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-elegant"
              onClick={scrollToContact}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg glass-effect"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call +251 938 860000
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-gentle-bounce text-white/80 hover:text-white transition-smooth"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
            <p className="text-sm mt-2 font-light">Discover More</p>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;