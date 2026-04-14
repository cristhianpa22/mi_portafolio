import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactSection = () => {
  const form = useRef();

  let date = new Date
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kt849dc",
        "template_p5za1d4",
        form.current,
        "C4_X_HfV2braAOvZW",
      )
      .then(
        () => {
          alert("TRANSMISSION_SUCCESSFUL: Mensaje enviado correctamente.");
          form.current.reset();
        },
        (error) => {
          alert("TRANSMISSION_FAILED: Reintente más tarde.", error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#080a0c] font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Lado Izquierdo: Info */}
        <div className="space-y-8">
          <div>
            <p className="text-[#00FFFF] text-xs tracking-[0.3em] font-bold">
              /SECURE/CHANNEL
            </p>
            <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mt-2">
              INITIALIZE CONNECTION
            </h2>
          </div>

          <p className="text-gray-500 max-w-sm leading-relaxed">
            ¿Listo para sintetizar algo extraordinario? Usa el formulario para
            transmitir tu propuesta. Response latency is typically &lt; 24ms.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-4 text-gray-400">
              <span className="text-[#00FFFF]">@</span>
              <span>cristhianp.soft@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0e1217] p-8 border border-white/5 rounded-sm relative">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] text-[#00FFFF] uppercase tracking-widest font-bold">
                Nombre de usuario
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="NOMBRE_REQUERIDO"
                required
                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-[#00FFFF] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-[#00FFFF] uppercase tracking-widest font-bold">
                Gmail
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="GMAIL_REQUERIDO"
                required
                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-[#00FFFF] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-[#00FFFF] uppercase tracking-widest font-bold">
                Mensaje
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="DESCRIPCION_PROYECTO ..."
                required
                className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-[#00FFFF] transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00FFFF] text-[#080a0c] font-bold py-4 flex items-center justify-center gap-4 hover:bg-[#00FFFF]/90 transition-all uppercase tracking-widest group"
            >
              ENVIAR_MENSAJE
              <span className="group-hover:translate-x-2 transition-transform">
                &gt;
              </span>
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 tracking-widest uppercase">
        <p>
          {" "}
          {date.getFullYear()}
          // @padillaDEv
        </p>
        <div className="flex gap-8">
          <a
            href="https://github.com/cristhianpa22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faGithub} /> GITHUB
          </a>
          <a
            href="https://wa.me/573143479381"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#25D366] transition-colors flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WHATSAPP
          </a>
        </div>
        <p>V1.0.0 </p>
      </footer>
    </section>
  );
};

export default ContactSection;
