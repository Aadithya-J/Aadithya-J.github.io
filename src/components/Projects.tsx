import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from 'react-scroll-parallax';
import { useState } from "react";

const projects = [
  {
    title: "Chatly - Enterprise Messaging Platform",
    category: "Web Application",
    description: "A full-stack messaging platform with real-time chat, group management, and user presence tracking.",
    technologies: ["Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "WebSocket"],
    image: "/chatly.png", // Assuming the image is stored as public/chatly.jpg
    link: "https://github.com/Aadithya-J/chatly"
  },
  {
    title: "AI-Powered Career Development Platform",
    category: "AI Application",
    description: "A career guidance platform using AI to generate personalized learning pathways and resume analysis.",
    technologies: ["React.js", "Node.js", "Flask", "Firebase", "Gemini API"],
    image: "/yatharth.png", // Assuming the image is stored as public/yatharth.jpg
    link: "https://github.com/Aadithya-J/sih24"
  },
  {
    title: "Collaborative Travel Planning Platform",
    category: "Mobile Application",
    description: "An iOS app for group travel planning with real-time collaboration and authentication.",
    technologies: ["SwiftUI", "Firebase Authentication", "Cloud Firestore", "iOS SDK"],
    image: "/cout.png", // Assuming the image is stored as public/cout.jpg
    link: "https://github.com/Aadithya-J/Cout1"
  },
];


const categories = ["All", "Web Development", "Web Application", "3D / VR", "AI / Machine Learning", "Mobile Development", "Blockchain"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="px-4 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(91,33,182,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        >
          My Projects
        </motion.h2>
        
        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          style={{ opacity, y }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <Parallax key={index} speed={index % 2 === 0 ? 5 : -5}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            </Parallax>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;