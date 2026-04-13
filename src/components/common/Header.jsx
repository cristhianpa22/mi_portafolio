import React from "react";
import { Terminal, Download } from "lucide-react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-neutral text-[#868686] p-4 drop-shadow-[0_0_19px_var(--color-primary)]">
      <div className=" flex items-center gap-2 text-white font-bold text-3xl racking-tight p-4 drop-shadow-[0_0_19px_var(--color-primary)]">
        <Terminal size={20} />
        <span className="font-mono font-bold">PADILLA_DEV</span>
      </div>
      <div className="hidden md:flex gap-8 font-mono text-xl">
        <a href="#projects" className="hover:text-primary transition-colors">
          PROYECTOS
        </a>
        <a href="#stack" className="hover:text-primary transition-colors">
          STACK
        </a>
        <a href="#contacto" className="hover:text-primary transition-colors">
          CONTACTO
        </a>
      </div>
      <button className="bg-[#0f3f42] text-[#03c6d2]  px-6 py-4 rounded-sm border-2 border-[#0b6b72] font-bold hover:bg-primary hover:text-black transition-all text-xs">
        <a
          className="flex items-center gap-2"
          href="/hoja_de_vida.pdf"
          download="CV_Padilla_Dev.pdf"
        >
          <Download size={20} />
          RESUME_PDF
        </a>
      </button>
    </nav>
  );
};

export default Header;
