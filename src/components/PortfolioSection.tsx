
const PortfolioSection = () => {
  const projects = [
    {
      title: 'Yadava Milk Delivery App',
      description: 'Mobile app for efficient milk delivery scheduling and tracking with real-time location updates and customer management.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'GetX', 'Live Location', 'Payment Gateway'],
      features: ['Real-time tracking', 'Automated scheduling', 'Customer portal', 'Payment integration']
    },
    {
      title: 'Prefect Hardware Application',
      description: 'Web/mobile system for managing hardware products and services with inventory management and customer relationship features.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      technologies: ['Flutter', 'BLoC', 'RESTful API', 'Firebase', 'CI/CD'],
      features: ['Inventory management', 'Order tracking', 'Customer CRM', 'Analytics dashboard']
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-neon-blue">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-tech-green mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in Flutter development and modern app architecture.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-dark-bg rounded-2xl overflow-hidden border border-gray-700 hover:border-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20 group animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          techIndex % 2 === 0 
                            ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' 
                            : 'bg-tech-green/20 text-tech-green border border-tech-green/30'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${featureIndex % 2 === 0 ? 'bg-neon-blue' : 'bg-tech-green'}`}></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 bg-gradient-to-r from-neon-blue to-tech-green hover:from-tech-green hover:to-neon-blue text-dark-bg font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    View Details
                  </button>
                  <button className="flex-1 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
