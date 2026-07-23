import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchGithubProfile } from '../utils/githubAPI';
import { FaCodeBranch, FaStar, FaUsers, FaBook, FaGithub } from 'react-icons/fa';

const Github = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfile = async () => {
            const data = await fetchGithubProfile();
            setProfile(data);
            setLoading(false);
        };
        getProfile();
    }, []);

    return (
        <section className="py-20 relative bg-gray-900/50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">GitHub <span className="text-gradient">Showcase</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full"></div>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                    </div>
                ) : profile ? (
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl max-w-sm w-full border border-white/5 flex flex-col items-center text-center"
                        >
                            <img 
                                src={profile.avatar_url} 
                                alt={profile.login} 
                                className="w-32 h-32 rounded-full border-4 border-orange-500 mb-4 p-1"
                            />
                            <h3 className="text-2xl font-bold text-white mb-1">{profile.name || profile.login}</h3>
                            <a href={profile.html_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-orange-400 mb-4 flex items-center gap-2">
                                <FaGithub /> @{profile.login}
                            </a>
                            <p className="text-sm text-gray-400 mb-6">{profile.bio || "Full Stack Developer & Computer Science Student"}</p>
                            
                            <a href={profile.html_url} target="_blank" rel="noreferrer" className="w-full py-2 bg-gradient-to-r from-orange-600 to-rose-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                                View Full Profile
                            </a>
                        </motion.div>
                    </div>
                ) : (
                    <div className="text-center text-gray-400">Failed to load GitHub profile. Please check the username configuration.</div>
                )}
            </div>
        </section>
    );
};

export default Github;
