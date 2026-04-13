import { useState } from "react";
import { Terminal, Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative bg-neutral text-[#868686] p-4 border-b border-white/5 drop-shadow-[0_0_19px_var(--color-primary)] z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" flex items-center gap-2 text-white font-bold text-2xl  md:text-3xl tracking-tight drop-shadow-[0_0_19px_var(--color-primary)]">
          <Terminal size={24} className="text-primary" />
          <span className="font-mono">PADILLA_DEV</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-lg">
          <a href="#projects" className="hover:text-primary transition-colors">
            PROYECTOS
          </a>
          <a href="#stack" className="hover:text-primary transition-colors">
            STACK
          </a>
          <a href="#contacto" className="hover:text-primary transition-colors">
            CONTACTO
          </a>
          <a
            href="/hoja_de_vida.pdf"
            download="CV_Padilla_Dev.pdf"
            className="flex items-center gap-2 bg-[#0f3f42] text-[#03c6d2] px-4 py-2 rounded-sm border-2 border-[#0b6b72] font-bold hover:bg-primary hover:text-black transition-all text-xs"
          >
            <Download size={16} />
            RESUME_PDF
          </a>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      <div
        className={`
        absolute top-full left-0 w-full bg-neutral/95 backdrop-blur-md transition-all duration-300 ease-in-out border-b border-primary/20 md:hidden
        ${isOpen ? "opacity-100 visible h-auto p-8" : "opacity-0 invisible h-0 overflow-hidden"}
      `}
      >
        <div className="flex flex-col items-center gap-6 font-mono text-xl">
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
          >
            PROYECTOS
          </a>
          <a
            href="#stack"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
          >
            STACK
          </a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="hover:text-primary"
          >
            CONTACTO
          </a>

          <a
            href="/hoja_de_vida.pdf"
            download="CV_Padilla_Dev.pdf"
            className="flex items-center gap-2 bg-[#0f3f42] text-[#03c6d2] px-8 py-4 rounded-sm border-2 border-[#0b6b72] font-bold"
          >
            <Download size={20} />
            RESUME_PDF
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
