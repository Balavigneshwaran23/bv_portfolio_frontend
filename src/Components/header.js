import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react';
import { useState } from 'react'
export default function Header (){
    const[togglebnt ,settogglebnt] = useState(false);



    return<header className="  flex justify-between  text-white px-5 py-2 ">
        <a href='https://github.com/BALAVIGNESHWARAN23' id="home" className='z-10 '><h2 className=" font-bold text-3xl  font-boldfont hover:text-orange-500  text-white  ">B<span className='hover:text-white text-orange-500 '>V</span></h2></a>
        <nav className='hidden md:block'>
        <ul className=" flex fixed z-50 font-bold text-2xl font-modernfont">
            <li ><a href="#home" className="hover:text-orange-500 duration-300" >Home</a></li>
            <li><a href="#about"className="hover:text-orange-500 duration-300">About</a></li>
            <li><a href="#skills"className="hover:text-orange-500 duration-300">Skills</a></li>
            <li><a href="#projects"className="hover:text-orange-500 duration-300">Projects</a></li>
            <li><a href="#contact"className="hover:text-orange-500 duration-300">Contact</a></li>
        </ul></nav>
      { togglebnt &&  <nav className=' block md:hidden  '>
        <ul className=" flex flex-col  font-bold  mobilnav"onClick={()=> settogglebnt(!togglebnt)} >
            <li><a href="#home"className="hover:text-gray1 duration-300">Home</a></li>
            <li><a href="#about"className=" hover:text-gray1 duration-300">About</a></li>
            <li><a href="#skills"className="hover:text-gray1 duration-300">Skills</a></li>
            <li><a href="#projects"className="hover:text-gray1 duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray1 duration-300">Contect</a></li>
        </ul></nav>}
        <button onClick={()=> settogglebnt(!togglebnt)}><Bars3Icon  className=' fixed right-6 top-4 block md:hidden mobilnav1 text-white h-5 '/></button>
    </header>
}