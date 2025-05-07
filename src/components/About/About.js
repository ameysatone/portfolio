import React from "react";
import "./About.css"; // Import the custom CSS file

const About = () => {

  return (
    <div className="flex flex-col h-screen p-8 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-gray-900  dark:text-gray-100 mb-6">About Me</h1>
       <ul className="list-disc ml-6 text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-2">
         <li>Hi, I'm Amey Satone, a passionate developer with experience in React.js.</li>
         <li>I love creating dynamic and responsive web applications.</li>
         <li>Currently studying at MIT Academy of Engineering, Computer Engineering.</li>
       <li>I have a strong foundation in various technologies.</li>
         <li>Always eager to learn and explore new tools and frameworks.</li>
       </ul>

      <div className="relative mt-16 h-64 overflow-hidden">
        <div className="skills-slider w-full h-full">
          <div className="skills-slider-inner flex items-center space-x-16 animate-slide">
            {/* Original and Duplicate Items for a Smooth Loop */}
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center">
                  <i className="fab fa-react text-8xl text-blue-600 dark:text-blue-400"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    React
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-js text-8xl text-yellow-500 dark:text-yellow-400"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    JavaScript
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-python text-8xl text-blue-500 dark:text-blue-300"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    Python
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-css3 text-8xl text-blue-600 dark:text-blue-400"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    CSS
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-database text-8xl text-green-600 dark:text-green-400"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    SQL
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-cuttlefish text-8xl text-gray-700 dark:text-gray-300"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    C++
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-database text-8xl text-green-600 dark:text-green-400"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    MongoDB
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-linux text-8xl text-black dark:text-gray-400"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    Linux
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-git text-8xl text-orange-600 dark:text-orange-400"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    Git
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-tailwindcss text-8xl text-blue-400 dark:text-blue-300"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fab fa-aws text-8xl text-orange-500 dark:text-orange-400"></i>
                  <span className="mt-2 text-xl text-gray-900 dark:text-gray-100">
                    AWS
                  </span>
                </div>
                
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
