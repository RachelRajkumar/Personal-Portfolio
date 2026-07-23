import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaMedal, FaTimes } from 'react-icons/fa';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const PROFILE_LINK = "https://www.linkedin.com/in/rachel-r-176480343/";

    const linkedInCertificates = [
        { id: 1, title: "Paper War Participation", issuer: "Government College of Engineering", badge: "GALAXY'24", score: "100%", image: "/GEC.jpg", link: "https://www.linkedin.com/posts/rachel-rajkumar-176480343_paperpresentation-governmentcollegeofengineering-activity-7412157009090936833-WhLr", downloadUrl: "/GEC.jpg" },
        { id: 2, title: "Cadibal Certificate", issuer: "Cadibal", badge: "Completed", score: "100%", image: "/Cadibal.jpg", link: PROFILE_LINK, downloadUrl: "/Cadibal.jpg" },
        { id: 3, title: "GameTech", issuer: "GameTech", badge: "Completed", score: "100%", image: "/GameTech.jpg", link: PROFILE_LINK, downloadUrl: "/GameTech.jpg" },
        { id: 4, title: "Java Certification", issuer: "Java", badge: "Completed", score: "100%", image: "/Java.jpg", link: PROFILE_LINK, downloadUrl: "/Java.jpg" },
        { id: 5, title: "Kongu Engineering College", issuer: "Kongu Engineering College", badge: "Completed", score: "100%", image: "/Kongu.jpg", link: PROFILE_LINK, downloadUrl: "/Kongu.jpg" },
        { id: 6, title: "Nxt Wave", issuer: "Nxt Wave", badge: "Completed", score: "100%", image: "/Nxt Wave.jpg", link: PROFILE_LINK, downloadUrl: "/Nxt Wave.jpg" },
        { id: 7, title: "Rathinam College", issuer: "Rathinam College", badge: "Completed", score: "100%", image: "/Rathinam.jpg", link: PROFILE_LINK, downloadUrl: "/Rathinam.jpg" },
        { id: 8, title: "Sengunthar College", issuer: "Sengunthar College", badge: "Completed", score: "100%", image: "/Sengunthar.jpg", link: PROFILE_LINK, downloadUrl: "/Sengunthar.jpg" },
        { id: 9, title: "Vellammal College", issuer: "Vellammal College", badge: "Completed", score: "100%", image: "/Vellammal.jpg", link: PROFILE_LINK, downloadUrl: "/Vellammal.jpg" },
        { id: 10, title: "Nandha College", issuer: "Nandha College", badge: "Completed", score: "100%", image: "/nandha.jpg", link: PROFILE_LINK, downloadUrl: "/nandha.jpg" },
        { id: 11, title: "NPTEL Certification", issuer: "NPTEL", badge: "Completed", score: "100%", image: "/nptel.jpg", link: PROFILE_LINK, downloadUrl: "/nptel.jpg" },
        { id: 12, title: "Selvam College", issuer: "Selvam College", badge: "Completed", score: "100%", image: "/selvam.jpg", link: PROFILE_LINK, downloadUrl: "/selvam.jpg" },
        { id: 13, title: "Thiranex", issuer: "Thiranex", badge: "Completed", score: "100%", image: "/thiranex.jpg", link: PROFILE_LINK, downloadUrl: "/thiranex.jpg" }
    ];

    return (
        <section id="certifications" className="py-20 relative bg-gray-900/50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">My <span className="text-gradient">Certifications</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Click on any certificate to view details.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {linkedInCertificates.map((cert, index) => (
                        <motion.div 
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedCert(cert)}
                            className="glass p-6 rounded-2xl w-full border border-white/5 hover:border-orange-500/50 transition-colors relative overflow-hidden group cursor-pointer flex flex-col h-full"
                        >
                            {/* Background glowing effect */}
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-500/40 transition-colors"></div>
                            
                            <div className="flex items-start gap-4 relative z-10 mb-4">
                                <div className="bg-gradient-to-br from-orange-500 to-rose-500 p-3 rounded-xl shadow-lg">
                                    <FaCertificate className="text-white text-2xl" />
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="text-xl font-bold text-white pr-2">{cert.title}</h3>
                                    </div>
                                    <h4 className="text-sm text-orange-400 mb-2">{cert.issuer}</h4>
                                </div>
                            </div>
                            
                            <div className="mt-auto bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-1 text-yellow-400 text-xs font-semibold">
                                        <FaMedal /> {cert.badge}
                                    </div>
                                    <span className="text-white font-bold text-sm">{cert.score}</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-orange-500 to-rose-500 h-2 rounded-full" style={{ width: cert.score }}></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for viewing certificate */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative"
                        >
                            <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900/90 z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                                    <p className="text-sm text-orange-400">{selectedCert.issuer}</p>
                                </div>
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaTimes size={20} />
                                </button>
                            </div>
                            <div className="p-4 overflow-y-auto bg-gray-900 flex justify-center items-center h-full">
                                <img 
                                    src={selectedCert.image} 
                                    alt={selectedCert.title} 
                                    className="max-w-full rounded-lg shadow-2xl object-contain max-h-[70vh]"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
