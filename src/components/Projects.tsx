import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';

const projects = [
  {
    title: 'Chatly - Enterprise Messaging Platform',
    description:
      'A full-stack messaging platform with real-time chat, group management, and user presence tracking.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'WebSocket'],
    image: '/chatly.png',
    link: 'https://github.com/Aadithya-J/chatly',
  },
  {
    title: 'AI-Powered Career Development Platform',
    description:
      'A career guidance platform using AI to generate personalized learning pathways and resume analysis.',
    technologies: ['React.js', 'Node.js', 'Flask', 'Firebase', 'Gemini API'],
    image: '/yatharth.png',
    link: 'https://github.com/Aadithya-J/sih24',
  },
  {
    title: 'Collaborative Travel Planning Platform',
    description:
      'An iOS app for group travel planning with real-time collaboration and authentication.',
    technologies: ['SwiftUI', 'Firebase Authentication', 'Cloud Firestore', 'iOS SDK'],
    image: '/cout.png',
    link: 'https://github.com/Aadithya-J/Cout1',
  },
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);

  const getParallaxProps = (index: number) => {
    const isEven = index % 2 === 0;
    const position = index % 3;

    return {
      speed: position === 0 ? 5 : position === 1 ? 10 : 3,
      translateY: isEven ? ([-5, 5] as [number, number]) : ([5, -5] as [number, number]),
      scale: position === 1 ? ([0.97, 1.03] as [number, number]) : undefined,
      rotate: position === 2 ? ([0, 0.5] as [number, number]) : undefined,
    };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="projects" className="px-4 py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_80%)]"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ opacity, y }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => {
            const parallaxProps = getParallaxProps(index);

            return (
              <Parallax key={index} {...parallaxProps}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    y: -15,
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    transition: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    },
                  }}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 h-full transform transition-all duration-500"
                >
                  <div className="h-52 overflow-hidden relative">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="w-full h-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded-md border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              </Parallax>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
