
import bala2 from "../assets/images/Aboutpic.png";
import bala_resume from "../assets/pdf/Balavigneshwaran p_resume.pdf";
import React, { useState } from "react";
import {LinkIcon,DocumentIcon} from "@heroicons/react/24/outline"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp,  faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



  
export default function About (){

    const techs = [
        { name: "Github", img: "https://techstack-generator.vercel.app/github-icon.svg",} ,
        { name: "Javascript", img: "https://techstack-generator.vercel.app/js-icon.svg" },
        { name: "React.js", img: "https://techstack-generator.vercel.app/react-icon.svg" },
        { name: "HTML", img: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", img: "https://skillicons.dev/icons?i=css" },
        { name: "Tailwind", img: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Node.js", img: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" },
        { name: "MongoDB", img: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
        { name: "Postman", img: "https://skillicons.dev/icons?i=postman" },
        { name: "Flask", img: "https://profilinator.rishav.dev/skills-assets/flask.png" },
        { name: "Vercel", img: "https://skillicons.dev/icons?i=vercel" },
      ];

      const [activeSection, setActiveSection] = useState("");

      const about_link = {
        Resume: [
          {
            name: "Resume",
            url: bala_resume,
          },
        ],
        Link: [
          {
            name: "Links",
            url: "https://balavignesh2304.carrd.co/", 
          }
        ],
      };
      
      return <>
    <div id="about" className=" bg-gradient-to-b from-black to-gray-900 mt-0 relative text-white px-6 py-16 lg:px-20">
    <div className="flex aboutmin ">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 aboutminspace">
              
              <div className="flex-col">
              <div data-aos="flip-right"
     data-aos-duration="2000" data-aos-delay="500" data-aos-offset="80"  className="relative">
                <div className="bg-orange-500 absolute -top-3 h-full w-full rounded-lg"></div>
                <img
                  src={bala2 }
                  alt="Profile"
                  className=" relative z-10 rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-orange-500"
                />
                  
              </div>

              <section  className="px-8 py-12 relative">
              
             
  <div className="flex flex-col items-center justify-center  text-center overlay-container sm:grid-cols-2 lg:grid-cols-2">
    {Object.keys(about_link).map((section) => (
       
      <div
        key={section}
        data-aos="fade-right"
          data-aos-delay="700" data-aos-duration="2000"
        onClick={() => setActiveSection(section)}
        className={`flex z-50 border-orange-700  mb-10 font-modernfont border-2 justify-items-center relative space-x-4 p-6 h-4 w-40 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
          activeSection === section
            ? "bg-orange-500"
            : "hover:bg-orange-500"
        }`}
      >
       <div className="mt-2 space-y-2 text-center">
  {about_link[section].map((item, index) => (
    <div key={index} onClick={() => window.open(item.url, "_blank")} className="hover:underline text-2xl font-medium text-white cursor-pointer">
      <h3 className="relative bottom-6 left-8">{item.name}</h3>
    </div>
  ))}
</div>

                    



        <div className="bg-orange-500 h-12 w-12 border-orange-700 border-4 rounded-lg absolute bntover2 flex items-center justify-center">
          <div className="w-9 h-9 justify-center items-center text-orange-950">
            {getIcon(section)}
          </div>
        </div>
        {/* <h3 className="text-xl font-medium">{section}</h3> */}


       
                     


       


      </div>

 
     ))}</div>
</section>
<div className="relative bottom-14  text-center ">
<a data-aos="fade-up"
          data-aos-delay="900" data-aos-offset="200" data-aos-duration="2000" href="https://github.com/BALAVIGNESHWARAN23"><FontAwesomeIcon
  className="text-orange-700 hover:text-orange-500 text-4xl px-2 z-50  transform relative animate-bounceSmooth transition-transform duration-1000 ease-in-out  hover:animate-hoverSpinScale" icon={faGithub} 
/></a>
<a data-aos="fade-up"
          data-aos-delay="1200" data-aos-offset="200" data-aos-duration="2000" href="https://www.linkedin.com/in/balavigneshwaran-p-5371b3282"><FontAwesomeIcon
  className="text-orange-700 hover:text-orange-500 text-4xl px-2 z-50  transform relative animate-bounceSmooth transition-transform duration-1000 ease-in-out  hover:animate-hoverSpinScale" icon={faLinkedin} 
/></a>
<a data-aos="fade-up"
          data-aos-delay="1500" data-aos-offset="200" data-aos-duration="2000" href="https://wa.me/919025302745? text=hi ther how can i help you?"><FontAwesomeIcon
  className="text-orange-700 hover:text-orange-500 text-4xl px-2 z-50  transform relative animate-bounceSmooth transition-transform duration-1000 ease-in-out  hover:animate-hoverSpinScale" icon={faWhatsapp} 
/></a>
</div>



</div></div>
              <div className="absolute  hidden md:block left-10  inset-0 w-1/2 h-full z-9">
     
    </div>
              
            <div  >
                <div data-aos="fade-down"
                data-aos-duration="2000" data-aos-delay="500" data-aos-offset="80">
                <h2 className="text-4xl font-bold mb-4  font-sportyfont">&lt; <span className="text-orange-500">About</span> Me /&gt;</h2>
                <p className="text-gray-300 leading-relaxed mb-6 font-textfont">
                Hi! I'm <span className="text-orange-500 " >Balavigneshwaran</span>, a passionate <span className="text-orange-500"> Full Stack Web Developer </span> with expertise in creating <span className="text-orange-500">dynamic </span>and <span className="text-orange-500">responsive web applications</span>. I enjoy solving complex problems and building innovative solutions using modern technologies like <span className="text-orange-500">React</span>, <span className="text-orange-500">Node.js</span>, and <span className="text-orange-500">Tailwind CSS</span>. My goal is to help businesses achieve their digital transformation goals through robust and scalable web solutions. When I'm not coding, you can find me learning <span className="text-orange-500">new tech trends</span> or exploring new challenges in the world of <span className="text-orange-500">Web development</span>.
                </p></div>
                <div >
                <h3 data-aos="fade-right"
                data-aos-duration="2000" data-aos-delay="500" data-aos-offset="80" className="text-3xl font-bold mb-4 font-sportyfont">&lt; My favorite <span className="text-orange-500">tools</span> and <span className="text-orange-500">technologies </span>/&gt;</h3>
                  <div className="flex gap-6">
       

    <div className="flex flex-wrap justify-center items-center  gap-6 py-10 text-white">
      {techs.map((tech, index) => (
        <div 
          key={index} data-aos="fade-up"
          data-aos-delay={`${index * 200}`} data-aos-duration="2000"
          className="flex flex-col items-center text-center  w-28 hover:scale-110 transition-transform duration-300"
        > 
        <span className="  hover:text-orange-500 border-orange-700 border-4 rounded-lg  duration-300 animate-floating">
          <img
            src={tech.img}
            alt={tech.name}
            className="w-20 h-20 mb-2 object-contain bg-orange-500 bg-opacity-70 hover:shadow-xl hover:shadow-orange-500"
          />
           <p className="text-lg font-medium ">{tech.name}</p></span>
        </div>
      ))}
    </div>


                  </div>
                </div>
              </div>
            </div>
           
          </div>
          </>
     
      }
      
// Heroicons for Sections
function getIcon(section) {
  switch (section) {
    case "Resume":
      return <DocumentIcon />; 
    case "Link":
      return <LinkIcon />;
    default:
      return ;
  }
}