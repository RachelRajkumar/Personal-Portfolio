import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-12 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/RachelRajkumar" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all transform hover:scale-110 shadow-lg">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/rachel-r-176480343/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110 shadow-lg">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="mailto:rachelprincy55@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-rose-600 hover:text-white transition-all transform hover:scale-110 shadow-lg">
                        <FaEnvelope size={20} />
                    </a>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">Rachel</h2>
                <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
                    Full Stack Developer & Computer Science Student dedicated to building beautiful, responsive, and scalable applications.
                </p>
                
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Rachel. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center gap-1">
                        Designed & Built with <FaHeart className="text-red-500" /> by Rachel
                    </p>
                </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-3xl h-32 bg-gradient-to-r from-orange-500/20 to-rose-500/20 blur-3xl rounded-full -z-10"></div>
        </footer>
    );
};

export default Footer;
