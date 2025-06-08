import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImg from '../assets/Profile1.jpeg';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = ['Python', 'Machine Learning', 'Data Analysis', 'Deep Learning', 'Statistics'];

  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80 },
            color: { value: ["#3b82f6", "#10b981", "#8b5cf6"] },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 2, random: true },
            move: { 
              enable: true, 
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" }
            },
          },
          interactivity: {
            events: { 
              onHover: { enable: true, mode: 'attract' },
              onClick: { enable: true, mode: 'push' }
            },
            modes: {
              attract: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 }
            }
          },
        }}
        className="absolute inset-0"
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/30 rotate-45"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
          animate={{ y: [-20, 20], opacity: [0.3, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, yoyo: true }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-12 h-12 border border-green-400/40 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Greeting */}
              <motion.div variants={itemVariants} className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-blue-300">Available for opportunities</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                    Hi, Iam Meet
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Vasita
                  </span>
                </h1>
                
                <div className="flex items-center gap-4">
                  <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"></div>
                  <h2 className="text-xl lg:text-2xl text-gray-300 font-light tracking-wide">
                    Python Developer & Data Scientist
                  </h2>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed max-w-lg"
              >
                Transforming raw data into actionable insights through advanced analytics, 
                machine learning, and innovative problem-solving approaches.
              </motion.p>

              {/* Skills Tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/30 rounded-full text-sm text-gray-300 hover:border-blue-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="#projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: "100%" }}
                    animate={{ x: isHovered ? "0%" : "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#contact"
                  className="px-8 py-4 border-2 border-gray-600 text-white rounded-full font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full transform scale-150"></div>
              
              {/* Main Profile Container */}
              <div className="relative">
                {/* Rotating Border */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full bg-black rounded-full"></div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [-10, 10] }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, yoyo: true },
                    scale: { duration: 0.3 }
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Meet - Data Scientist"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  🐍
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{ 
                    y: [-5, 5],
                    rotate: [0, -360]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, yoyo: true },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                >
                  📊
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{ 
                    x: [-3, 3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    x: { duration: 2, repeat: Infinity, yoyo: true },
                    scale: { duration: 4, repeat: Infinity }
                  }}
                >
                  🧠
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">Scroll Down</p>
      </motion.div>
    </section>
  );
}

export default Hero;