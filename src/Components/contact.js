import bala2 from "../assets/images//balacontact.png";
import bala_resume from "../assets/pdf/Balavigneshwaran p_resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp,  faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
      const response = await fetch("https://portfolio-backend-jet-six.vercel.app/api/contact", {
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
    <div className="contactmin  w-full sm:grid md:flex bg-gradient-to-b from-gray-900 to-black text-white px-6 py-10 ">


<div className=" contactabout relative md:w-1/2   flex flex-col items-center md:flex-row md:items-start md:justify-center space-y-4 md:space-y-0">
<div data-aos="fade-right"
        data-aos-delay="500" data-aos-duration="2000" className="flex justify-center items-center -mt-20">
<div className="relative flex flex-col items-center sm:w-auto md:flex-row md:items-start md:space-x-6">
  
  <div className="text-center md:text-left md:relative md:ml-6 md:top-[105px] md:w-1/2 px-5 md:px-0">
    
    <div className="orangeboder flex justify-center items-center bg-orange-500 rounded-full sm:w-[80px] sm:h-[80px] md:w-[95px] md:h-[95px] relative mx-auto mb-5 ">
      <img
        src={bala2} alt="Profile" className="h-[105px] w-[105px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[93px] rounded-full z-10 hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:border-orange-700 hover:border-2"/>
    </div>

    <div className="text-center text-sm text-orange-500 mb-2 font-displayfont">BV@Coding | (2024)</div>
    <h1 className="text-center text-2xl md:text-3xl font-bold leading-tight font-sportyfont">
      I'm <span className="text-orange-500">Bala</span>vigneshwaran
    </h1>
    <p className="text-center mt-4 text-gray-300 text-lg font-textfont">
      Hi! I'm Balavigneshwaran, a Full Stack Web Dev 🚀 crafting scalable web apps 💻✨
    </p>

    {/* Social Media Icons */}
    <section id="skills" className="md:flex py-1 relative justify-center">
      <div className="flex items-center justify-center gap-4 mt-2">
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
      </div>
    </section>
  </div>
</div>

</div>



  
</div>
<div data-aos="zoom-in-right"
        data-aos-delay="500" data-aos-duration="2000" className="minicontact p-6 max-w-md w-full  relative ml-52  border-2 border-orange-700 rounded-lg shadow-lg">
        <h1 className="text-4xl  text-center text-white font-sportyfont font-bold neon-text mb-4">
        &lt; <span className="text-orange-500">For</span> Contact /&gt;
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
           className="w-full p-2 rounded bg-transparent border-2 border-white hover:border-orange-500 text-orange-400 focus:outline-none focus:ring focus:ring-orange-500" required/>
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}
           className="w-full p-2 rounded bg-transparent border-2 border-white hover:border-orange-500 text-orange-400 focus:outline-none focus:ring focus:ring-orange-500" required/>
           <input type="text" name="subject" placeholder="Your Subject " value={formData.subject} onChange={handleChange} 
           className="w-full p-2 rounded bg-transparent border-2 border-white hover:border-orange-500 text-orange-400 focus:outline-none focus:ring focus:ring-orange-500" required />
          <textarea name="message" placeholder="Your Message" value={formData.message}  onChange={handleChange}
            className="w-full p-2 rounded bg-transparent border-2 border-white hover:border-orange-500 text-orange-400 focus:outline-none focus:ring focus:ring-orange-500" rows="5" required/>
          <button  type="submit" className="w-full py-2 border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 px-6  rounded-md text-sm font-medium font-displayfontneon-shadow" >
            Send Message
          </button>
        </form>
        {status && <p className="text-center text-orange-500 mt-4">{status}</p>}
      </div>


        
     

    </div>
    <div  data-aos="fade-up"
        data-aos-delay="500" data-aos-duration="2000" className=" pagelink  flex text-lg  text-gray-700 flex-col font-textfont text-center md:relative mb-3 px-5 md:px-0 items-center justify-center -top-20 right-24">
  <p className="text-orange-600">Pages To Explore</p>
  <a href="#home" className="hover:text-orange-600" >home</a>
  <a href="#about" className="hover:text-orange-600">About</a>
  <a href="#skills" className="hover:text-orange-600">Skills</a>
  <a href="#projects" className="hover:text-orange-600">Projects</a>
  <a href= {bala_resume} className="hover:text-orange-600">Resume</a>
  <a href="https://balavignesh2304.carrd.co/" className="hover:text-orange-600">Link</a>

  
</div></>
  );
};


