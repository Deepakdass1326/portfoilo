import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import RevealOnScroll from '../RevealOnScroll';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Deepak Dass
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            A passionate Full-Stack Developer skilled in building scalable, high-performance web applications using the MERN stack. I love crafting intuitive UIs, developing robust backends, and delivering real-world solutions that blend performance with great user experience.
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
