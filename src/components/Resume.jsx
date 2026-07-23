import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
    return (
        <section id="resume" className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My <span className="text-gradient">Resume</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto glass rounded-2xl border border-white/5 overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-900 p-8 flex flex-col justify-center items-center text-center border-r border-gray-800">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                            <span className="text-white text-3xl font-bold">CV</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Rachel's Resume</h3>
                        <p className="text-gray-400 text-sm mb-8">Updated Recently</p>
                        
                        <div className="flex gap-3 w-full mb-4">
                            <a 
                                href="/assets/resume/resume.pdf" 
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white font-medium active:scale-95 md:hover:scale-105 transition-transform flex justify-center items-center gap-2"
                            >
                                <FaEye /> View
                            </a>
                            <a 
                                href="/assets/resume/resume.pdf" 
                                download="Rachel_Resume.pdf"
                                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-rose-600 text-white font-medium active:scale-95 md:hover:scale-105 transition-transform flex justify-center items-center gap-2 shadow-lg shadow-orange-500/20"
                            >
                                <FaDownload /> Download
                            </a>
                        </div>
                    </div>
                    
                    <div className="md:w-2/3 p-0 bg-gray-800/30 flex flex-col justify-center items-center min-h-[400px]">
                        <iframe 
                            src="/assets/resume/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                            title="Resume Preview"
                            className="w-full h-full min-h-[500px] border-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
