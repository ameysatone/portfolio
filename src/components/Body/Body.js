import React from 'react';
import SkillsCube from './SkillsCube'; // Import the SkillsCube component

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="flex-1 max-w-lg pl-4 md:pl-8 mb-8 md:mb-0">
        <p className="text-lg leading-relaxed  text-gray-700 dark:text-gray-300 animate-fadeInSlideUp mb-6">
          <span className='text-4xl'>
          Hi, I'm Amey Satone, 
          </span>
          <br></br>
          <p className='text-2xl'>
          a passionate developer with experience in
          React.js and a love for creating dynamic and responsive web
          applications. Explore my projects, learn more about my skills, and
          feel free to reach out!
          </p>
        </p>
        <div className="flex items-center justify-start mb-6">
        <a
    href="/resume.pdf"
    download
    className="px-6 py-3 bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 font-semibold rounded-md shadow-lg hover:bg-green-700 dark:hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-lg"
    >
  Download Resume
</a>

        </div>
        <div className="flex-col justify-center space-x-4">
          <a 
            href="https://github.com/ameysatone" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a 
            href="https://x.com/AmeySatone67832" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/amey-satone-685327253" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition-colors"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <SkillsCube /> {/* Replace the image with the SkillsCube component */}
      </div>
    </div>
  );
}

export default Body;
