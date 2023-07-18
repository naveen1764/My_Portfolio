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
          <h2 className='py-4 text-gray-300 text-2xl'>Hi there, my name is Mostafa Hassan</h2>
          <div class="border border-white p-4">
          <p class="text-lg md:text-xl text-white mb-8">
            <p class="text-2xl font-serif"></p>  
            I am a software engineering student (4th Year) at Sixth of October University for Modern Science and Arts (MSA), under the supervision of Greenwich University's School of Computing Science, I am passionate about (Web development using ReactJS/NextJS) and (Mobile app development using Flutter/React native).
            <br/>
            <br/>
            I am also familiar with graphic design principles for creating visually appealing and user-friendly interfaces, and proficient in Figma and Adobe Photoshop for UI and UX design.
            <br/>
            <br/>
            Learning new things always excites me, and I am constantly seeking new challenges to expand my knowledge and skills.
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


