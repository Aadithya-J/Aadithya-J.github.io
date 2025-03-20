import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  // Initialize Lenis smooth scrolling for the entire site
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Slower scroll for more dramatic effect
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    </ParallaxProvider>
  );
};

export default App;