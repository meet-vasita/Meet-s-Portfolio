import { motion } from 'framer-motion';

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <div className="inline-flex items-center gap-4 mb-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-16"></div>
                            <span className="text-blue-400 text-sm uppercase tracking-wider font-medium">About Me</span>
                            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-16"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
                            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                                My Journey
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                            Passionate about transforming data into meaningful insights
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Story Section */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl">
                                {/* Decorative corner */}
                                <div className="absolute top-0 left-0 w-20 h-20">
                                    <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-blue-500/50 rounded-tl-lg"></div>
                                </div>

                                <div className="space-y-4 text-gray-300 leading-relaxed">
                                    <p className="text-lg">
                                        I'm an <span className="text-blue-400 font-semibold">Information Technology </span>  student with a strong interest in Python, data science, and machine learning. During my B.E., I developed a passion for using data to solve real-world problems and find useful insights.
                                    </p>

                                    <p>
                                        Currently pursuing my degree at <span className="text-purple-400 font-semibold">Konkan Gyanpeeth College of Engineering</span>,
                                        I've immersed myself in the world of data analysis, working with powerful libraries like
                                        <span className="text-green-400 font-medium"> Pandas, NumPy, and scikit-learn</span> to build
                                        solutions that make a real impact.
                                    </p>

                                    <p>
                                        In my free time, I like exploring new tools, working on personal ML projects, and connecting with others who share the same interest in data and technology.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual Elements */}
                        <motion.div variants={itemVariants} className="relative">
                            {/* Floating Cards */}
                            <div className="relative h-96">
                                <motion.div
                                    className="absolute top-0 right-0 w-48 h-32 bg-gradient-to-r from-blue-600/20 to-blue-700/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4"
                                    animate={{
                                        y: [-10, 10],
                                        rotate: [2, -2, 2]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        yoyo: true
                                    }}
                                >
                                    <div className="text-blue-400 text-sm font-medium">Current Focus</div>
                                    <div className="text-white font-semibold mt-1">Machine Learning</div>
                                    <div className="text-gray-400 text-xs mt-2">Deep Learning & Neural Networks</div>
                                </motion.div>

                                <motion.div
                                    className="absolute top-20 left-0 w-44 h-28 bg-gradient-to-r from-purple-600/20 to-purple-700/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4"
                                    animate={{
                                        y: [10, -10],
                                        rotate: [-1, 1, -1]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        yoyo: true,
                                        delay: 0.5
                                    }}
                                >
                                    <div className="text-purple-400 text-sm font-medium">Completed</div>
                                    <div className="text-white font-semibold mt-1">Data Analysis</div>
                                    <div className="text-gray-400 text-xs mt-2">Python • Pandas • NumPy</div>
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-0 right-8 w-40 h-36 bg-gradient-to-r from-green-600/20 to-green-700/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4"
                                    animate={{
                                        y: [5, -15],
                                        rotate: [1, -1, 1]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        yoyo: true,
                                        delay: 1
                                    }}
                                >
                                    <div className="text-indigo-400 text-sm font-medium">Focus</div>
                                    <div className="text-white font-semibold mt-1">Learning & Growth</div>
                                    <div className="text-gray-400 text-xs mt-2">Always exploring new technologies and ideas</div>

                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;