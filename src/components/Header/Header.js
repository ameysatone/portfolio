import React from 'react';
import ThemeToggle from './ThemeToggle'; // Adjust path as needed

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 font-mono bg-slate-200 dark:bg-slate-900">
      <div className="text-xl mb-4 md:mb-0 text-gray-900 dark:text-gray-100">Ganesh</div>
      <div>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg">
          <li>
            <a 
              href="#home" 
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a 
              href="#work" 
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              My Work
            </a>
          </li>
          
        </ul>
      </div>
      <ThemeToggle />
    </div>
  );
}

export default Header;
