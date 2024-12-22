import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react';
import { useState } from 'react'
import { HomeIcon, UserIcon, LightBulbIcon, BriefcaseIcon, PhoneIcon } from '@heroicons/react/24/outline'; 
export default function Header (){
    const[togglebnt ,settogglebnt] = useState(false);



    return<header className="  flex justify-between text-white px-5 py-2 ">
        <a href='https://github.com/BALAVIGNESHWARAN23' id="home" className='z-10 '><h2 className=" font-bold text-3xl  font-boldfont hover:text-orange-500  text-white  ">B<span className='hover:text-white text-orange-500 '>V</span></h2></a>
        <nav className='hidden md:block'>
        <ul className=" flex fixed z-50 font-bold text-2xl font-modernfont">
        <li className="flex hover:text-orange-500 duration-300"><HomeIcon className="h-5 w-5 mr-1 mt-1" /><a href="#home"  >Home</a></li>
            <li className="flex hover:text-orange-500 duration-300"><UserIcon className="h-5 w-5 mr-1 mt-1" /><a href="#about">About</a></li>
            <li className="flex hover:text-orange-500 duration-300"><LightBulbIcon className="h-5 w-5 mr-1 mt-1" /><a href="#skills">Skills</a></li>
            <li className="flex hover:text-orange-500 duration-300"><BriefcaseIcon className="h-5 w-5 mr-1 mt-1" /><a href="#projects">Projects</a></li>
            <li className="flex hover:text-orange-500 duration-300"><PhoneIcon className="h-5 w-5 mr-1 mt-1" /><a href="#contact">Contact</a></li>
        </ul></nav>
      { togglebnt &&  <nav className=' block md:hidden  '>
        <ul className="flex flex-col font-bold duration-300 mobilnav animate-fade-in-right" onClick={() => settogglebnt(!togglebnt)}>
  <li className="flex justify-center items-center hover:text-gray1 duration-300"><HomeIcon className="h-5 w-5 mr-1 mt-1" /><a href="#home">Home</a></li>
  <li className="flex justify-center items-center hover:text-gray1 duration-300"><UserIcon className="h-5 w-5 mr-1 mt-1" /><a href="#about">About</a></li>
  <li className="flex justify-center items-center hover:text-gray1 duration-300"><LightBulbIcon className="h-5 w-5 mr-1 mt-1" /><a href="#skills">Skills</a></li>
  <li className="flex justify-center items-center hover:text-gray1 duration-300"><BriefcaseIcon className="h-5 w-5 mr-1 mt-1" /><a href="#projects">Projects</a></li>
  <li className="flex justify-center items-center hover:text-gray1 duration-300"><PhoneIcon className="h-5 w-5 mr-1 mt-1" /><a href="#contact">Contact</a></li>
  </ul>
 </nav>}
        <button onClick={()=> settogglebnt(!togglebnt)}><Bars3Icon  className=' fixed right-6 top-4 block md:hidden mobilnav1 text-white h-5 '/></button>
    </header>
}