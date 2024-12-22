import React from 'react';

const Preloader = () => {
  return (
    <div className="flex flex-col justify-center mb-0 items-center h-screen bg-gradient-to-b from-gray-900 to-black">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        className="animate-floating h-40 w-40"
      >
        <defs>
          <linearGradient id="orange-gradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ff6a00">
              <animate
                attributeName="offset"
                from="0%"
                to="100%"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <text
          x="50%" 
          y="50%" 
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="sportyfont"
          fontSize="100"
          fontWeight="bold"
          fill="url(#orange-gradient)"
        >
          BV
        </text>
      </svg>

      
      <div
        className=" md:block preloader absolute top-96 text-sm  text-orange-500 mt-0 font-displayfont opacity-0 animate-fade-in-left"
      >
        BV@Coding | (2024)
      </div>
    </div>
  );
};

export default Preloader;
