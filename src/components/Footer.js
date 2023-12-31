import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';

function Footer() {
return (
  <div className="bg-black text-gray-400">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Contact Me</h2>
           <a href="mailto:madasunaveennaidu@gmail.com" className="inline-block mr-4">
           <FaEnvelope className="inline-block mr-2" />
            Email
          </a>
        </div>

     
      <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Social Media</h2>
            <a href="https://www.instagram.com/naveennaidu.madasu/" className="inline-block mr-4" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="inline-block mr-2" />
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/madasu-naveen-kumar-09468b145/" className="inline-block mr-4" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="inline-block mr-2" />
              LinkedIn
            </a>
            <a href="https://www.facebook.com/naveennaidu.madasu" className="inline-block mr-4" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="inline-block mr-2" />
              Facebook
            </a>
        </div>
    </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between" >
          <div className="text-sm text-gray-400">
            <p>All rights reserved &copy; NFinity_2023</p>
          </div>

          <div className="text-sm text-gray-400">
            <p>
              Made by : Naveen Kumar Madasu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;