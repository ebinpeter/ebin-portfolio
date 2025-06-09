
const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="text-neon-blue">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-tech-green mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-tech-green transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row items-start md:items-center">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-dark-bg transform md:-translate-x-1/2 z-10 animate-pulse"></div>
              
              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-dark-card p-6 rounded-xl border border-gray-700 hover:border-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20">
                  <h3 className="text-xl font-bold text-white mb-2">Flutter Developer</h3>
                  <h4 className="text-neon-blue font-semibold mb-3">Clan LEO Pvt. Ltd</h4>
                  <p className="text-gray-400 text-sm mb-4">October 2023 – January 2025</p>
                  
                  <div className="space-y-2">
                    <h5 className="text-white font-semibold">Key Responsibilities:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="text-tech-green mt-1">•</span>
                        <span>Developed cross-platform Android & iOS applications using Flutter</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-tech-green mt-1">•</span>
                        <span>Implemented CI/CD pipelines for automated deployment</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-tech-green mt-1">•</span>
                        <span>Integrated Firebase Authentication and Firestore database</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-tech-green mt-1">•</span>
                        <span>Implemented live location tracking and third-party service integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Achievement badges */}
              <div className="hidden md:block md:w-1/2 md:pl-8">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-neon-blue/20 to-transparent p-3 rounded-lg border border-neon-blue/30">
                    <span className="text-neon-blue text-sm font-semibold">Mobile Apps</span>
                  </div>
                  <div className="bg-gradient-to-br from-tech-green/20 to-transparent p-3 rounded-lg border border-tech-green/30">
                    <span className="text-tech-green text-sm font-semibold">CI/CD</span>
                  </div>
                  <div className="bg-gradient-to-br from-neon-blue/20 to-transparent p-3 rounded-lg border border-neon-blue/30">
                    <span className="text-neon-blue text-sm font-semibold">Firebase</span>
                  </div>
                  <div className="bg-gradient-to-br from-tech-green/20 to-transparent p-3 rounded-lg border border-tech-green/30">
                    <span className="text-tech-green text-sm font-semibold">Live Location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
