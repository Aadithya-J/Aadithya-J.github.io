import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiNodedotjs, SiNextdotjs, 
         SiThreedotjs, SiGraphql, SiTailwindcss, SiJavascript, 
         SiMongodb, SiGit, SiPython, SiDocker } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "text-[#61DAFB]"
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]"
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-[#339933]"
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white"
  },
  {
    name: "Three.js",
    icon: SiThreedotjs,
    color: "text-white"
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-[#E10098]"
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "text-[#06B6D4]"
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#F7DF1E]"
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-[#47A248]"
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-[#F05032]"
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-[#3776AB]"
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-[#2496ED]"
  }
];

const Skills = () => {
  return (
    <section className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Technologies I Work With
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="flex flex-col items-center group"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
                            bg-gray-800/50 rounded-xl backdrop-blur-sm
                            shadow-lg group-hover:shadow-xl
                            group-hover:shadow-blue-500/20
                            transition-all duration-300 ease-out">
                <skill.icon className={`w-8 h-8 md:w-10 md:h-10 ${skill.color} 
                                    transition-transform duration-300 ease-out
                                    group-hover:scale-110`} />
                
                {/* Glow effect */}
                <div className={`absolute inset-0 -z-10 rounded-xl opacity-0
                                group-hover:opacity-20 transition-opacity duration-300
                                blur-xl bg-gradient-to-r from-blue-500 to-purple-500`}>
                </div>
              </div>
              
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="mt-4 text-sm text-gray-400 group-hover:text-gray-300
                          font-medium tracking-wide"
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;