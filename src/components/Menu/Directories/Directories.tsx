import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import ContentDirectories from "./ContentDirectories";

const Directories: React.FC<{ classActive: string }> = ({ classActive }) => {
  const [isDirectoriesOpen, setIsDirectoriesOpen] = useState<boolean>(true);

  const toggleDirectoriesOpen = () => {
    setIsDirectoriesOpen((prevState) => !prevState);
  };

  return (
    <div className="py-4">
    <button
      className={`flex items-center w-full mx-4 mb-2 transition-colors ${
        isDirectoriesOpen ? "dark:text-slate-200" : ""
      }`}
      onClick={toggleDirectoriesOpen}
    >
      <Arrow
        className={`w-3 h-3 mr-2 transform transition-transform duration-300 ${
          isDirectoriesOpen ? "rotate-180" : "rotate-90"
        }`}
      />
      Directories
    </button>
  
    {/* Smooth dropdown */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isDirectoriesOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <ContentDirectories classActive={classActive} />
    </div>
  </div>
  
  );
};

export default Directories;
