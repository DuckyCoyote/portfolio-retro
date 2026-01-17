import { Folder, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      image: 'online shopping',
      link: '#',
      github: '#',
      color: 'bg-[#00ff00]',
    },
    {
      title: 'Task Manager Pro',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
      image: 'task management',
      link: '#',
      github: '#',
      color: 'bg-[#00ffff]',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dashboard para gestión de múltiples redes sociales con análisis de métricas y programación de publicaciones.',
      technologies: ['Vue.js', 'Express', 'Redis', 'Chart.js'],
      image: 'social media analytics',
      link: '#',
      github: '#',
      color: 'bg-[#ff00ff]',
    },
    {
      title: 'Weather App',
      description: 'Aplicación del clima con pronósticos detallados, mapas interactivos y alertas personalizadas.',
      technologies: ['React Native', 'OpenWeather API', 'Maps SDK'],
      image: 'weather forecast',
      link: '#',
      github: '#',
      color: 'bg-[#ffff00]',
    },
    {
      title: 'Portfolio Builder',
      description: 'Herramienta para crear portfolios profesionales sin código, con plantillas personalizables y hosting incluido.',
      technologies: ['React', 'Tailwind', 'Firebase', 'Vercel'],
      image: 'portfolio website',
      link: '#',
      github: '#',
      color: 'bg-[#ff6b6b]',
    },
    {
      title: 'Fitness Tracker',
      description: 'App para seguimiento de ejercicios, nutrición y objetivos fitness con gráficos de progreso.',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Charts'],
      image: 'fitness training',
      link: '#',
      github: '#',
      color: 'bg-[#4ecdc4]',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white border-y-4 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Folder size={40} className="border-4 border-black p-2 bg-[#f5e6d3]" />
          <h2 className="text-4xl md:text-5xl font-bold">Proyectos</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-4 border-black bg-[#f5e6d3] hover:translate-y-[-4px] transition-transform"
            >
              <div className={`${project.color} border-b-4 border-black p-4`}>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              <div className="border-b-4 border-black h-48 bg-white overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  query={project.image}
                />
              </div>

              <div className="p-4">
                <p className="mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="border-2 border-black px-2 py-1 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.link}
                    className="flex-1 border-4 border-black bg-black text-[#00ff00] px-3 py-2 font-bold hover:bg-[#00ff00] hover:text-black transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <ExternalLink size={16} />
                    Ver
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border-4 border-black bg-white px-3 py-2 font-bold hover:bg-black hover:text-[#00ff00] transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
