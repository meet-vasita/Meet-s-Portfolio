import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  { 
    name: 'Python', 
    icon: '🐍',
    category: 'Programming',
    color: 'from-blue-500 to-blue-600',
  },
  { 
    name: 'Pandas', 
    icon: '🐼',
    category: 'Data Analysis',
    color: 'from-green-500 to-green-600',
  },
  { 
    name: 'NumPy', 
    icon: '🔢',
    category: 'Scientific Computing',
    color: 'from-purple-500 to-purple-600',
  },
  { 
    name: 'Matplotlib', 
    icon: '📊',
    category: 'Visualization',
    color: 'from-orange-500 to-orange-600',
  },
  { 
    name: 'scikit-learn', 
    icon: '🤖',
    category: 'Machine Learning',
    color: 'from-red-500 to-red-600',
  },
  { 
    name: 'Git', 
    icon: '🌿',
    category: 'Version Control',
    color: 'from-gray-500 to-gray-600',
  },
  { 
    name: 'Jupyter', 
    icon: '📓',
    category: 'Development',
    color: 'from-yellow-500 to-yellow-600',
  },
  { 
    name: 'SQL', 
    icon: '🗄️',
    category: 'Database',
    color: 'from-indigo-500 to-indigo-600',
  },
];

const categories = ['All', 'Programming', 'Data Analysis', 'Machine Learning', 'Development'];

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16"></div>
            <span className="text-purple-400 text-sm uppercase tracking-wider font-medium">Technical Skills</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-16"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
              My Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for data science and machine learning projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-purple-500 text-white'
                  : 'border-gray-600 text-gray-400 hover:border-purple-500 hover:text-purple-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="relative group"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ y: -8 }}
            >
              <div className="relative p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-gray-600/70 transition-all duration-300 h-full">
                {/* Skill Level Background */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div 
                    className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${skill.color} opacity-10 transition-all duration-500`}
                    style={{ height: `${skill.level}%` }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>

                  {/* Skill name */}
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">
                    {skill.name}
                  </h3>

                  {/* Category */}
                  <div className="text-sm text-gray-400 mb-4 uppercase tracking-wider">
                    {skill.category}
                  </div>

                  {/* Description (shown on hover) */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                      height: hoveredSkill === skill.name ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-gray-300 overflow-hidden"
                  >
                    {skill.description}
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;