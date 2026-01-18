import { User, Coffee, Code, Heart } from 'lucide-react';

export function About() {
  const facts = [
    { icon: Code, text: '2+ años programando' },
    { icon: Coffee, text: '∞ cafés consumidos' },
    { icon: Heart, text: 'Apasionado por el código limpio' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <User size={40} className="border-4 border-black p-2 bg-white" />
          <h2 className="text-4xl md:text-5xl font-bold">Sobre mí</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-8 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4 pb-4 border-b-4 border-black">Mi Historia</h3>
            <p className="mb-4 text-lg">
              Soy Alejandro Daniel Cruz Hernandez, un desarrollador Full Stack con pasión por crear aplicaciones web modernas y funcionales. 
              Mi viaje en la programación comenzó hace más de 2 años, y desde entonces no he parado de aprender 
              y mejorar mis habilidades.
            </p>
            <p className="text-lg">
              Me especializo en construir experiencias de usuario excepcionales con tecnologías modernas, 
              siempre buscando el equilibrio perfecto entre diseño y funcionalidad.
            </p>
          </div>

          <div className="space-y-4">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <div
                  key={index}
                  className="border-4 border-black bg-[#00ff00] p-6 flex items-center gap-4 hover:translate-x-2 transition-transform"
                >
                  <div className="border-4 border-black bg-white p-3">
                    <Icon size={32} />
                  </div>
                  <span className="text-xl font-bold">{fact.text}</span>
                </div>
              );
            })}

            <div className="border-4 border-black bg-white p-6">
              <div className="mb-4">
                <span className="font-bold text-lg">LEVEL: </span>
                <span className="text-2xl font-bold">Mid Developer</span>
              </div>
              <div className="h-8 border-4 border-black bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[#00ff00] w-[85%] flex items-center justify-center">
                  <span className="font-bold text-sm">85% XP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
