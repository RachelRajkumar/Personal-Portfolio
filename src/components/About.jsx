import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
    const cards = [
        {
            icon: <FaGraduationCap className="text-4xl text-orange-400" />,
            title: "CSE Student",
            desc: "Pursuing Computer Science Engineering with a strong foundation in algorithms and software engineering principles."
        },
        {
            icon: <FaCode className="text-4xl text-rose-400" />,
            title: "Full Stack Dev",
            desc: "Passionate about building end-to-end web applications using modern frameworks and scalable architectures."
        },
        {
            icon: <FaLightbulb className="text-4xl text-yellow-400" />,
            title: "Problem Solver",
            desc: "Love tackling complex logical problems, optimizing code, and finding efficient solutions to real-world issues."
        },
        {
            icon: <FaRocket className="text-4xl text-rose-400" />,
            title: "Continuous Learner",
            desc: "Always exploring new technologies, attending hackathons, and keeping up with the latest industry trends."
        }
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About <span className="text-gradient">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white">My Journey</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            As a Computer Science Engineering student, I am passionate about software development and continuously expanding my knowledge of modern technologies. I enjoy building responsive user interfaces, developing robust backend systems, and solving real-world problems through code.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-lg mt-4">
                            My goal is to create scalable, efficient, and user-friendly applications while continuously improving my technical and problem-solving skills. I am actively seeking opportunities where I can contribute to impactful projects, learn from experienced professionals, and grow as a software developer.
                        </p>
                        <div className="glass p-6 rounded-2xl border-l-4 border-orange-500 mt-8">
                            <p className="text-gray-300 italic text-lg">
                                "The best way to predict the future is to invent it."
                            </p>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-orange-500/30 group"
                            >
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {card.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-2">{card.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
