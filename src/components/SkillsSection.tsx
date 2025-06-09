
const SkillsSection = () => {
  const skills = [
    { name: 'Flutter & Dart', level: 95, color: 'neon-blue' },
    { name: 'GetX & BLoC', level: 90, color: 'tech-green' },
    { name: 'Firebase', level: 85, color: 'neon-blue' },
    { name: 'Payment Gateway Integration', level: 80, color: 'tech-green' },
    { name: 'RESTful API Integration', level: 88, color: 'neon-blue' },
    { name: 'Animations & UI/UX', level: 85, color: 'tech-green' },
    { name: 'Git/GitHub', level: 90, color: 'neon-blue' },
    { name: 'Live Location Access', level: 80, color: 'tech-green' },
    { name: 'CI/CD', level: 75, color: 'neon-blue' }
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['Flutter', 'Dart', 'UI/UX Design', 'Animations'],
      icon: '🎨'
    },
    {
      title: 'State Management',
      skills: ['GetX', 'BLoC', 'Provider', 'Riverpod'],
      icon: '⚡'
    },
    {
      title: 'Backend & Services',
      skills: ['Firebase', 'RESTful APIs', 'Payment Gateways', 'Live Location'],
      icon: '🔧'
    },
    {
      title: 'Development Tools',
      skills: ['Git/GitHub', 'CI/CD', 'Testing', 'Debugging'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-neon-blue">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-tech-green mx-auto"></div>
        </div>
        
        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-dark-bg p-6 rounded-xl border border-gray-700 hover:border-neon-blue transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skill} className="text-gray-300 text-sm flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${skillIndex % 2 === 0 ? 'bg-neon-blue' : 'bg-tech-green'}`}></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Skill Bars */}
        <div className="bg-dark-bg p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                      skill.color === 'neon-blue' 
                        ? 'bg-gradient-to-r from-neon-blue to-blue-400' 
                        : 'bg-gradient-to-r from-tech-green to-green-400'
                    }`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
