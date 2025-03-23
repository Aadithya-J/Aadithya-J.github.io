import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
      >
        AJ
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="hidden md:flex gap-8"
      >
        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={
              item === 'Contact'
                ? 'mailto:aadithyajayakaran@gmail.com'
                : `#${item.toLowerCase()}`
            }
            target={item === 'Contact' ? '_blank' : '_self'}
            rel={item === 'Contact' ? 'noopener noreferrer' : undefined}
            className="hover:text-blue-400 transition-colors relative group"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
