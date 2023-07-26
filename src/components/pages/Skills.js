import React from "react";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import PhotoShopImg from '../assets/photoshoplogo.png';
import IllusImg from '../assets/AdobeIllusLogo.png';
import msWordImg from '../assets/msWordLogo.png';
import msExcelImg from '../assets/msExcelLogo.png';
import msPPImg from '../assets/msPPLogo.png';
import msOffImg from '../assets/msofficelogo.png';

const Skills = () => {
  return (
   <div id="skills" className="w-full text-gray-300 bg-gradient-to-b from-black to-blue-900">
    <br/>
  <div className="max-w-5xl mx-auto p-4">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 inline-block my-16 text-yellow-300">My <span className="text-red-500">Skills</span></h1>
    </div>
    <p className="mt-4 text-lg text-center my-10 text-white mb-8">Writing code using languages : HTML, CSS, JS & React; <br/>
    For Designing : Adobe Photoshop & Illustrator : 
    For Analysing & Presentations : MS Office, Word, Excel & Power Point</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-8">
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={HTML} alt="HTML icon" />
        <p className="text-lg">HTML</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={CSS} alt="CSS icon" />
        <p className="text-lg">CSS</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={JavaScript} alt="Java Script icon" />
        <p className="text-lg">JAVASCRIPT</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={ReactImg} alt="React JS icon" />
        <p className="text-lg">REACT JS</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={PhotoShopImg} alt="Photoshop icon" />
        <p className="text-lg">ADOBE PHOTOSHOP</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={IllusImg} alt="Illustrator icon" />
        <p className="text-lg">ADOBE ILLUSTRATOR</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={msWordImg} alt="MS Word icon" />
        <p className="text-lg">MS WORD</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={msExcelImg} alt="MS Excel icon" />
        <p className="text-lg">MS EXCEL</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-8" src={msPPImg} alt="Power Point icon" />
        <p className="text-lg">MS POWER POINT</p>
      </div>
      <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
        <img className="w-20 mx-auto mt-4 mb-2" src={msOffImg} alt="MS Office icon" />
        <p className="text-lg">MS OFFICE</p>
      </div>
      
    </div>
  </div>
</div>
  );
};

export default Skills;
