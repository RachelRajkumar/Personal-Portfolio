import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Github from './components/Github';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white min-h-screen font-sans selection:bg-orange-500/30 selection:text-orange-200 relative">
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Github />
        <Experience />
        <Certificates />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
