
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
              Are you looking for a reliable and professional Flutter developer to bring your mobile app idea to life? You're in the right place.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Flutter developer with <span className="text-neon-blue font-semibold">over 2 years of experience</span> in building high-quality, cross-platform mobile applications for both iOS and Android. I specialize in creating scalable, intuitive, and user-focused apps that not only look great but perform flawlessly.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              From clean architecture and state management (using <span className="text-tech-green font-semibold">GetX and BLoC</span>) to pixel-perfect UI design and seamless functionality, I take care of the entire development process. My focus is always on delivering smooth user experiences that reflect your vision and goals.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I love building beautiful, functional apps—and even more, I enjoy seeing people use and benefit from them.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-dark-bg to-dark-accent p-8 rounded-2xl border border-gray-700 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Me?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">2+ years of hands-on Flutter development experience</span>
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
