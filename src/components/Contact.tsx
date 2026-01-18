import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// Constantes de rate limiting
const COOLDOWN_TIME = 60000; // 1 minuto entre envíos
const MAX_ATTEMPTS_KEY = 'contact_attempts';
const LAST_SUBMIT_KEY = 'last_submit_time';
const MAX_ATTEMPTS_PER_DAY = 5;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'cooldown' | 'limit'>('idle');
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Verificar cooldown al cargar el componente
  useEffect(() => {
    checkCooldown();
    const interval = setInterval(checkCooldown, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkCooldown = () => {
    const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
    if (lastSubmit) {
      const timePassed = Date.now() - parseInt(lastSubmit);
      const remaining = COOLDOWN_TIME - timePassed;
      
      if (remaining > 0) {
        setCooldownRemaining(Math.ceil(remaining / 1000));
        setSubmitStatus('cooldown');
      } else {
        setCooldownRemaining(0);
        if (submitStatus === 'cooldown') {
          setSubmitStatus('idle');
        }
      }
    }
  };

  const getAttemptCount = (): number => {
    const stored = localStorage.getItem(MAX_ATTEMPTS_KEY);
    if (!stored) return 0;
    
    const data = JSON.parse(stored);
    const today = new Date().toDateString();
    
    // Reset contador si es un nuevo día
    if (data.date !== today) {
      localStorage.setItem(MAX_ATTEMPTS_KEY, JSON.stringify({ date: today, count: 0 }));
      return 0;
    }
    
    return data.count;
  };

  const incrementAttemptCount = () => {
    const today = new Date().toDateString();
    const currentCount = getAttemptCount();
    localStorage.setItem(MAX_ATTEMPTS_KEY, JSON.stringify({ 
      date: today, 
      count: currentCount + 1 
    }));
  };

  const validateMessage = (): boolean => {
    // Validación básica de longitud
    if (formData.name.length < 2 || formData.name.length > 100) {
      return false;
    }
    if (formData.message.length < 10 || formData.message.length > 1000) {
      return false;
    }
    
    // Detectar patrones de spam comunes
    const spamPatterns = [
      /(.)\1{10,}/, // Caracteres repetidos
      /https?:\/\//gi, // URLs (opcional, podrías permitirlas)
    ];
    
    for (const pattern of spamPatterns) {
      if (pattern.test(formData.message) || pattern.test(formData.name)) {
        return false;
      }
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar límite diario
    const attempts = getAttemptCount();
    if (attempts >= MAX_ATTEMPTS_PER_DAY) {
      setSubmitStatus('limit');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }
    
    // Verificar cooldown
    const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
    if (lastSubmit) {
      const timePassed = Date.now() - parseInt(lastSubmit);
      if (timePassed < COOLDOWN_TIME) {
        setSubmitStatus('cooldown');
        checkCooldown();
        return;
      }
    }
    
    // Validar contenido
    if (!validateMessage()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Obtén estas credenciales de tu cuenta de EmailJS
      // Puedes usar variables de entorno o ponerlas directamente aquí
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.name,
          message: formData.message,
          to_email: 'daniel_719021@hotmail.es', // Tu email donde recibirás los mensajes
        },
        PUBLIC_KEY
      );

      // Registrar envío exitoso
      localStorage.setItem(LAST_SUBMIT_KEY, Date.now().toString());
      incrementAttemptCount();

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Limpiar mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setSubmitStatus('error');
      
      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/DuckyCoyote', color: 'bg-[#00ff00]' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/alejandro-daniel-cruz-hernández-05bb0b200', color: 'bg-[#00ffff]' },
    { icon: Twitter, label: 'Twitter', url: '#contact', color: 'bg-[#ff00ff]' },
    { icon: Mail, label: 'Email', url: '#contact', color: 'bg-[#ffff00]' },
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
                  minLength={2}
                  maxLength={100}
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
                <label className="block font-bold mb-2">
                  MENSAJE: ({formData.message.length}/1000)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  className="w-full border-4 border-black p-3 font-bold resize-none focus:outline-none focus:ring-4 focus:ring-[#00ff00]"
                  placeholder="Tu mensaje aquí (mínimo 10 caracteres)..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || cooldownRemaining > 0}
                className="w-full border-4 border-black bg-black text-[#00ff00] px-6 py-3 font-bold hover:bg-[#00ff00] hover:text-black transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting 
                  ? 'ENVIANDO...' 
                  : cooldownRemaining > 0 
                    ? `ESPERA ${cooldownRemaining}s` 
                    : 'ENVIAR MENSAJE'}
              </button>

              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div className="border-4 border-black bg-[#00ff00] p-4 font-bold text-center">
                  ¡Mensaje enviado exitosamente!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="border-4 border-black bg-[#ff0000] text-white p-4 font-bold text-center">
                  Error al enviar. Verifica que el mensaje sea válido.
                </div>
              )}
              
              {submitStatus === 'cooldown' && (
                <div className="border-4 border-black bg-[#ffff00] p-4 font-bold text-center">
                  Espera {cooldownRemaining}s antes de enviar otro mensaje
                </div>
              )}
              
              {submitStatus === 'limit' && (
                <div className="border-4 border-black bg-[#ff00ff] text-white p-4 font-bold text-center">
                  Has alcanzado el límite diario de mensajes (5)
                </div>
              )}
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
                📧 daniel_719021@hotmail.es<br />
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
