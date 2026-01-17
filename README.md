
  # 🎨 Portfolio Estética Retro

Un portfolio personal moderno con un diseño estético retro, construido con React, TypeScript y Tailwind CSS. Inspirado en el diseño vintage de los años 80s y 90s.

**Diseño original en Figma:** [Crear Portfolio Estética Retro](https://www.figma.com/design/M4KZ374PfgblK6WvZhKnsh/Crear-Portfolio-Est%C3%A9tica-Retro)

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes](#componentes)
- [Personalización](#personalización)

---

## ✨ Características

- 🎯 Diseño responsivo y moderno con estética retro
- ⚡ Construcción rápida con Vite
- 🎨 Componentes UI accesibles con Radix UI
- 💅 Estilos con Tailwind CSS
- 📱 Mobile-first approach
- 🚀 Optimizado para producción
- 🔧 Fácil de personalizar

---

## 🛠️ Tecnologías

### Frontend
- **React 18.3** - Librería de UI
- **TypeScript** - Tipado estático
- **Vite 6.3** - Build tool moderno
- **Tailwind CSS** - Framework de CSS
- **Radix UI** - Componentes accesibles

### Herramientas Adicionales
- React Hook Form - Manejo de formularios
- Recharts - Gráficos y visualización
- Lucide React - Iconos
- Sonner - Notificaciones
- Embla Carousel - Carruseles

---

## 📦 Instalación

### Requisitos
- Node.js 16+ 
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd Crear\ Portfolio\ Estética\ Retro
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

---

## 🚀 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes principales
│   ├── Hero.tsx        # Sección principal
│   ├── About.tsx       # Sobre mí
│   ├── Skills.tsx      # Habilidades
│   ├── Experience.tsx  # Experiencia
│   ├── Projects.tsx    # Proyectos
│   ├── Contact.tsx     # Contacto
│   ├── Navigation.tsx  # Navegación
│   ├── figma/          # Componentes de Figma
│   └── ui/             # Componentes UI reutilizables
├── styles/             # Estilos globales
├── App.tsx             # Componente raíz
├── main.tsx            # Punto de entrada
└── index.css           # Estilos base
```

---

## 🧩 Componentes

### Componentes Principales

- **Hero** - Sección de bienvenida y presentación
- **About** - Información sobre ti
- **Skills** - Habilidades y competencias
- **Experience** - Experiencia laboral y educativa
- **Projects** - Portfolio de proyectos
- **Contact** - Formulario de contacto
- **Navigation** - Barra de navegación

### Componentes UI

Se incluyen componentes reutilizables de Radix UI en `src/components/ui/`:
- Botones, tarjetas, diálogos
- Formularios, inputs, selects
- Accordions, tabs, tooltips
- Y muchos más...

---

## 🎨 Personalización

### Colores

Los colores retro están definidos en Tailwind. Modifica el fondo beige (`#f5e6d3`) editando `src/App.tsx`:

```tsx
<div className="min-h-screen bg-[#f5e6d3]">
```

### Fuentes

Las fuentes se definen en `src/styles/globals.css`. Puedes cambiarlas importando diferentes fuentes de Google Fonts o usar fuentes del sistema.

### Contenido

Edita cada componente en `src/components/` para añadir tu contenido personal:
- Foto de perfil en `Hero.tsx`
- Bio en `About.tsx`
- Lista de habilidades en `Skills.tsx`
- Experiencia en `Experience.tsx`
- Proyectos en `Projects.tsx`
- Email de contacto en `Contact.tsx`

---

## 📧 Contacto

Para soporte o preguntas sobre este proyecto, contacta a través del formulario en la sección Contact del portfolio.

---

## 📄 Licencia

Este proyecto es de código abierto. Úsalo libremente para crear tu portfolio personal.

---

**Hecho con ❤️ y pixels** ✨
  