// import { ReactComponent as SvgCurve } from "D:/githubreptasks/first_react_app/redsun/src/assets/svg/ssscribble2.svg";
import React, { useState } from "react";
import {
  CodeBracketIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
} from "@heroicons/react/24/outline"; // Importing Heroicons

export default function Skills() {
  const [activeSection, setActiveSection] = useState("Frontend");

  const skills = {
    Frontend: [
      { name: "HTML/CSS", level: "90%" },
      { name: "JavaScript", level: "85%" },
      { name: "React.js", level: "80%" },
      { name: "Tailwind CSS", level: "80%" },
    ],
    Backend: [
      { name: "Node.js", level: "70%" },
      { name: "Express.js", level: "65%" },
      { name: "MongoDB", level: "80%" },
      { name: "REST APIs", level: "70%" },
    ],
    Tools: [
      { name: "Git & Github", level: "85%" },
      { name: "Visual studio code", level: "75%" },
      { name: "Postman", level: "60%" },
    ],
    "Soft Skills": [
      { name: "Teamwork", level: "85%" },
      { name: "Communication", level: "75%" },
      { name: "Problem-Solving", level: "80%" },
      { name: "Time Management", level: "80%" },
      { name: "Adaptability", level: "85%" },
      { name: "Leadership", level: "88%" },
      { name: "Critical Thinking", level: "86%" },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-gradient-to-b from-gray-900 to-black text-white p-6">
    <section id="skills" className="px-8 py-12 relative">
  <h2 className="text-4xl font-sportyfont mb-10 text-center">
    &lt; <span className="text-orange-500">Technical</span> Proficiency /&gt;
  </h2>
  <div className="grid grid-cols-1 overlay-container sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
    {Object.keys(skills).map((section) => (
      <div
        key={section}
        onClick={() => setActiveSection(section)}
        className={`flex z-50 border-orange-700 font-modernfont border-2 justify-items-center relative space-x-4 p-6 w-64 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
          activeSection === section
            ? "bg-orange-500"
            : "hover:bg-orange-500"
        }`}
      >
        <div className="bg-orange-500 h-12 w-12 border-orange-700 border-4 rounded-lg absolute bntover flex items-center justify-center">
          <div className="w-9 h-9 justify-center items-center text-orange-950">
            {getIcon(section)}
          </div>
        </div>
        <h3 className="text-xl font-medium">{section}</h3>
      </div>
    ))}
  </div>
  {/* <SvgCurve
      className="absolute bottom-0 w-full h-auto mt-8 z-10 hidden-svg line-animation"
    /> */}
</section>

      {/* Progress Bars */}
      {activeSection && skills[activeSection].length > 0 && (
        <section className="flex-1 mt-[8%] px-5 max-h-[30%] overflow-y-auto border-orange-700 border-2 pt-2 pb-8  rounded-lg">
          <h3 className="text-3xl font-sportyfont text-white pb-4 font-semibold border-orange-700 border-b-2  mb-4 text-center sm:text-left">
          &lt;<span className="text-orange-500">{activeSection}</span>/&gt;</h3>
          <div className="space-y-6 ">
            {skills[activeSection].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm font-medium">
                  <h5 className="font-modernfont text-xl ">{skill.name}</h5>
                  <span className="text-right sm:text-left">{skill.level}</span>
                </div>
                <div className="relative w-full bg-gray-700 h-2 rounded-md mt-2">
                  <div
                    className="absolute top-0 left-0 h-2 rounded-md bg-orange-500 transition-all duration-700"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// Heroicons for Sections
function getIcon(section) {
  switch (section) {
    case "Frontend":
      return <CodeBracketIcon />;
    case "Backend":
      return <ServerIcon />;
    case "Tools":
      return <WrenchScrewdriverIcon />;
    case "Soft Skills":
      return <UsersIcon />;
    default:
      return <CodeBracketIcon />;
  }
}
