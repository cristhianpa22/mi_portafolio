import { Terminal } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-6 bg-[#080a0c] font-mono">
            <div className="max-w-4xl mx-auto">
                {/* Ventana de la Terminal */}
                <div className="bg-[#0e1217] rounded-lg border border-white/10 shadow-2xl overflow-hidden">
                    {/* Barra Superior Estilo Unix */}
                    <div className="bg-[#1a1c22] px-4 py-2 flex items-center justify-between border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_5px_rgba(255,95,86,0.5)]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
                            <Terminal size={12} /> SESSION_MANAGER — ADSO_OS
                        </div>
                        <div className="w-10"></div>
                    </div>

                    <div className="p-6 md:p-10 text-sm md:text-base leading-relaxed">
                        <div className="mb-8">
                            <span className="text-[#00FFFF] font-bold">cristhian@dev</span>
                            <span className="text-white">:</span>
                            <span className="text-purple-400">~</span>
                            <span className="text-white">$ cat profile_info.md</span>
                        </div>

                        <div className="space-y-6 text-gray-300 border-l-2 border-[#00FFFF]/30 pl-6 md:pl-8">
                            <h1 className="text-[#00FFFF] font-bold text-xl md:text-3xl tracking-tighter">
                                # CRISTHIAN_PADILLA
                            </h1>

                            <p>
                                Soy un{" "}
                                <span className="text-white font-bold underline decoration-[#00FFFF]/50">
                                    Técnico en Programación
                                </span>{" "}
                                actualmente cursando el tecnólogo en{" "}
                                <span className="text-secondary italic">
                                    Análisis y Desarrollo de Software (ADSO) SENA
                                </span>
                                . Mi motor diario es el aprendizaje continuo; no dejo pasar un
                                día sin descubrir una nueva tecnología o mejorar una habilidad
                                existente.
                            </p>

                            <p>
                                Disfruto resolver problemas complejos a través del código, pero
                                entiendo que los mejores resultados nacen del
                                <span className="text-white italic"> trabajo en equipo</span> y
                                la comunicación clara.
                            </p>

                            <div className="space-y-2">
                                <p className="text-[#00FFFF] font-bold underline">
                  // METAS_FUTURAS
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <li className="flex items-center gap-2">
                                        <span className="text-purple-500">▹</span> Ingeniería de
                                        Sistemas
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-purple-500">▹</span> Ciberseguridad
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-purple-500">▹</span> Arquitectura de
                                        Bases de Datos
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-4 mt-12 border-t border-white/5 pt-8">
                            <div className="flex flex-col gap-1 font-mono text-sm">
                                <div className="flex gap-2">
                                    <span className="text-[#00FFFF] font-bold">
                                        cristhian@dev
                                    </span>
                                    <span className="text-white">:</span>
                                    <span className="text-purple-400">~</span>
                                    <span className="text-white">$ git push origin main</span>
                                </div>

                                <div className="text-gray-500 pl-4 border-l border-gray-800 space-y-1 text-xs">
                                    <p>Enumerating objects: 42, done.</p>
                                    <p>Counting objects: 100% (42/42), done.</p>
                                    <p>Delta compression using up to 8 threads</p>
                                    <p className="text-green-500/70">
                                        To https://github.com/cristhianpa22/mi_portafolio
                                    </p>
                                    <p className="text-green-500/70">
                                        {" "}
                                        * [new branch] main - main
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="https://github.com/cristhianpa22/mi_portafolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-white/5 border border-[#00FFFF]/30 px-6 py-3 rounded-md text-[#00FFFF] hover:bg-[#00FFFF]/10 hover:border-[#00FFFF] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300 group"
                                >
                                    <span className="text-xs opacity-50 font-bold">
                                        GET_SOURCE_CODE
                                    </span>
                                    <div className="h-4 w-[1px] bg-[#00FFFF]/30"></div>
                                    <span className="font-bold tracking-widest text-sm uppercase">
                                        Ver Repositorio
                                    </span>
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center gap-2">
                            <span className="text-[#00FFFF] font-bold">cristhian@dev</span>
                            <span className="text-white">:</span>
                            <span className="text-purple-400">~</span>
                            <span className="text-white">$</span>
                            <div className="w-2.5 h-5 bg-[#00FFFF] animate-[bounce_1s_infinite] shadow-[0_0_8px_#00FFFF]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
