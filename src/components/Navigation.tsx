import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-black bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 border-4 border-black bg-black flex items-center justify-center">
              <div className="h-3 w-3 bg-[#00ff00]"></div>
            </div>
            <span className="text-2xl font-bold">DEV.PORTFOLIO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="border-4 border-black bg-white px-4 py-2 font-bold hover:bg-black hover:text-[#00ff00] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden border-4 border-black bg-white p-2 hover:bg-black hover:text-[#00ff00]"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-4 flex flex-col gap-2 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-4 border-black bg-white px-4 py-2 font-bold hover:bg-black hover:text-[#00ff00] transition-colors text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
