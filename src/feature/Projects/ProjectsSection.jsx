import React from "react";
import ProjectCard from "../../components/ui/ProjectCard";
import projects from "../../data/projects.json";


const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 px-4 ">
            <div className="max-w-7xl  mx-auto  ">
                <div className="border-l-4  h-26 border-primary p-5 bg-neutral">
                    <h3 className=" text-[#02cfdc] text-lg">
                        /REPOSITORY/DEPLOYED_PROJECTS
                    </h3>
                    <h2 className=" text-xl text-white md:text-5xl font-bold mb-12">
                        <span className="text-[#00FFFF]">01. </span>PROYECTOS_DESTACADOS
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
