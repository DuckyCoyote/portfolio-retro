import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Credibusiness',
      period: 'Agosto 2025 - Enero 2026',
      description: 'Trabajo con equipo de desarrollo, arquitectura de aplicaciones escalables, y desarrollo de software.',
      technologies: ['Angular.Js', 'Node.js', 'AWS', 'MySQL'],
      color: 'bg-[#00ff00]',
    },
    {
      title: 'Full Stack Developer',
      company: 'Hey Banco',
      period: 'Septiembre 2024 - Agosto 2025',
      description: 'Desarrollo de aplicaciones web completas, implementación de APIs RESTful, y optimización de rendimiento.',
      technologies: ['Angular.Js', 'Spring Boot', 'PostgreSQL', 'Red Hat'],
      color: 'bg-[#00ffff]',
    },
    {
      title: 'Full Stack Developer',
      company: 'AMX Contenido',
      period: 'Marzo 2024 - Septiembre 2024',
      description: 'Creación de interfaces de usuario interactivas, implementación de diseños responsive, y desarrollo de API REST.',
      technologies: ['React', 'TypeScript', 'Express.Js', 'MySQL'],
      color: 'bg-[#ff00ff]',
    },
    /*  {
      title: 'Junior Developer',
      company: 'StartUp Labs',
      period: '2018 - 2019',
      description: 'Desarrollo de funcionalidades frontend, corrección de bugs, y aprendizaje continuo de nuevas tecnologías.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      color: 'bg-[#ffff00]',
    },*/
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase size={40} className="border-4 border-black p-2 bg-white" />
          <h2 className="text-4xl md:text-5xl font-bold">Experiencia</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-8 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 transition-transform"
            >
              <div className={`${exp.color} border-b-4 border-black p-4 flex flex-wrap items-center justify-between gap-4`}>
                <div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <p className="text-lg font-bold">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 border-4 border-black bg-white px-4 py-2">
                  <Calendar size={20} />
                  <span className="font-bold">{exp.period}</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-lg mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="border-4 border-black bg-black text-[#00ff00] px-3 py-1 text-sm font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
