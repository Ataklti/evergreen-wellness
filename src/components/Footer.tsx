import { Heart, Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import evergreenLogo from '@/assets/evergreen-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "HydraFacial",
    "Microneedling",
    "Chemical Peels",
    "Botox & Dermal Fillers",
    "Laser Treatments",
    "PRP Therapy"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={evergreenLogo} 
                alt="Evergreen Medical Spa" 
                className="h-12 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-serif font-semibold">
                  Evergreen Medical Spa
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  Clinical Approach to Aesthetics
                </p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Where medical science meets beauty. Our physician-led team is dedicated 
              to enhancing your natural beauty through safe, effective aesthetic treatments.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <nav className="space-y-3">
              {services.map((service, index) => (
                <p key={index} className="text-primary-foreground/80">
                  {service}
                </p>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/80 flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p>Wello Sefer</p>
                  <p>Near Kera Taxi Station</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <a 
                  href="tel:+251938860000"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  +251 938 860000
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <a 
                  href="mailto:info@evergreenmedispa.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  info@evergreenmedispa.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Evergreen Medical Spa. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Terms of Service
              </a>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>for Beautiful Skin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;