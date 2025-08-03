import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Send,
  MessageCircle 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Received!",
      description: "We'll contact you within 24 hours to schedule your appointment.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Wello Sefer", "Near Kera Taxi Station", "Addis Ababa, Ethiopia"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+251 938 860000"],
      action: "Call Now"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Saturday: 9:00 AM - 5:00 PM", "Sunday: By Appointment"],
      action: null
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@evergreenmedispa.com", "consultations@evergreenmedispa.com"],
      action: "Send Email"
    }
  ];

  const services = [
    "HydraFacial",
    "Microneedling", 
    "Chemical Peels",
    "Botox & Dermal Fillers",
    "Laser Skin Treatments",
    "PRP Therapy",
    "Medical Grade Skincare",
    "General Consultation"
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 subtle-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Schedule Your Consultation
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Take the first step towards your aesthetic goals. Our medical team is here 
            to guide you on your journey to enhanced confidence and natural beauty.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-border/50 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground flex items-center">
                <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                Book Your Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-3 py-2 border border-border/50 rounded-md focus:outline-none focus:border-primary bg-background"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your aesthetic goals or any questions you have..."
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Request Consultation
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll contact you within 24 hours to schedule your appointment
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-elegant transition-elegant border-border/50 bg-card/90 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.action && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          {info.action}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="shadow-soft border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Find Us</h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Wello Sefer, Near Kera Taxi Station</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;