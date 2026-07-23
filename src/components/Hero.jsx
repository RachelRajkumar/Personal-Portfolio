import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaTimes, FaEye } from 'react-icons/fa';
import avatarImg from '../assets/images/Photo.jpeg';

const Hero = () => {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToProjects = () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background animated gradients */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-12">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex flex-col items-start text-left"
                >
                    <h2 className="text-xl md:text-2xl text-gray-300 mb-2 tracking-widest uppercase">Welcome to my portfolio</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Rachel Rajkumar</span>
                    </h1>
                    
                    <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-12">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                2000,
                                'Computer Science Student',
                                2000,
                                'Problem Solver',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400"
                        />
                    </div>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        I build exceptional, responsive, and accessible web applications. Passionate about learning new technologies, solving complex problems, and creating user-friendly digital experiences.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <button onClick={scrollToProjects} className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-rose-600 text-white font-medium active:scale-95 md:hover:scale-105 transition-transform shadow-lg shadow-orange-500/30">
                            View Projects
                        </button>
                        <button onClick={() => setIsResumeModalOpen(true)} className="px-8 py-3 rounded-full border border-gray-500 text-white font-medium active:bg-gray-800 md:hover:bg-gray-800 transition-colors flex items-center gap-2">
                            <FaDownload /> Resume
                        </button>
                        <button onClick={scrollToContact} className="px-8 py-3 rounded-full border border-gray-500 text-white font-medium active:bg-gray-800 md:hover:bg-gray-800 transition-colors flex items-center gap-2">
                            <FaEnvelope /> Contact Me
                        </button>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/RachelRajkumar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-3xl transition-colors hover:scale-110">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/rachel-r-176480343/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] text-3xl transition-colors hover:scale-110">
                            <FaLinkedin />
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 flex justify-center items-center relative w-full"
                >
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mt-10 md:mt-0">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500 to-rose-500 animate-spin-slow opacity-50 blur-md"></div>
                        <div className="absolute inset-2 rounded-full glass overflow-hidden border-4 border-white/10 z-10 flex items-center justify-center bg-gray-900">
                            <img 
                                src={avatarImg} 
                                alt="Rachel Rajkumar - Developer" 
                                className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://ui-avatars.com/api/?name=Rachel&background=random&size=512';
                                }}
                            />
                        </div>
                        
                        {/* Floating elements */}
                        <motion.div 
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 glass p-4 rounded-xl z-20 shadow-xl"
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>
                        <motion.div 
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 glass p-4 rounded-xl z-20 shadow-xl"
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
            {/* Resume Popup Modal */}
            <AnimatePresence>
                {isResumeModalOpen && (
                    <div 
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setIsResumeModalOpen(false)}
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-2xl max-w-md w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setIsResumeModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
                            >
                                <FaTimes size={20} />
                            </button>
                            
                            <div className="flex flex-col items-center text-center mt-4">
                                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                                    <span className="text-white text-2xl font-bold">CV</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Rachel's Resume</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Click download to save the full detailed resume document highlighting my skills, projects, and academic background.
                                </p>
                                
                                <div className="flex gap-4 w-full">
                                    <a 
                                        href="/assets/resume/resume.pdf" 
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white font-bold active:scale-95 md:hover:scale-105 transition-transform flex justify-center items-center gap-2"
                                        onClick={() => setIsResumeModalOpen(false)}
                                    >
                                        <FaEye /> View PDF
                                    </a>
                                    <a 
                                        href="/assets/resume/resume.pdf" 
                                        download="Rachel_Resume.pdf"
                                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold active:scale-95 md:hover:scale-105 transition-transform flex justify-center items-center gap-2 shadow-lg shadow-orange-500/20"
                                        onClick={() => setIsResumeModalOpen(false)}
                                    >
                                        <FaDownload /> Download
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
