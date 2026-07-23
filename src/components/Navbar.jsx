import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Certifications', id: 'certifications' },
        { name: 'Contact', id: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold text-white cursor-pointer tracking-wider"
                    onClick={() => scrollToSection('home')}
                >
                    <span className="text-gradient">Rachel</span>Rajkumar
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link, index) => (
                        <motion.button
                            key={link.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => scrollToSection(link.id)}
                            className="text-gray-300 hover:text-white hover:text-gradient transition-colors cursor-pointer text-sm uppercase tracking-widest font-medium"
                        >
                            {link.name}
                        </motion.button>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none z-50 relative">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass absolute top-full left-0 w-full py-4 flex flex-col items-center shadow-lg border-t border-gray-700/50"
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="w-full py-4 text-gray-300 hover:text-white hover:bg-white/10 transition-colors uppercase tracking-widest text-sm"
                        >
                            {link.name}
                        </button>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
