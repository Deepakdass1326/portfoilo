import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Deepak Dass
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A front-end developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/Deepakdass1326"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 w-40"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/deepakdass13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 w-40"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;