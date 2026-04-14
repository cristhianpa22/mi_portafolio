import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const ProjectCard = ({ project }) => {
    return (
        <div className="group relative bg-[#1b2626] border-2 border-secondary rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl drop-shadow-[0_0_4px_var(--color-primary)]">
            <div className="bg-neutral/50 p-2 flex justify-between items-center border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
            </div>

            <div className="relative h-48 overflow-hidden bg-[#1b2626]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover  tracking-wide group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26] to-transparent"></div>
            </div>
            <div className="p-5">
                <h3 className="text-white font-mono font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                    {project.title.toUpperCase()}
                </h3>
                <p className="text-[#868686] text-sm mb-6 line-clamp-2">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, index) => (
                        <span
                            key={index}
                            className="text-[10px] font-mono bg-[#0f3f42] text-[#03c6d2] px-2 py-0.5 rounded border border-[#0b6b72]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                    >
                        <FontAwesomeIcon icon={faGithub} size={24} />
                    </a>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary hover:text-secondary transition-colors"
                        >
                            <ExternalLink
                                size={24}
                                className="group-hover:translate-x-0.5 transition-transform"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
