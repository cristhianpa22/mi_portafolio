import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { Folder, GitBranch } from "lucide-react";

const TerminalBar = ({ text = "hola" }) => {
  return (
    <div className="p-2">
      <div className="flex flex-row w-75 sm:w-85 md:w-130 lg:w-full xl:w-full h-7 justify-start items-center rounded-lg  ">
        <div className="bg-[#a9b1d6] w-12 h-full rounded-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faLinux} className="text-white text-2xl  " />
        </div>
        <div className="bg-[#7aa1f7] w-90 md:w-130 h-full flex items-center justify-start p-2 lg:p-4 rounded-lg">
          <Folder className="text-white text-3xl  pr-2" />
          <p className="text-white text-xs md:text-xl lg:text-2xl">
            ~/workspace/portafolio
          </p>
        </div>
        <div className="bg-[#22304b] w-35 md:w-40 h-full flex items-center justify-start p-2 lg:p-4 rounded-lg">
          <GitBranch className="text-white text-3xl pr-2" />

          <p className="text-white text-xs md:text-lg lg:text-xl">main</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-lg"></span>
        </div>
      </div>
      <div className="flex items-center py-2">
        <p className="text-white text-lg md:text-2xl pr-2 ">(____ {text}</p>
        <div className="w-[2px] h-5 bg-white animate-pulse ml-0.5 "></div>
      </div>
    </div>
  );
};

export default TerminalBar;
