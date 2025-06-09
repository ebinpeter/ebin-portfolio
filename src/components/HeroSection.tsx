
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-accent opacity-50"></div>
      
      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-blue rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-tech-green rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-neon-blue rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className={`text-center z-10 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-neon-blue to-tech-green p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face`}
                  alt="Ebin Peter Joseph"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-tech-green rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-white to-tech-green bg-clip-text text-transparent leading-tight">
          Ebin Peter Joseph
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-neon-blue mb-6">
          Flutter Developer & App Specialist
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building scalable Android, iOS, and web applications with cutting-edge technology and elegant design
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('portfolio')}
            className="bg-gradient-to-r from-neon-blue to-tech-green hover:from-tech-green hover:to-neon-blue text-dark-bg font-semibold px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 glow-effect"
          >
            View My Work
          </Button>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
