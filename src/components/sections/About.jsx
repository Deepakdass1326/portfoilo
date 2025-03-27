import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const About = () => {
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <p className="text-gray-300 text-center mb-8">
                Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education & Experience Section (Left) */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education & 💼 Experience</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Bachelor of Computer Applications</strong> - Chandigarh University, Punjab, Mohali (August 2022 – May 2025)
                        </li>
                        <li>
                            <strong>XII</strong> - Sarvodaya Vidyalaya, Delhi (August 2021 – May 2022)
                        </li>
                    </ul>
                    <hr className="my-4 border-white/10" />
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Web Developer</strong> - Zeenik Solution, New Delhi (May 2024 – August 2024)
                            <ul className="list-disc list-inside text-gray-400 ml-4 mt-2 space-y-1">
                                <li>Developed a blog website using React, HTML, and CSS to ensure a user-friendly experience.</li>
                                <li>Designed and implemented a responsive layout for an optimized experience across devices.</li>
                                <li>Integrated dynamic content management to enable seamless blog creation and updates.</li>
                                <li>Followed best coding practices to maintain clean, structured, and scalable code.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                {/* Skills Section (Right) */}
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🛠 Skills</h3>
                    
                    <div className='mb-4'>
                        <h4 className="text-lg font-semibold mb-2">Languages:</h4>
                        <div className='flex flex-wrap gap-2'>
                            {["HTML", "CSS", "JavaScript", "C++"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h4 className="text-lg font-semibold mb-2">Frameworks and Libraries:</h4>
                        <div className='flex flex-wrap gap-2'>
                            {["Tailwind CSS", "React.js"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h4 className="text-lg font-semibold mb-2">Technologies and Databases:</h4>
                        <div className='flex flex-wrap gap-2'>
                            {["Firebase", "Supabase"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h4 className="text-lg font-semibold mb-2">Developer Tools:</h4>
                        <div className='flex flex-wrap gap-2'>
                            {["VS Code", "GitHub"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-2">Additional Skills:</h4>
                        <div className='flex flex-wrap gap-2'>
                            {["Responsive Design", "State Management (React Context/Redux)", "API Integration"].map((tech, key) => (
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About;