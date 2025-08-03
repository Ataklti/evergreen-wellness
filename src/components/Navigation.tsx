import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import evergreenLogo from '@/assets/evergreen-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-elegant ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={evergreenLogo} 
              alt="Evergreen Medical Spa" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-semibold text-primary">
                Evergreen Medical Spa
              </h1>
              <p className="text-xs text-muted-foreground">
                Clinical Approach to Aesthetics
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Call Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              <span>+251 938 860000</span>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-smooth"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-elegant border-t border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call +251 938 860000
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;