import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Firebase",
    "C++"
]

const About = () => {
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>
            <p className="text-gray-300 text-center mb-8">
                Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education Section (Left) */}
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Bachelor of Computer Applications</strong> - Chandigarh University (2022-2025)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Web Development...
                        </li>
                    </ul>
                </div>
                
                {/* Skills Section (Right) */}
                <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Skills</h3>
                    <div className='flex flex-wrap gap-2'>
                        {Skills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}

export default About;
