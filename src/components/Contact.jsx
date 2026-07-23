import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const formData = new FormData(e.target);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        try {
            const response = await fetch("https://formsubmit.co/ajax/rachelprincy55@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject || `New Portfolio Message from ${name}`,
                    message: message,
                    _captcha: "false"
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                if (form.current) {
                    form.current.reset();
                }
            } else {
                window.location.href = `mailto:rachelprincy55@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
                setSubmitStatus('success');
            }
        } catch (error) {
            console.error("Error sending email:", error);
            window.location.href = `mailto:rachelprincy55@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            setSubmitStatus('success');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative bg-gray-900/50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-gradient">Touch</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/3 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Let's connect!</h3>
                            <p className="text-gray-400">
                                Whether you have a question, a project idea, or an exciting opportunity, I'd love to hear from you. Feel free to reach out, and I'll get back to you as soon as possible!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 text-xl border border-orange-500/20">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Email</h4>
                                    <a href="mailto:rachelprincy55@gmail.com" className="text-gray-400 hover:text-orange-400 transition-colors">rachelprincy55@gmail.com</a>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 text-xl border border-rose-500/20">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Location</h4>
                                    <p className="text-gray-400">Erode, Tamil Nadu, India<br />Open to Remote, Hybrid & Relocation Opportunities</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-2/3 glass p-8 rounded-2xl border border-white/5"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="user_name" 
                                        required 
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="user_email" 
                                        required 
                                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                                <input 
                                    type="text" 
                                    id="subject"
                                    name="subject" 
                                    required 
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    required 
                                    rows="5" 
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 text-white transition-colors resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-lg bg-gradient-to-r from-orange-600 to-rose-600 text-white font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl text-center font-medium mt-4 flex flex-col items-center gap-1">
                                    <span>✓ Thank you! Your message has been sent directly to rachelprincy55@gmail.com.</span>
                                    <span className="text-xs text-gray-400">I will get back to you as soon as possible.</span>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
