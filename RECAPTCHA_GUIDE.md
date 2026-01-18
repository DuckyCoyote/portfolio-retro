# 🔐 Cómo agregar Google reCAPTCHA (Opcional)

Si necesitas protección adicional más robusta contra bots, puedes agregar reCAPTCHA.

## Opción 1: reCAPTCHA v2 (Visible - "I'm not a robot")

### 1. Instalar dependencia
```bash
npm install react-google-recaptcha
```

### 2. Obtener claves de reCAPTCHA
1. Ve a: https://www.google.com/recaptcha/admin/create
2. Elige **reCAPTCHA v2** → "I'm not a robot" checkbox
3. Añade tu dominio (localhost para desarrollo)
4. Copia:
   - **Site Key** (pública)
   - **Secret Key** (privada - NO expongas en el código)

### 3. Configurar en .env
```env
VITE_RECAPTCHA_SITE_KEY=tu_site_key_aqui
```

### 4. Actualizar Contact.tsx

Agrega al inicio del archivo:
```typescript
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from 'react';
```

Dentro del componente:
```typescript
const recaptchaRef = useRef<ReCAPTCHA>(null);
```

Actualiza el handleSubmit (antes del try):
```typescript
// Verificar reCAPTCHA
const token = await recaptchaRef.current?.executeAsync();
if (!token) {
  setSubmitStatus('error');
  setTimeout(() => setSubmitStatus('idle'), 5000);
  return;
}
recaptchaRef.current?.reset();
```

Agrega el componente en el formulario (antes del botón):
```tsx
<ReCAPTCHA
  ref={recaptchaRef}
  size="normal"
  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
  className="flex justify-center mb-4"
/>
```

---

## Opción 2: reCAPTCHA v3 (Invisible - Recomendado)

Más fluido para el usuario, score-based.

### 1. Instalar
```bash
npm install react-google-recaptcha-v3
```

### 2. Obtener claves
- Mismo proceso pero elige **reCAPTCHA v3**

### 3. Configurar App.tsx (o main.tsx)

```typescript
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// Envuelve tu app:
<GoogleReCaptchaProvider 
  reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
>
  <App />
</GoogleReCaptchaProvider>
```

### 4. Actualizar Contact.tsx

```typescript
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// Dentro del componente:
const { executeRecaptcha } = useGoogleReCaptcha();

// En handleSubmit (antes del try):
if (!executeRecaptcha) {
  console.log('reCAPTCHA no disponible');
  return;
}

const token = await executeRecaptcha('contact_form');
// Enviar el token junto con el formulario
```

---

## Opción 3: Honeypot (Simple, sin dependencias)

Campo oculto que solo los bots llenarían.

### En Contact.tsx

Agrega al estado:
```typescript
const [honeypot, setHoneypot] = useState('');
```

Agrega campo oculto en el formulario:
```tsx
<input
  type="text"
  name="website"
  value={honeypot}
  onChange={(e) => setHoneypot(e.target.value)}
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
/>
```

En handleSubmit (al inicio):
```typescript
// Si el honeypot tiene valor, es un bot
if (honeypot) {
  console.log('Bot detectado');
  return; // No mostrar error, solo ignorar
}
```

---

## Comparación de opciones

| Método | Facilidad | Seguridad | UX | Costo |
|--------|-----------|-----------|-----|-------|
| **Cliente (actual)** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | Gratis |
| **Honeypot** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Gratis |
| **reCAPTCHA v3** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Gratis |
| **reCAPTCHA v2** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | Gratis |
| **Backend** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Hosting |

---

## Recomendación

Para un portfolio personal:
1. ✅ **Usa la protección actual** (ya implementada)
2. 🎯 **Agrega honeypot** (5 minutos, muy efectivo)
3. 🔒 **Si recibes spam, agrega reCAPTCHA v3**

---

## Nota importante sobre EmailJS

⚠️ **reCAPTCHA no valida del lado del servidor** cuando usas solo EmailJS (frontend).

Para validación real del servidor necesitarías:
- Backend propio (Node.js, Python, etc.)
- O usar Netlify/Vercel Functions

EmailJS funciona 100% en el cliente, así que reCAPTCHA solo sería un deterrente, no una validación server-side real.

---

¿Necesitas ayuda implementando alguna de estas opciones? ¡Avísame!
