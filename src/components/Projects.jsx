import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaCodeBranch } from 'react-icons/fa';
import { fetchGithubRepos } from '../utils/githubAPI';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [githubRepos, setGithubRepos] = useState([]);
    const [loadingRepos, setLoadingRepos] = useState(true);

    useEffect(() => {
        const getRepos = async () => {
            const repos = await fetchGithubRepos();
            setGithubRepos(repos || []);
            setLoadingRepos(false);
        };
        getRepos();
    }, []);

    const highlightedProjects = [
        {
            name: "QueueFlow360",
            description: "A highly scalable Smart Queue, Appointment and Customer Service Management Platform designed to streamline customer flow and eliminate wait times in high-traffic environments.",
            technologies: ["Java", "Spring Boot", "React", "REST API", "JWT"],
            github: "https://github.com/RachelRajkumar/QueueFlow360",
            live: "https://github.com/RachelRajkumar/QueueFlow360",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            color: "from-orange-500 to-rose-500"
        },
        {
            name: "Smart Grocery Planner",
            description: "A next-generation application featuring seamless grocery planning, real-time management, and a clean user interface.",
            technologies: ["React", "JavaScript", "Tailwind CSS"],
            github: "https://github.com/RachelRajkumar/Smart-Grocery-Planner",
            live: "https://smart-grocery-planner-rho.vercel.app",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            color: "from-rose-500 to-purple-500"
        },
        {
            name: "E-Commerce Web Application",
            description: "A feature-rich e-commerce web application featuring dynamic product management and seamless user interaction workflows. Implemented backend server logic using Django and configured SQLite.",
            technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Django", "SQLite"],
            github: "https://github.com/RachelRajkumar", 
            live: "#", 
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            color: "from-blue-500 to-cyan-500"
        },
        {
            name: "Java Shopping Cart Application",
            description: "An object-oriented Java shopping cart application that handles real-time product selection, transaction operations, and robust cart state management.",
            technologies: ["Java"],
            github: "https://github.com/RachelRajkumar", 
            live: "#", 
            image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
            color: "from-emerald-500 to-teal-500"
        }
    ];

    // Dynamic github repos fetched on mount

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-40 -left-20 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-40 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-red-500 mb-6 tracking-tight">
                        Featured Creations
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of my most ambitious projects, combining beautiful interfaces with robust backend architectures.
                    </p>
                </motion.div>

                {/* Alternating Highlighted Projects */}
                <div className="space-y-32 mb-32">
                    {highlightedProjects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                                onMouseEnter={() => setHoveredProject(idx)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Image Container */}
                                <div className="w-full lg:w-3/5 relative group perspective">
                                    <motion.div 
                                        animate={{
                                            rotateY: hoveredProject === idx ? (isEven ? 5 : -5) : 0,
                                            rotateX: hoveredProject === idx ? 5 : 0,
                                            scale: hoveredProject === idx ? 1.02 : 1
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className="relative rounded-2xl overflow-hidden shadow-2xl z-10 transform-style-3d border border-white/10 bg-gray-900"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 z-10"></div>
                                        <img 
                                            src={project.image} 
                                            alt={project.name} 
                                            className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        
                                        {/* Floating Action Buttons over Image */}
                                        <div className="absolute bottom-6 right-6 z-20 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                            <a href={project.github} className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                                <FaGithub size={24} />
                                            </a>
                                            <a href={project.live} className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}>
                                                <FaExternalLinkAlt size={20} />
                                            </a>
                                        </div>
                                    </motion.div>
                                    
                                    {/* Glowing Backdrop */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 blur-2xl rounded-3xl -z-10 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                </div>

                                {/* Content Container */}
                                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                                    <motion.h4 
                                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={`text-sm font-bold tracking-widest uppercase mb-2 bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}
                                    >
                                        Featured Project
                                    </motion.h4>
                                    <motion.h3 
                                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                                    >
                                        {project.name}
                                    </motion.h3>
                                    
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="glass p-6 rounded-xl mb-8 relative z-20 shadow-xl border border-white/10 hover:border-white/20 transition-colors"
                                    >
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {project.description}
                                        </p>
                                    </motion.div>

                                    <motion.ul 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={containerVariants}
                                        className={`flex flex-wrap gap-3 ${isEven ? 'justify-start' : 'justify-start lg:justify-end'} mb-8`}
                                    >
                                        {project.technologies.map((tech, techIdx) => (
                                            <motion.li 
                                                key={techIdx} 
                                                variants={itemVariants}
                                                className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 text-sm font-medium hover:text-white hover:border-gray-500 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Animated GitHub Repositories Grid */}
                {loadingRepos ? (
                    <div className="flex justify-center items-center mt-32 h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                    </div>
                ) : githubRepos.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-32 border-t border-gray-800 pt-20"
                    >
                        <div className="text-center mb-16">
                            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                                <FaCodeBranch className="text-orange-500" /> All Github Repositories
                            </h3>
                            <p className="text-gray-400">Complete collection of my projects</p>
                        </div>
                        
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {githubRepos.map((repo) => (
                                <motion.div 
                                    variants={itemVariants}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    key={repo.id}
                                    className="glass p-6 rounded-2xl border border-white/5 hover:border-orange-500/50 block group relative overflow-hidden h-full flex flex-col"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-rose-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                    
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                            <FaFolder size={24} />
                                        </div>
                                        <div className="flex gap-2">
                                            <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2" title="Repository">
                                                <FaGithub size={20} />
                                            </a>
                                            {repo.homepage && (
                                                <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors p-2" title="Live Demo">
                                                    <FaExternalLinkAlt size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-gray-200 group-hover:text-orange-400 transition-colors mb-3">
                                        {repo.name}
                                    </h4>
                                    
                                    <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                        {repo.description || "A repository showcasing advanced concepts and clean code architecture."}
                                    </p>
                                    
                                    <div className="flex flex-col gap-3 mt-auto">
                                        <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                                            <span className="flex items-center gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                                                {repo.language || 'Multiple'}
                                            </span>
                                            <span className="opacity-75">
                                                {new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                        </div>
                                        
                                        <div className="flex gap-2 mt-2">
                                            <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded bg-gray-800 hover:bg-gray-700 text-white text-xs font-medium transition-colors border border-gray-700">
                                                Repository
                                            </a>
                                            {repo.homepage && (
                                                <a href={repo.homepage} target="_blank" rel="noreferrer" className="flex-1 text-center py-2 rounded bg-orange-600/20 hover:bg-orange-600/40 text-orange-400 hover:text-orange-300 text-xs font-medium transition-colors border border-orange-500/30">
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
