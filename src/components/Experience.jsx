import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience & <span className="text-gradient">Education</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline vertical line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-800 rounded-full"></div>

                    {/* Internship Experience */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative flex flex-col md:flex-row items-center mb-12"
                    >
                        <div className="hidden md:flex w-1/2 justify-end pr-8">
                            <div className="glass p-6 rounded-2xl w-full text-right border-r-4 border-orange-500">
                                <h3 className="text-2xl font-bold text-white">Full Stack Developer Intern</h3>
                                <h4 className="text-lg text-orange-400 mb-4">THIRANEX <span className="text-gray-500 text-sm ml-2">| May 2026</span></h4>
                                <p className="text-gray-400 text-sm">
                                    Worked on full-stack web development, RESTful APIs, and responsive web applications.
                                </p>
                            </div>
                        </div>

                        {/* Center Icon */}
                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 flex items-center justify-center z-10 border-4 border-gray-900 shadow-lg shadow-orange-500/50">
                            <FaBriefcase className="text-white text-xs" />
                        </div>

                        {/* Mobile view of the same card */}
                        <div className="md:hidden w-full pl-12 pr-4">
                            <div className="glass p-6 rounded-2xl w-full text-left border-l-4 border-orange-500">
                                <h3 className="text-xl font-bold text-white">Full Stack Developer Intern</h3>
                                <h4 className="text-md text-orange-400 mb-4">THIRANEX <span className="text-gray-500 text-sm ml-2">| May 2026</span></h4>
                                <p className="text-gray-400 text-sm">
                                    Worked on full-stack web development, RESTful APIs, and responsive web applications.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative flex flex-col md:flex-row items-center"
                    >
                        <div className="hidden md:flex w-1/2 justify-start pl-8 ml-auto">
                            <div className="glass p-6 rounded-2xl w-full text-left border-l-4 border-rose-500">
                                <h3 className="text-2xl font-bold text-white">B.E. Computer Science Engineering</h3>
                                <h4 className="text-lg text-rose-400 mb-4">Shree Venkateshwara Hi-Tech Engineering College, Erode <span className="text-gray-500 text-sm ml-2">| 2023 – 2027</span></h4>
                                <p className="text-gray-400 text-sm">
                                    <strong>CGPA:</strong> 9.22<br/>
                                    Passionate about software development and continuously improving my technical skills.
                                </p>
                            </div>
                        </div>

                        {/* Center Icon */}
                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center z-10 border-4 border-gray-900 shadow-lg shadow-rose-500/50">
                            <FaGraduationCap className="text-white text-xs" />
                        </div>

                        {/* Mobile view of the same card */}
                        <div className="md:hidden w-full pl-12 pr-4">
                            <div className="glass p-6 rounded-2xl w-full text-left border-l-4 border-rose-500">
                                <h3 className="text-xl font-bold text-white">B.E. Computer Science Engineering</h3>
                                <h4 className="text-md text-rose-400 mb-4">Shree Venkateshwara Hi-Tech Engineering College, Erode <span className="text-gray-500 text-sm block mt-1">2023 – 2027</span></h4>
                                <p className="text-gray-400 text-sm">
                                    <strong>CGPA:</strong> 9.22<br/>
                                    Passionate about software development and continuously improving my technical skills.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* HSC */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative flex flex-col md:flex-row items-center mt-12"
                    >
                        <div className="hidden md:flex w-1/2 justify-end pr-8">
                            <div className="glass p-6 rounded-2xl w-full text-right border-r-4 border-orange-500">
                                <h3 className="text-2xl font-bold text-white">HSC (Class XII)</h3>
                                <h4 className="text-lg text-orange-400 mb-4">Government Higher Secondary School, Gobichettipalayam <span className="text-gray-500 text-sm ml-2">| 2021 – 2023</span></h4>
                                <p className="text-gray-400 text-sm">
                                    <strong>Percentage:</strong> 81%
                                </p>
                            </div>
                        </div>

                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 flex items-center justify-center z-10 border-4 border-gray-900 shadow-lg shadow-orange-500/50">
                            <FaGraduationCap className="text-white text-xs" />
                        </div>

                        <div className="md:hidden w-full pl-12 pr-4">
                            <div className="glass p-6 rounded-2xl w-full text-left border-l-4 border-orange-500">
                                <h3 className="text-xl font-bold text-white">HSC (Class XII)</h3>
                                <h4 className="text-md text-orange-400 mb-4">Government Higher Secondary School, Gobichettipalayam <span className="text-gray-500 text-sm block mt-1">2021 – 2023</span></h4>
                                <p className="text-gray-400 text-sm">
                                    <strong>Percentage:</strong> 81%
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* SSLC */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative flex flex-col md:flex-row items-center mt-12"
                    >
                        <div className="hidden md:flex w-1/2 justify-start pl-8 ml-auto">
                            <div className="glass p-6 rounded-2xl w-full text-left border-l-4 border-rose-500">
                                <h3 className="text-2xl font-bold text-white">SSLC (Class X)</h3>
                                <h4 className="text-lg text-rose-400 mb-4">Government Higher Secondary School, Gobichettipalayam <span className="text-gray-500 text-sm ml-2">| 2020 – 2021</span></h4>
                            </div>
                        </div>

                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center z-10 border-4 border-gray-900 shadow-lg shadow-rose-500/50">
                            <FaGraduationCap className="text-white text-xs" />
                        </div>

                        <div className="md:hidden w-full pl-12 pr-4">
                            <div className="glass p-6 rounded-2xl w-full text-left border-l-4 border-rose-500">
                                <h3 className="text-xl font-bold text-white">SSLC (Class X)</h3>
                                <h4 className="text-md text-rose-400 mb-4">Government Higher Secondary School, Gobichettipalayam <span className="text-gray-500 text-sm block mt-1">2020 – 2021</span></h4>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
