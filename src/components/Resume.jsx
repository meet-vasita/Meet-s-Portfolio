import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Resume() {
  const [activeTab, setActiveTab] = useState('timeline');

  const educationData = [
    {
      id: 1,
      degree: "Bachelors in Engineering in Information Technology",
      institution: "Konkan Gyanpeeth College of Engineering",
      period: "2022 - Present",
      location: "Karjat",
      courses: ["Python","Machine Learning", "Deep Learning", "Data Structures", "AI", "Database Systems"],
      achievements: [
      ]
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Navjeevan Education Society's Polytechin",
      period: "2019 - 2022",
      location: "Bhandup, Mumbai",
      gpa: "80.17",
      courses: ["Html", "CSS", "DBMS", "Oops","Java","Android"],
      achievements: [
        "Graduated with distinction (80.17%)",
        "Completed final year project on Android development",
      ]
    }
  ];

  const experienceData = [
    {
      id: 1,
      title: "Python Developer Intern",
      company: "Moryaa Infusion Pvt Ltd",
      period: "Aug 2021 - Oct 2021",
      location: "Kalyan",
      type: "Internship",
      technologies: ["Python", "Webscraping", "SQL"],
      responsibilities: [
        "Developed web scraping solutions using Python",
        "Worked with SQL databases for data storage and retrieval",
        "Collaborated with senior developers on various projects",
        "Gained hands-on experience in software development lifecycle"
      ]
    }
  ];

  const certificationsData = [
    {
      id: 1,
      name: "Data Science Job Simulation",
      issuer: "Deloitte",
      date: "Feb 2025",
      skills: ["Tableau", "Data Engineering"]
    },
    {
      id: 2,
      name: "Python For Data Science",
      issuer: "IBM",
      date: "May 2025",
      skills: ["Data Analysis", "Data Science"]
    },
    {
      id: 3,
      name: "Data Analysis With Python",
      issuer: "IBM",
      date: "May 2025",
      skills: ["Data Analysis"]
    },
    {
      id: 4,
      name: "Python and Webscraping",
      issuer: "Moryaa Infusion Pvt Ltd",
      date: "Aug 2021",
      skills: ["Python","SQL"]
    },
    {
      id: 5,
      name: "SQL",
      issuer: "IT Vedant",
      date: "Feb 2025",
      skills: ["SQL"]
    }
  ];

  const achievementsData = [
  {
    id: 1,
    title: "Open Source Contributor : python-binance",
    description: "Contributed to the python-binance library, improving the little bit of code.",
    year: 2025,
    icon: "🐍",
    link: "https://github.com/sammchardy/python-binance"
  },
  {
    id: 2,
    title: "Open Source Contributor : pip (Python Package Manager)",
    description: "Made contributions to pip, the official Python package installer, enhanced the documentation.",
    year: 2025,
    icon: "📦",
    link: "https://github.com/pypa/pip"
  },
  {
    id: 3,
    title: "Open Source Contributor : pandas",
    description: "Contributed to the pandas library, enhancing documentation.",
    year: 2025,
    icon: "🐼",
    link: "https://github.com/pandas-dev/pandas"
  }
];


  const tabs = [
    { id: 'timeline', label: 'Timeline', icon: FaCalendarAlt },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
    { id: 'achievements', label: 'Achievements', icon: FaAward }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const renderTimeline = () => (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="space-y-8">
        {/* Combine all timeline items */}
        {[...experienceData, ...educationData]
          .sort((a, b) => new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0]))
          .map((item, index) => (
            <motion.div
              key={`${item.id}-${item.company || item.institution}`}
              variants={itemVariants}
              className="relative flex items-start gap-6"
            >
              <div className="relative z-10">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-50"></div>
              </div>
              
              <motion.div
                className="flex-1 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h4 className="text-xl font-semibold text-white">
                    {item.title || item.degree}
                  </h4>
                  <span className="text-sm text-blue-400 font-medium">{item.period}</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300 mb-3">
                  <FaMapMarkerAlt className="text-purple-400" />
                  <span>{item.company || item.institution}</span>
                  {item.location && (
                    <>
                      <span className="text-gray-600">•</span>
                      <span>{item.location}</span>
                    </>
                  )}
                </div>

                {item.gpa && (
                  <div className="text-sm text-green-400 mb-3">
                    GPA: {item.gpa}
                  </div>
                )}

                {item.responsibilities && (
                  <ul className="text-gray-300 text-sm space-y-1 mb-4">
                    {item.responsibilities.slice(0, 2).map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1.5 text-xs">▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}

                {item.achievements && (
                  <ul className="text-gray-300 text-sm space-y-1 mb-4">
                    {item.achievements.slice(0, 2).map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1.5 text-xs">★</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}

                {(item.technologies || item.courses) && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(item.technologies || item.courses).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="grid gap-6">
      {educationData.map((edu, index) => (
        <motion.div
          key={edu.id}
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <FaGraduationCap className="text-blue-400" />
                <span>{edu.institution}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{edu.period}</span>
                <span>•</span>
                <span>{edu.location}</span>
                {edu.gpa && (
                  <>
                    <span>•</span>
                    <span className="text-green-400">GPA: {edu.gpa}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-yellow-400 mt-1 text-xs">★</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Relevant Courses
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      {experienceData.map((exp, index) => (
        <motion.div
          key={exp.id}
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
              <div className="flex items-center gap-2 text-gray-300 mb-2">
                <FaBriefcase className="text-green-400" />
                <span>{exp.company}</span>
                <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">
                  {exp.type}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1.5 text-sm">▸</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-green-600/20 text-green-300 text-sm rounded-full border border-green-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {certificationsData.map((cert, index) => (
        <motion.div
          key={cert.id}
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
          whileHover={{ scale: 1.05, rotateY: 5 }}
        >
          <div className="text-center mb-4">
            <FaCertificate className="text-4xl text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
            <p className="text-blue-400 font-medium">{cert.issuer}</p>
          </div>

          <div className="text-center mb-4">
            <span className="text-sm text-gray-400">Issued: {cert.date}</span>
            <br />
            <span className="text-xs text-gray-500">ID: {cert.credentialId}</span>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2 text-center">
              Skills Validated
            </h4>
            <div className="flex flex-wrap gap-2 justify-center">
              {cert.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderAchievements = () => (
    <div className="space-y-6">
      {achievementsData.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          variants={itemVariants}
          className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <FaAward className="text-white text-xl" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                <span className="text-sm text-yellow-400 font-medium">{achievement.date}</span>
              </div>
              
              <p className="text-blue-400 font-medium mb-2">{achievement.event}</p>
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'timeline':
        return renderTimeline();
      case 'education':
        return renderEducation();
      case 'experience':
        return renderExperience();
      case 'certifications':
        return renderCertifications();
      case 'achievements':
        return renderAchievements();
      default:
        return renderTimeline();
    }
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore my educational background, work experience, certifications, and achievements
          </p>
          
          {/* Download Button */}
          <motion.a
            href="https://drive.google.com/file/d/1bt1uhKgaGpYF2sVy4RarR5Uqy_01y8dc/view?usp=sharing"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon />
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[500px]"
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;