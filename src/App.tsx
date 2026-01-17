import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t-4 border-black bg-white py-6 text-center">
        <p className="font-bold">© 2026 - Made with ❤️ and pixels</p>
      </footer>
    </div>
  );
}
