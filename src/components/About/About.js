import React, { useState } from 'react';
import './About.css'; // Import the custom CSS file

const About = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="flex flex-col h-screen p-8 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-gray-900  dark:text-gray-100 mb-6">About Me</h1>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
        Hi, I'm Ganesh Derkar, a passionate developer with experience in React.js and a love for creating dynamic and responsive web applications. 
        I’m currently studying at MIT Academy of Engineering in the Computer Engineering program. I have a strong foundation in various technologies 
        and am always eager to learn and explore new tools and frameworks.
      </p>
      <div className="relative mt-16 h-64">
        <div className="skills-slider w-full h-full overflow-hidden">
          <div
            className={`skills-slider-inner flex items-center space-x-16 ${paused ? 'paused' : 'animate-slide'}`}
          >
            <div className="flex flex-col items-center">
              <i className="fab fa-react text-8xl text-blue-600 dark:text-blue-400"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">React</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-js text-8xl text-yellow-500 dark:text-yellow-400"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-python text-8xl text-blue-500 dark:text-blue-300"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-css3 text-8xl text-blue-600 dark:text-blue-400"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-database text-8xl text-green-600 dark:text-green-400"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">SQL</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-cuttlefish text-8xl text-gray-700 dark:text-gray-300"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">C++</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-database text-8xl text-green-600 dark:text-green-400"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-linux text-8xl text-black dark:text-gray-400"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">Linux</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-git text-8xl text-orange-600 dark:text-orange-400"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-tailwindcss text-8xl text-blue-400 dark:text-blue-300"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">Tailwind CSS</span>
            </div>
            {/* Duplicate the first slide to make the loop seamless */}
            <div className="flex flex-col items-center">
              <i className="fab fa-react text-8xl text-blue-600 dark:text-blue-400"></i>
              <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">React</span>
            </div>
          </div>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          onClick={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <i className="fas fa-chevron-left text-2xl"></i>
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          onClick={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <i className="fas fa-chevron-right text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default About;
