import { motion, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Skills from './Skills';
const experiences: any = [];
// const experiences = [
//   {
//     period: "2021 - Present",
//     role: "Senior Frontend Developer",
//     company: "Tech Innovations Inc.",
//     description: "Leading the development of interactive web applications using React, TypeScript, and Three.js. Implemented advanced animations and optimized performance across all platforms."
//   },
//   {
//     period: "2019 - 2021",
//     role: "Full Stack Developer",
//     company: "Digital Solutions Lab",
//     description: "Built scalable web services using Node.js and contributed to frontend development with React. Worked on real-time data visualization and collaborative editing features."
//   },
//   {
//     period: "2017 - 2019",
//     role: "Junior Developer",
//     company: "Creative Tech Studios",
//     description: "Collaborated on various web projects and gained experience in modern JavaScript frameworks. Focused on responsive design and cross-browser compatibility."
//   }
// ];

const education = [
  {
    period: '2023 - present',
    degree: 'Bachelor of Technology in Computer Science Engineering',
    institution: 'Vellore Institute of Technology',
  },
  {
    period: '2023 - present',
    degree: 'Bachelor of Science in Data Science',
    institution: 'Indian Institute of Technology',
  },
];

const About = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0.05, 0.2], [50, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute -left-32 top-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 bottom-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          About Me
        </motion.h2>

        <motion.div style={{ y: y1, opacity: opacity1 }} className="mb-24">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center">My Journey</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="py-4 text-gray-300 text-lg leading-relaxed"
            >
              Hey, I'm Aadithya! I'm a{' '}
              <span className="text-blue-400 font-medium">Computer Science student</span> at VIT
              Chennai, also pursuing a{' '}
              <span className="text-purple-400 font-medium">Data Science degree</span> at IIT
              Madras. I love building things that are{' '}
              <span className="text-blue-400 font-medium">fast, scalable, and actually useful</span>
              —whether it's backend-heavy systems, full-stack applications, or something entirely
              new.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="py-4 text-gray-300 text-lg leading-relaxed"
            >
              I'm also into{' '}
              <span className="text-purple-400 font-medium">competitive programming</span>, always
              looking for new challenges to solve. Whether it's{' '}
              <span className="text-blue-400 font-medium">optimizing algorithms</span>, designing
              efficient architectures, or experimenting with new tech, I enjoy the process of
              breaking things down and making them better.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="py-4 text-gray-300 text-lg leading-relaxed"
            >
              Outside of coding, you'll probably find me{' '}
              <span className="text-blue-400 font-medium">exploring new ideas</span>,{' '}
              <span className="text-purple-400 font-medium">competing in coding contests</span>, or
              just geeking out over interesting problems.
            </motion.p>
          </div>
        </motion.div>

        <Skills />

        <div
          className={`grid grid-cols-1 ${experiences.length > 0 ? 'lg:grid-cols-2' : ''} gap-16 mt-24`}
        >
          {experiences.length > 0 && (
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
                {experiences.map((exp: any, index: any) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-10.5 top-0 w-5 h-5 rounded-full bg-purple-500 border-4 border-gray-900"></div>
                    <div className="text-gray-400 text-sm mb-1">{exp.period}</div>
                    <h4 className="text-xl font-medium text-white">{exp.role}</h4>
                    <div className="text-blue-400 mb-2">{exp.company}</div>
                    <p className="text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className={experiences.length === 0 ? 'max-w-lg mx-auto' : ''}>
            <motion.h3
              initial={{ opacity: 0, x: experiences.length > 0 ? 20 : 0 }}
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
                initial={{
                  opacity: 0,
                  x: experiences.length > 0 ? 30 : 0,
                  y: experiences.length > 0 ? 0 : 30,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 p-6 bg-gray-800/30 backdrop-blur-sm rounded-lg border-l-4 border-blue-500"
              >
                <div className="text-gray-400 text-sm mb-1">{edu.period}</div>
                <h4 className="text-xl font-medium text-white">{edu.degree}</h4>
                <div className="text-blue-400 mb-2">{edu.institution}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
