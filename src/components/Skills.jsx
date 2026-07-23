import { motion } from 'framer-motion';
import { 
    FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, 
    FaBootstrap, FaGithub, FaGitAlt, FaCode, FaPalette 
} from 'react-icons/fa';
import { 
    SiJavascript, SiTailwindcss, SiSpringboot, SiFastapi, 
    SiMysql, SiDjango, SiIntellijidea 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
                { name: "Python", icon: <FaPython className="text-[#3776ab]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> }
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", icon: <FaReact className="text-[#61dafb]" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38b2ac]" /> },
                { name: "HTML5", icon: <FaHtml5 className="text-[#e34f26]" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-[#1572b6]" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952b3]" /> }
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "Spring Boot", icon: <SiSpringboot className="text-[#6db33f]" /> },
                { name: "Django", icon: <SiDjango className="text-[#44b78b]" /> },
                { name: "REST API", icon: <FaCode className="text-gray-400" /> },
                { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479a1]" /> }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-[#f05032]" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "VS Code", icon: <VscVscode className="text-[#007acc]" /> },
                { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-white" /> },
                { name: "Canva", icon: <FaPalette className="text-[#00c4cc]" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 relative bg-gray-900/50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical <span className="text-gradient">Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill, skillIdx) => (
                                    <div 
                                        key={skillIdx}
                                        className="flex items-center gap-2 bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700 hover:border-orange-500 hover:bg-gray-700 transition-all cursor-pointer group"
                                    >
                                        <div className="text-2xl group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
