
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
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With over 2 years of real-world experience in Flutter app development, I focus on delivering mobile apps that are fast, reliable, and enjoyable to use. Here's why clients love working with me:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Skilled in building apps that work seamlessly on both Android and iOS</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-tech-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Expert in creating smooth, responsive, and user-friendly designs</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Strong understanding of app structure to ensure long-term performance and stability</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-tech-green rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Committed to turning your ideas into polished apps that users will love</span>
              </li>
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              I take care of the technical side so you can focus on your vision—stress-free and with full confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
