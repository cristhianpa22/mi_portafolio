# ⚡ ADSO_OS // TECHNICAL_PORTFOLIO v1.0.0

## 📝 DESCRIPCIÓN DEL PROYECTO
Este sistema no es solo un portafolio; es una **interfaz de operaciones (HUD)** diseñada bajo una estética tecnológica y de terminal. El proyecto nace de la necesidad de sintetizar mi trayectoria como **Técnico en Programación** y mi formación actual como **Tecnólogo en Análisis y Desarrollo de Software (ADSO)**.

El objetivo principal es demostrar la capacidad de construir aplicaciones web modernas utilizando arquitecturas limpias, componentes reutilizables y una experiencia de usuario (UX) inspirada en entornos de alto rendimiento. Cada sección ha sido diseñada para reflejar precisión técnica y una mentalidad orientada a la ingeniería y la seguridad informática.

---

## 🖥️ ANÁLISIS DE SECCIONES

### 🛠️ STACK_TECHNOLOGIES
Módulo visual que utiliza una distribución de **Bento Grid** para jerarquizar el dominio técnico. 
- **Frontend:** Enfoque en React y Tailwind para interfaces de baja latencia.
- **Backend:** Manejo de lógica de servidor con Node.js, Java y Python.
- **Tools & Workflow:** Control de versiones con Git y gestión de entornos Linux.
- **Databases:** Estructuración de datos en motores relacionales (MySQL).

### 💻 ABOUT_TERMINAL (System Emulator)
Una simulación de terminal Unix integrada que actúa como biografía dinámica. Ejecuta comandos ficticios como `cat about_me.md` para desplegar mi perfil profesional. Incluye un módulo de **Git Simulation** que muestra un `git push` en tiempo real, simbolizando mi flujo constante de despliegue y aprendizaje.

### 📡 SECURE_CHANNEL (Uplink de Contacto)
Sección de comunicación directa que implementa la API de **EmailJS**. Permite el envío de transmisiones (correos electrónicos) desde el cliente hacia mi nodo principal (Gmail) sin necesidad de un backend intermediario, garantizando un canal de contacto rápido y eficiente.

### 🔗 SYSTEM_FOOTER
Pie de página funcional que integra:
- **Reloj del Sistema:** Año dinámico mediante JavaScript.
- **Uplink Social:** Enlaces directos a GitHub y un canal seguro de WhatsApp para comunicación instantánea.

---

## 🚀 GUÍA DE INSTALACIÓN Y DESPLIEGUE

Para auditar o ejecutar este entorno localmente en su terminal (preferiblemente Linux/Unix), siga estos protocolos:

### 1. Clonación del Repositorio
```bash
git clone [https://github.com/cristhianpa22/nombre-del-repo.git](https://github.com/cristhianpa22/nombre-del-repo.git)
cd nombre-del-repo
```

### 2. Instalación de Dependencias
```bash
npm install
```

### 3. Lanzamiento en Desarrollo
```bash
npm run dev
```

## 📂 ARQUITECTURA DE ARCHIVOS

El proyecto sigue una estructura modular para facilitar el escalamiento hacia una futura ingeniería:

- /src/data: La "Base de Datos" local en formato JSON que alimenta la interfaz.

- /src/feature: Módulos de lógica y UI separados por responsabilidad (Separation of Concerns).
