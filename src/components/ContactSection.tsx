
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Calendar, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_n5ctqcr', // Service ID
        'template_eza0wkr', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ebin Peter Joseph', // Your name
        },
        '44LJ2NTFxgqlKRzEW' // Public Key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Create <span className="text-neon-blue">Something Amazing!</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-tech-green mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue/20 to-tech-green/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-neon-blue" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Kerala, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue/20 to-tech-green/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-tech-green" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:+919746379976" className="text-gray-300 hover:text-neon-blue transition-colors">
                    +91 9746379976
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue/20 to-tech-green/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-neon-blue" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/ebin-peter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    Ebin Peter
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue/20 to-tech-green/20 rounded-lg flex items-center justify-center">
                  <Calendar className="text-tech-green" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Working Days</p>
                  <p className="text-gray-300">Monday - Friday</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-dark-card p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-dark-bg border-gray-600 text-white focus:border-neon-blue focus:ring-neon-blue"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-dark-bg border-gray-600 text-white focus:border-neon-blue focus:ring-neon-blue"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-dark-bg border-gray-600 text-white focus:border-neon-blue focus:ring-neon-blue min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-neon-blue to-tech-green hover:from-tech-green hover:to-neon-blue text-dark-bg font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
