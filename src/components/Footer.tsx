
import { Phone, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-tech-green bg-clip-text text-transparent mb-2">
              Ebin Peter Joseph
            </h3>
            <p className="text-gray-400">Flutter Developer & App Specialist</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="tel:+919746379976"
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
            <a 
              href="https://github.com/ebinpeter"
              className="text-gray-400 hover:text-tech-green transition-colors duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:ebinpeter94@gmail.com"
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://wa.me/919746379976"
              className="text-gray-400 hover:text-tech-green transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <span className="text-xl">💬</span>
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ebin Peter Joseph. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
