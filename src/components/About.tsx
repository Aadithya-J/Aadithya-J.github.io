import { motion, useScroll, useTransform } from "framer-motion";
import { Parallax } from 'react-scroll-parallax';
import Skills from './Skills';

const experiences = [
  {
    period: "2021 - Present",
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description: "Leading the development of interactive web applications using React, TypeScript, and Three.js. Implemented advanced animations and optimized performance across all platforms."
  },
  {
    period: "2019 - 2021",
    role: "Full Stack Developer",
    company: "Digital Solutions Lab",
    description: "Built scalable web services using Node.js and contributed to frontend development with React. Worked on real-time data visualization and collaborative editing features."
  },
  {
    period: "2017 - 2019",
    role: "Junior Developer",
    company: "Creative Tech Studios",
    description: "Collaborated on various web projects and gained experience in modern JavaScript frameworks. Focused on responsive design and cross-browser compatibility."
  }
];

const education = [
  {
    period: "2013 - 2017",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    description: "Specialized in web technologies and interactive media. Graduated with honors."
  }
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0.05, 0.2], [50, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute -left-32 top-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          About Me
        </motion.h2>
        
        {/* Bio Section - Full Width */}
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">My Journey</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I'm a <span className="text-blue-400 font-medium">passionate developer</span> and <span className="text-purple-400 font-medium">creative technologist</span> with a focus on building immersive digital experiences that combine aesthetic design with powerful functionality.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              With over <span className="text-blue-400 font-medium">5 years of experience</span> in web development, I've cultivated a skill set that spans the entire development stack, from crafting responsive UIs to architecting robust backends. I'm particularly enthusiastic about animation, 3D graphics, and creating interfaces that delight users.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              My approach combines <span className="text-purple-400 font-medium">technical expertise</span> with an eye for <span className="text-blue-400 font-medium">design and usability</span>. I believe the best digital products are those that not only function flawlessly but also engage users on an emotional level.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Skills Section - Full Width */}
        <Skills />
        
        {/* Experience and Education - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
          {/* Left Column - Experience */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-purple-400 mb-6"
            >
              Experience
            </motion.h3>
            <div className="relative border-l-2 border-gray-700 pl-8 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-gray-900"></div>
                  <div className="text-gray-400 text-sm mb-1">{exp.period}</div>
                  <h4 className="text-xl font-medium text-white">{exp.role}</h4>
                  <div className="text-blue-400 mb-2">{exp.company}</div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Education */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-blue-400 mb-6"
            >
              Education
            </motion.h3>
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border-l-4 border-blue-500"
              >
                <div className="text-gray-400 text-sm mb-1">{edu.period}</div>
                <h4 className="text-xl font-medium text-white">{edu.degree}</h4>
                <div className="text-blue-400 mb-2">{edu.institution}</div>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;