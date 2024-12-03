import bala2 from "../assets/images//balacontact.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp,  faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import React, { useState } from "react";

export default function Contact()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject:"",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://balavigneshwaran-portfolio-backend.vercel.app/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "",subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (<>
    <div id="contact" className="border-orange-500 border-2 w-s h-1"></div>
    <div className="w-full sm:grid md:flex bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10 ">


<div className="relative md:w-1/2  flex flex-col items-center md:flex-row md:items-start md:justify-center space-y-4 md:space-y-0">


  {/* Profile Section */}
  <div className="relative">
    <div className="bg-orange-500 absolute  transform -translate-x-1/2 md:translate-x-0 md:left-64 rounded-full sm:w-[80px] sm:h-[80px] md:w-[95px] md:h-[95px]"></div>
    <img
      src={bala2}
      alt="Profile"
      className="relative  md:left-64 h-[105px] w-[105px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[93px] rounded-full z-10 hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:border-orange-700 hover:border-2"
    />
  </div>

  {/* Text Section */}
 <div className="text-center md:relative md:ml-6 md:top-[105px] md:w-1/2 px-5 md:px-0">
  <div className="text-sm text-orange-500 mb-2 font-displayfont">BV@Coding | (2024)</div>
  <h1 className="text-2xl md:text-3xl font-bold leading-tight font-sportyfont">
    I'm <span className="text-orange-500">Bala</span>vigneshwaran
  </h1>
  <div className="relative mt-2">
    <h1 className="whitespace-nowrap w-full pr-5 text-3xl md:text-4xl text-white font-bold">
      {/* Optional animated text */}
    </h1>
  </div>
  <p className="mt-4 text-gray-300 text-lg font-textfont">
    Hi! I'm Balavigneshwaran, a Full Stack Web Dev 🚀 crafting scalable web apps 💻✨
  </p>


<section id="skills" className="px-8 md:flex py-1 relative">
  {/* Social Media Icons */}
  <div className="flex sm:items-center sm:text-center md:absolute md:justify-start md:left-20 mt-2 md-mt-0 pt-2 md:pt-0 mb-1 gap-4">
    <div className="border-orange-700 border-2 w-10 h-10 rounded-full flex items-center justify-center animate-bounceSmooth transition-transform duration-1000 ease-in-out hover:animate-hoverSpinScale">
      <a href="https://github.com/BALAVIGNESHWARAN23">
        <FontAwesomeIcon
          className="text-white hover:text-orange-500 text-2xl transition-transform duration-300"
          icon={faGithub}
        />
      </a>
    </div>
    <div className="border-orange-700 border-2 w-10 h-10 rounded-full flex items-center justify-center animate-bounceSmooth transition-transform duration-1000 ease-in-out hover:animate-hoverSpinScale">
      <a href="https://www.linkedin.com/in/balavigneshwaran-p-5371b3282">
        <FontAwesomeIcon
          className="text-white hover:text-orange-500 text-2xl transition-transform duration-300"
          icon={faLinkedin}
        />
      </a>
    </div>
    <div className="border-orange-700 border-2 w-10 h-10 rounded-full flex items-center justify-center animate-bounceSmooth transition-transform duration-1000 ease-in-out hover:animate-hoverSpinScale">
      <a href="https://wa.me/919025302745?text=hi ther how can i help you?">
        <FontAwesomeIcon
          className="text-white hover:text-orange-500 text-2xl transition-transform duration-300"
          icon={faWhatsapp}
        />
      </a>
    </div>
    <div className="border-orange-700 border-2 w-10 h-10 rounded-full flex items-center justify-center animate-bounceSmooth transition-transform duration-1000 ease-in-out hover:animate-hoverSpinScale">
      <a href="https://www.instagram.com/p._.balavigneshwaran_232">
        <FontAwesomeIcon
          className="text-white hover:text-orange-500 text-2xl transition-transform duration-300"
          icon={faInstagram}
        />
      </a>
    </div>
  </div></section>
  
</div>


  
</div>



{/* pages name */}


<div className=" flex text-lg  text-gray-700 flex-col font-textfont text-center md:relative mb-3 px-5 md:px-0 items-center justify-center -top-20 right-24 mr-10 ml-10">
  <p className="text-orange-500">Pages To Explore</p>
  <a href="#home" className="hover:text-orange-600" >home</a>
  <a href="#about" className="hover:text-orange-600">About</a>
  <a href="#skills" className="hover:text-orange-600">Skills</a>
  <a href="#projects" className="hover:text-orange-600">Projects</a>
  <a href="https://example.com/your-resume.pdf" className="hover:text-orange-600">Resume</a>
  <a href="https://balavignesh2304.carrd.co/" className="hover:text-orange-600">Link</a>
  <a href="#contact" className="hover:text-orange-600">Contact</a>
  
</div>

        
      <div className="p-6 max-w-md w-full  relative   border-2 border-orange-700 rounded-lg shadow-lg">
        <h1 className="text-4xl text-center text-white font-sportyfont font-bold neon-text mb-4">
        &lt; <span className="text-orange-500">For</span> Contact /&gt;
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-transparent border-2 border-white hover:border-orange-500 text-orange-400 focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-transparent border-2 border-white hover:border-orange-500 text-orange-400 focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
           <input
            type="text"
            name="subject"
            placeholder="Your Subject "
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 rounded bg-transparent border-2 border-white hover:border-orange-500 text-orange-400 focus:outline-none focus:ring focus:ring-orange-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 rounded bg-transparent border-2 border-white hover:border-orange-500 text-orange-400 focus:outline-none focus:ring focus:ring-orange-500"
            rows="5"
            required
          />
          <button
            type="submit"
            className="w-full py-2 border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 px-6  rounded-md text-sm font-medium font-displayfontneon-shadow"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-center text-orange-500 mt-4">{status}</p>}
      </div>
    </div></>
  );
};


