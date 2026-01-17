import { Code2, Layout, Server, Smartphone, Zap } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      color: 'bg-[#00ff00]',
      skills: ['Angular.js', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'bg-[#ff00ff]',
      skills: ['Node.js', 'Java', 'Express', 'PostgreSQL', 'Spring Boot', 'REST APIs'],
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'bg-[#00ffff]',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'PWA'],
    },
    {
      title: 'Herramientas',
      icon: Zap,
      color: 'bg-[#ffff00]',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Kubernetes', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white border-y-4 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Code2 size={40} className="border-4 border-black p-2 bg-[#f5e6d3]" />
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Tecnologías</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="border-4 border-black bg-[#f5e6d3] hover:translate-y-[-4px] transition-transform"
              >
                <div className={`${category.color} border-b-4 border-black p-4 flex items-center gap-3`}>
                  <Icon size={28} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <div className="h-3 w-3 border-2 border-black bg-black"></div>
                        <span className="font-bold">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Proyectos', value: '20+' },
            { label: 'Clientes', value: '10+' },
            { label: 'Años Exp.', value: '2+' },
            { label: 'Cafés', value: '∞' },
          ].map((stat, index) => (
            <div key={index} className="border-4 border-black bg-black text-center p-6">
              <div className="text-3xl md:text-4xl font-bold text-[#00ff00] mb-2">{stat.value}</div>
              <div className="font-bold text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
