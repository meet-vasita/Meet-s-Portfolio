import { motion } from 'framer-motion';
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <div className="min-h-screen dark bg-gray-900 transition-colors duration-300">
      {/* Modern Black Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-black border border-gray-700/50 shadow-2xl"
      >
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Futuristic Logo */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                Meet Vasita
              </h1>
            </motion.div>

            {/* Sleek Navigation Pills */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  
                  {/* Content */}
                  <span className="relative flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>

                  {/* Active indicator dot */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navDot"
                      className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Futuristic Mobile Menu */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-5 h-5 flex flex-col justify-center items-center space-y-1">
                <motion.div 
                  className="w-4 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  animate={{ scaleX: 1 }}
                  whileHover={{ scaleX: 0.7 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="w-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: -180 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-24" // Increased padding for the floating navbar
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;