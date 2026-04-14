import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Terminal } from "lucide-react";
import {
    faReact,
    faJs,
    faHtml5,
    faCss3Alt,
    faBootstrap,
    faFigma,
    faNodeJs,
    faJava,
    faPython,
    faGithub,
    faGitAlt,
    faLinux,
} from "@fortawesome/free-brands-svg-icons";
import {
    faDatabase,
    faServer,
    faMobileAlt,
    faCode,
    faBolt,
    faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import stackData from "../../data/stack.json";

const iconMap = {
    react: faReact,
    js: faJs,
    html5: faHtml5,
    css3: faCss3Alt,
    bootstrap: faBootstrap,
    figma: faFigma,
    node: faNodeJs,
    java: faJava,
    python: faPython,
    github: faGithub,
    git: faGitAlt,
    linux: faLinux,
    database: faDatabase,
    server: faServer,
    mobile: faMobileAlt,
    code: faCode,
    bolt: faBolt,
    leaf: faLeaf,
};

const StackSection = () => {
    return (
        <section className="p-6 min-h-screen text-white font-mono">
            <div className="max-w-7xl  mx-auto mb-12  ">
                <div className="border-l-4  h-26 border-secondary p-5 bg-neutral">
                    <h3 className=" text-secondary text-lg">
                        /REPOSITORY/STACK
                    </h3>
                    <h2 className=" text-xl text-white md:text-5xl font-bold mb-12">
                        <span className="text-secondary">02. </span>STACK_TECHNOLOGIES
                    </h2>
                </div>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1 md:row-span-2 bg-[#0e1217] p-8 hover:border-l-8 hover:border-cyan-500/50 rounded-xl flex flex-col justify-between">
                    <div>
                        <div className="w-10 h-10 bg-cyan-500/10 flex items-center justify-center rounded mb-6">
                            <FontAwesomeIcon icon={faCode} className="text-cyan-400" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 tracking-tighter">
                            {stackData.frontend.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            {stackData.frontend.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                        {stackData.frontend.skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white/5 p-3 border border-white/5 rounded uppercase tracking-widest text-center"
                            >
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-2 bg-[#0e1217] p-8 hover:border-l-8 hover:border-purple-500/50 rounded-xl flex items-center gap-8">
                    <div className="w-14 h-14 bg-purple-500/10 flex items-center justify-center rounded-lg">
                        <FontAwesomeIcon
                            icon={faServer}
                            className="text-purple-400 text-2xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4 tracking-tighter">
                            {stackData.backend.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            {stackData.backend.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                            {stackData.backend.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 p-3 border border-white/5 rounded uppercase tracking-widest text-center"
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#0e1217] p-8 hover:border-l-8 hover:border-purple-500/50 rounded-xl">
                    <div className="flex flex-col gap-4">
                        <Terminal className="text-purple-400 text-xl w-fit" />
                        <h2 className="font-bold tracking-tighter text-lg">
                            {stackData.tools.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            {stackData.tools.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                            {stackData.tools.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 p-3 border border-white/5 rounded uppercase tracking-widest text-center"
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#0e1217] p-8  hover:border-l-8 hover:border-cyan-500/50 rounded-xl relative overflow-hidden group">
                    <div className="flex flex-col gap-4">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full">
                            <FontAwesomeIcon
                                icon={faDatabase}
                                className="text-cyan-500 text-xl"
                            />
                        </div>
                        <h2 className="font-bold tracking-tighter text-lg">
                            {stackData.databases.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            {stackData.databases.description}
                        </p>
                        <div className="flex flex-col gap-1 text-[10px] text-gray-400 uppercase">
                            {stackData.databases.skills.map((skill, index) => (
                                <span key={index}
                                    className="bg-white/5 p-3 border border-white/5 rounded uppercase tracking-widest text-center"
                                >{skill.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StackSection;
