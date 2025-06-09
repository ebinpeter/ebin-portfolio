
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-tech-green mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am <span className="text-neon-blue font-semibold">Ebin Peter Joseph</span>, a Bachelor of Commerce (B.Com) graduate and a Flutter Developer with <span className="text-tech-green font-semibold">1.4 years of experience</span> in creating user-centric mobile applications.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in <span className="text-neon-blue">Flutter, Dart</span>, and state management techniques like <span className="text-tech-green">GetX and BLoC</span>, focusing on building scalable and efficient apps that ensure seamless user experiences.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-dark-bg p-6 rounded-lg border border-gray-700 hover:border-neon-blue transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p className="text-gray-300">B.Com Graduate</p>
              </div>
              
              <div className="bg-dark-bg p-6 rounded-lg border border-gray-700 hover:border-tech-green transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">Kochi, India</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-dark-bg to-dark-accent p-8 rounded-2xl border border-gray-700 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Me?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">1.4+ years of hands-on Flutter development experience</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-tech-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Expertise in modern state management solutions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Focus on user-centric design and performance</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-tech-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Experience with CI/CD and modern development practices</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
