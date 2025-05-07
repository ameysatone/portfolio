import React from 'react';
import { Link } from 'react-router-dom';
// import todoImage from '../../assect/todolist.png'

// Flattened list of all projects
const allProjects = [
  {
    title: 'Graphial password Authentication',
    description: 'It was a project given under the Minor Project. This is a password authentication system that uses Image ,Encryption to authenticate the user.',
    image: '/assects/graphical.png',
    
  },
  {
    title: 'Dark web Crawler',
    description: 'It was Project given under the Major project. This is a dark web crawler that helps to crawl the dark web and extract the data from it especially related to illegal weapons.',
    image: '/assects/darkweb.png',
   
  },
  {
    title: 'Invemtory managemnt system',
    description: 'This project was given under the Software engineering course. This is a Inventory management system that helps to manage the inventory and track the stock levels.',
    image: '/assects/image.png',
    
  },
  {
    title: 'professional Social Networking Site',
    description: 'This project was given under SLIP .This is a professional social networking site where you can connect with other professionals, share your work, and find job opportunities.',
    image: '/assects/social.png',
    
  },
  {
    title: 'Resume Parser',
    description: 'It Helps to parse resume and extract information in very precise manner helpfull for HR',
    image: '/assects/resume.png',
    
  },
  {
    title: 'Portfolio Website',
    description: 'This showcases all my technical skills and projects',
    image: '/assects/portfolio.png',
    
  },

];

const Work = () => {
  return (
    <div className="p-6 sm:p-12 bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">My Work</h1>

      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {allProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex space-x-6">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demoLink && project.demoLink !== '#' && (
    <a
      href={project.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 dark:text-green-400 hover:underline"
    >
      Live Demo
    </a>
  )}
              </div>
            </div>
            
          </div>
        ))}
      </div>

      <Link
              to="moreabout"
              className="text-blue-600 p-10 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-300 transition"
            >
              More About Me →
            </Link>
    </div>
  );
};

export default Work;
