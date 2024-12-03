import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import { HiExternalLink } from "react-icons/hi"; // External Link icon
import Lexmoon from "D:/githubreptasks/bv_portfolio/src/assets/images/Screenshot 2024-10-04 220744.png";
import Lexmoon2 from "D:/githubreptasks/bv_portfolio/src/assets/images/Screenshot 2024-10-04 220225.png";
import Lexmoon3 from "D:/githubreptasks/bv_portfolio/src/assets/images/Screenshot 2024-10-04 220456.png";
import Lexmoon4 from "D:/githubreptasks/bv_portfolio/src/assets/images/Screenshot 2024-10-04 220804.png";
import Agathiya from "D:/githubreptasks/bv_portfolio/src/assets/images/Screenshot 2024-11-30 170618.png";
import Agathiya2 from "D:/githubreptasks/bv_portfolio/src/assets/images/Screenshot 2024-11-30 171252.png";
import Agathiya3 from "D:/githubreptasks/bv_portfolio/src/assets/images/Screenshot 2024-11-30 171426.png";
import Agathiya4 from "D:/githubreptasks/bv_portfolio/src/assets/images/Screenshot 2024-11-30 171453.png";
import Doculang from "D:/githubreptasks/bv_portfolio/src/assets/images/doculang.png";
import Doculang2 from "D:/githubreptasks/bv_portfolio/src/assets/images/doculang2.png";
import Doculang3 from "D:/githubreptasks/bv_portfolio/src/assets/images/doculang3.png";
import Doculang4 from "D:/githubreptasks/bv_portfolio/src/assets/images/doculang4.png";
export default function Projects() {
  const projects = [
    {
      title: "Agathiya AI",
      description: "Agathiya AI is a cutting-edge platform leveraging HTML, CSS, JavaScript, Node.js, and MongoDB to provide real-time data with seamless AI integration. Designed for efficiency and accuracy, it delivers intuitive, up-to-date insights for an exceptional user experience.",
      src: [Agathiya2,Agathiya,Agathiya3,Agathiya4],
      github: "https://github.com/BALAVIGNESHWARAN23/agathiyaIW.git",
      link: "https://agathiya.onrender.com",
    }
    ,{
      title: "Lexmoon AI",
      description: "Lexmoon AI, developed during a stipend-based internship at Lexmoon Private Limited, is a cutting-edge platform for translating legal documents from English to Tamil. Built with HTML, CSS, JavaScript, Node.js, MongoDB, and Python ML (Streamlit), it ensures accuracy and reliability for legal professionals.",
      src: [Lexmoon, Lexmoon2, Lexmoon3,Lexmoon4], // Array of images
      github: "https://github.com/BALAVIGNESHWARAN23/lexmoon-iwinten.git",
      link: "https://lexmoon.com",
    }
  ,
    {
      title: "Doculang",
      description: "DocuLang is a powerful full-stack web application enabling instant, real-time language translation with a responsive interface. Leveraging Node.js and MongoDB, it ensures efficient processing and secure data storage for seamless multilingual communication.",
      src: [Doculang,Doculang2,Doculang3,Doculang4],
      github: "https://github.com/BALAVIGNESHWARAN23/doc_language_transulater.git",
      link: "https://doc-language-transulater.vercel.app",
    },
  ];

  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeProject, setActiveProject] = useState(null); // For modal

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isSmallScreen) return;

    const autoScroll = () => {
      if (!isHovered) {
        scrollContainer.scrollLeft += 1;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 10);
    return () => clearInterval(interval);
  }, [isHovered, isSmallScreen]);

  return (
    <div id="projects" className=" w-full bg-gradient-to-b from-black to-gray-900 text-white py-10">
      <h2   className="text-4xl text-center font-bold font-sportyfont text-white mb-6">
      &lt; <span className="text-orange-500">My</span> Projects /&gt;
      </h2>
      <div
        ref={scrollContainerRef}
        className={`flex ${
          isSmallScreen ? "flex-col space-y-6" : "overflow-x-auto space-x-6"
        } px-6 scrollbar-hide`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {projects.map((project, index) => (
         <div
         key={index}
         className={`relative  min-w-fit sm:w-full lg:min-w-[800px] h-fit  sm:h-[300px] md:h-[380px] sm:py-6 md:py-0 border-orange-700 border-2 mt-6 mb-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer ${
           isSmallScreen ? "bg-gradient-to-b from-gray-800 to-black" : ""
         }`}
       >
         <img
           src={project.src[0]} 
           alt={project.title}
           className={`w-full h-full  object-fit rounded-t-lg  ${
             isSmallScreen ? "rounded-lg" : ""
           }`}
         />
         <div
           className={`${
             isSmallScreen
               ? "relative p-4 text-white bg-black bg-opacity-75 rounded-b-lg"
               : "absolute bottom-0 top-52 left-0 right-0 px-4 md:opacity-0 md:hover:opacity-100 sm:opacity-100 project_details text-white"
           }`}
         >
           <h3 className="text-lg sm:text-xl mt-2 text-white font-sportyfont">
             &lt; <span className="font-sportyfont text-orange-500">{project.title}</span> /&gt;
           </h3>
           <p className="text-sm font-modernfont mt-2">{project.description}</p>
           <div className="mt-4 flex items-center space-x-4">
             <a
               href={project.github}
               target="_blank"
               rel="noopener noreferrer"
               className="text-orange-500 hover:text-orange-300 transition-colors"
               title="GitHub Repository"
             >
               <FaGithub size={20} />
             </a>
             <a
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className="text-orange-500 hover:text-orange-300 transition-colors"
               title="View Project"
             >
               <HiExternalLink size={20} />
             </a>
             <button
               onClick={() => setActiveProject(project)}
               className="text-orange-500 hover:text-orange-300 transition-colors"
               title="View All Images"
             >
               View Images
             </button>
           </div>
         </div>
       </div>
       
        ))}
      </div>
      {/* Modal for viewing all images */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white text-black p-4 rounded-lg w-3/4 max-w-3xl">
            <h3 className="text-xl font-bold font-sportyfont text-orange-500 mb-4"><span className="text-black">&lt;</span>{activeProject.title}<span className="text-black">/&gt;</span></h3>
            <div className="grid grid-cols-2 gap-4">
              {activeProject.src.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={index + 1}
                  className="w-full h-auto rounded-md"
                />
              ))}
            </div>
            <button
              onClick={() => setActiveProject(null)}
              className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
