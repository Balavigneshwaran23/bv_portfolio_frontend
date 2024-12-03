import bala from "../assets/images/hero-removebg.png";
import { ReactComponent as SvgCurve } from "../assets/svg/SVG curve.svg";
import { useEffect, useRef } from "react";
import React from 'react';
import Typed from "typed.js";
export default function Hero() {
  const el = useRef(null);
  const Designer = '<span class="text-orange-500">Designer</span>';
  const Developer = '<span class="text-orange-500">Developer</span>';
  const Engineer = '<span class="text-orange-500">Engineer</span>';
  const Animator = '<span class="text-orange-500">Animator</span>';

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ "Full Stack "+ Engineer,"Software "+ Developer, "Web " + Designer,"Interactive "+ Animator ],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|",
      contentType: 'html',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  
    
    return <div  className="overflow-scroll">


       
<div className="absolute  hidden md:block inset-0 w-full h-full z-1">
        <SvgCurve
          className="  w-full h-full hidden-svg1 line-animation "/>
      </div>
    <div className="relative z-2 flex flex-col md:flex-row text-white text-center md:text-left">

    <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <img
            src={bala} alt="balavigneshwaran" className="w-2/4 md:w-[420px] h-[350px] md:h-[640px] md:mt-9 rounded-lg shadow-lg"/>
        </div>
      
        <div className="relative z-10 text-center md:right-5 md: mt-10 md:mt-[250px] px-5 md:px-10 ">
        <div className="text-sm text-orange-500 mb-2 font-displayfont">BV@Coding | (2024)</div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight font-sportyfont ">
          I'm <span  className="text-orange-500">Bala</span>vigneshwaran<br /> <div className="w-max  md:left-1/4 relative">
          <h1 className="whitespace-nowrap w-3/4 md:w-1/2  pr-5 text-3xl md:text-4xl text-white font-bold"><span className="text-orange-500">a</span> <span ref={el}  />{" "}</h1>
          </div></h1>
        <p className="mt-4 text-gray-300 text-lg font-textfont">
        Hey everyone, I'm Balavigneshwaran, a Full Stack Web Developer passionate about building innovative and efficient web solutions.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#about"><button  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-sm font-medium font-displayfont">
          About Me
          </button></a>
          <button className="border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 px-6 py-3 rounded-md text-sm font-medium font-displayfont">
          Get in touch
          </button>
        </div>
      </div>

      
      
      </div>
     <div className= "hidden md:block top-0 overlay element static z-1">
     <div className="  roundcircle-outer "><div className="  roundcircle-inter bg-gradient-radial from-orange-500  via-transparent to-transparent rounded-t-full"></div></div>
     </div>



      </div>
}