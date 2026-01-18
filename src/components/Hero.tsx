import { ArrowRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        <div className="border-8 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block border-4 border-black bg-[#00ff00] px-4 py-2 mb-6">
                <span className="font-bold text-sm">{">"} DISPONIBLE PARA PROGRAMAR</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hola.<br />
                Soy Alejo.
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 font-bold">
                Full Stack Developer especializado en crear experiencias digitales únicas
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="border-4 border-black bg-black text-[#00ff00] px-6 py-3 font-bold hover:bg-[#00ff00] hover:text-black transition-colors inline-flex items-center gap-2"
                >
                  Ver Proyectos
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#contact"
                  className="border-4 border-black bg-white px-6 py-3 font-bold hover:bg-black hover:text-[#00ff00] transition-colors inline-flex items-center gap-2"
                >
                  Contáctame
                  <Terminal size={20} />
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="hidden md:block">
              <div className="border-8 border-black bg-white p-8 relative">
                <div className="aspect-square border-4 border-black bg-black flex items-center justify-center relative overflow-hidden">
                  {/* Retro Computer Screen */}
                  <div className="absolute inset-4 bg-[#00ff00] opacity-20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-[#00ff00] font-bold text-6xl mb-4">{'</>'}</div>
                    <div className="flex justify-center gap-2">
                      <div className="h-4 w-4 bg-[#00ff00] animate-pulse"></div>
                      <div className="h-4 w-4 bg-[#00ff00] animate-pulse delay-100"></div>
                      <div className="h-4 w-4 bg-[#00ff00] animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 h-8 w-8 border-4 border-black bg-[#ff00ff]"></div>
                <div className="absolute -bottom-4 -left-4 h-8 w-8 border-4 border-black bg-[#00ffff]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
