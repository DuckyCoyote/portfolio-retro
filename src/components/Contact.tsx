import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Mensaje enviado! (Esto es una demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#', color: 'bg-[#00ff00]' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'bg-[#00ffff]' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'bg-[#ff00ff]' },
    { icon: Mail, label: 'Email', url: '#', color: 'bg-[#ffff00]' },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Send size={40} className="border-4 border-black p-2 bg-white" />
          <h2 className="text-4xl md:text-5xl font-bold">Contacto</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border-8 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-6 pb-4 border-b-4 border-black">
              Envíame un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-bold mb-2">NOMBRE:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-[#00ff00]"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">EMAIL:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border-4 border-black p-3 font-bold focus:outline-none focus:ring-4 focus:ring-[#00ff00]"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">MENSAJE:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full border-4 border-black p-3 font-bold resize-none focus:outline-none focus:ring-4 focus:ring-[#00ff00]"
                  placeholder="Tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full border-4 border-black bg-black text-[#00ff00] px-6 py-3 font-bold hover:bg-[#00ff00] hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                ENVIAR MENSAJE
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-6">
            <div className="border-4 border-black bg-[#00ff00] p-8">
              <h3 className="text-2xl font-bold mb-4">¡Trabajemos juntos!</h3>
              <p className="text-lg mb-4">
                Estoy disponible para proyectos freelance, colaboraciones o posiciones full-time. 
                No dudes en contactarme si tienes una idea interesante.
              </p>
              <div className="font-bold text-lg">
                📧 dev@portfolio.com<br />
                📱 +34 123 456 789
              </div>
            </div>

            <div className="border-4 border-black bg-white p-6">
              <h3 className="text-xl font-bold mb-4 pb-4 border-b-4 border-black">
                Encuéntrame en:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`${social.color} border-4 border-black p-4 hover:translate-x-1 hover:translate-y-1 transition-transform flex flex-col items-center justify-center gap-2`}
                    >
                      <Icon size={32} />
                      <span className="font-bold text-sm">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="border-4 border-black bg-black p-6 text-center">
              <div className="text-[#00ff00] font-bold text-xl mb-2">STATUS:</div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-4 w-4 bg-[#00ff00] animate-pulse"></div>
                <span className="text-[#00ff00] font-bold text-lg">DISPONIBLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
