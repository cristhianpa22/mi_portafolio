import React from "react";
import TerminalBar from "../../components/ui/TerminalBar";

const Hero = () => {
    return (
      <section className="min-h-[80vh] flex items-center justify-center p-6 bg-terminal-grid">
        <div className="max-w-6xl w-full items-center bg-[#0a0a0a]/80  rounded-lg border border-gray-800 backdrop-blur-sm shadow-2xl pb-4 ">
          <div className="bg-[#2a2a2a] w-full h-full flex items-center p-4 rounded-t-lg max-h-10 mb-4 justify-start gap-2 ">
            <div className="flex gap-2  group/controls">
              <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center cursor-pointer group">
                <svg
                  className="w-3 h-3 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center cursor-pointer group">
                <svg
                  className="w-3 h-3 text-yellow-900 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M20 12H4"
                  />
                </svg>
              </div>

              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center cursor-pointer group">
                <svg
                  className="w-3 h-3 text-green-900 opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M4 4h16v16H4z"
                  />
                </svg>
              </div>
            </div>
            <span className="text-gray-500 text-sm md:text-lg pl-2 md:pl-50">
              Capsdev@devsLinux/react/mi-portafolio {">"} _
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img
                  src="/WhatsApp Image 2026-04-13 at 3.21.02 PM.jpeg"
                  alt="Cristhian Padilla"
                  className="relative w-full h-full object-cover border-2 border-primary rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                />
              </div>
            </div>

            <div className="md:col-span-8 font-mono">
              <TerminalBar text="console.log('Hola')" />
              <p className="text-gray-400 font-sans text-lg max-w-xl px-4 md:px-0">
                <span className="text-primary">&gt;</span> ! Hola, soy Cristhian
                Padilla
              </p>
              <TerminalBar text="npm run dev" />
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase font-sans  px-4 md:px-0">
                <span className="text-primary ">&gt;</span> Desarrollador{" "}
                <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                  Full-Stack
                </span>
              </h2>

              <p className="mt-6 text-gray-400 font-sans text-lg max-w-xl px-4 md:px-0">
                Desarrollador Full-Stack & Mobile | Especialista en Soluciones
                Multiplataforma. Experto en la creación de aplicaciones
                escalables con React, Node.js y Flutter. Combino una sólida base
                técnica en JavaScript y Java con la capacidad analítica para el
                levantamiento de requerimientos y la gestión eficiente de bases
                de datos relacionales.
              </p>

              <div className="mt-8 flex gap-4 px-4 md:px-0">
                <button className="border border-primary text-primary px-2 md:px-6 py-2 hover:bg-primary/10 transition-all">
                  <a href="#proyectos">ver_proyectos</a>
                </button>
                <button className="text-gray-500 hover:text-white transition-colors">
                  <a href="#contacto">contactame.exe</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;
