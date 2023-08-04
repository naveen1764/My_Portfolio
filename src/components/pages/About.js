import React from 'react';
import AboutImg from '../assets/mostafaaa.png';

const About = () => {
  return (

    <div id='about' className='w-full min-h-screen p-2 flex flex-col md:flex-row justify-center items-center md:py-16 bg-black'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-4 my-5">
             About <span className="text-red-500">Me</span>
        </h2>
          <h2 className='py-4 text-gray-300 text-2xl'>Hi there, my name is Naveen Kumar Madasu</h2>
          <div class="border border-white p-4">
          <p class="text-lg md:text-xl text-white mb-8">
            <p class="text-2xl font-serif"></p>  
            I have successfully earned my B.Sc in Computer Science and currently, I am engaged in a Front-end Developer role at Birdsong Education PVT Ltd. Here, I am focused on React project for Schools ERP, utilizing my skills in HTML, CSS, and JS. This opportunity allows me to blend my passion for technology and education, crafting efficient and innovative solutions. As I continue to explore the vast potential of React, I remain committed to making a positive impact on the educational landscape.
            <br/>
            <br/>
            I am also familiar with graphic design principles for creating visually appealing and user-friendly interfaces, and proficient in Adobe Photoshop, Illustrator & slightly Figma.
            <br/>
            <br/>
            Learning new things always excites me, and I am constantly seeking new challenges to expand my knowledge and skills and branding my coding with N-Finity (Limitless Coding).
          </p>
        </div>
        </div>
        <div className="w-72 h-72 md:w-auto md:h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 mx-auto my-4">
          <img src={AboutImg} className="rounded-xl w-full h-full object-cover" alt="/" />
        </div>

      </div>
      <br/>
    </div>
    
  );
};

export default About;


