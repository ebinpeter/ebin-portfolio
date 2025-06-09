
const ServicesSection = () => {
  const services = [
    {
      title: 'Full Stack App Development',
      description: 'End-to-end development of mobile (Android/iOS) and web applications using Flutter and web technologies.',
      icon: '📱',
      features: ['Cross-platform development', 'Responsive design', 'Performance optimization', 'App store deployment']
    },
    {
      title: 'API Integration & Firebase Solutions',
      description: 'Secure and scalable backend integration with real-time data features.',
      icon: '🔗',
      features: ['RESTful API integration', 'Firebase setup', 'Real-time databases', 'Authentication systems']
    },
    {
      title: 'Custom UI/UX Development',
      description: 'Modern and intuitive interfaces that elevate user experience.',
      icon: '🎨',
      features: ['Custom animations', 'Material Design', 'Responsive layouts', 'User-centric design']
    }
  ];

  return (
    <section id="services" className="section-padding bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-neon-blue">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-tech-green mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            I offer comprehensive development services to bring your ideas to life with modern technology and best practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-dark-card p-8 rounded-2xl border border-gray-700 hover:border-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${featureIndex % 2 === 0 ? 'bg-neon-blue' : 'bg-tech-green'}`}></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button className="w-full bg-gradient-to-r from-neon-blue/20 to-tech-green/20 hover:from-neon-blue/30 hover:to-tech-green/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-gray-600 hover:border-neon-blue">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
