import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { Pointer } from "./components/ui/pointer";
import { LenisProvider } from './context/LenisContext';
import { lazy, Suspense } from 'react';

// Lazy load components that aren't needed immediately
// const About = lazy(() => import("./components/About"));
// const Projects = lazy(() => import("./components/Projects"));

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
    <LenisProvider>
      <ParallaxProvider>
        <Pointer className="fill-neutral-200" />
        <div className="min-h-screen bg-[#050505] text-white">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          {/* Uncomment if using lazy loading */}
          {/* <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <Projects />
          </Suspense> */}
        </div>
      </ParallaxProvider>
    </LenisProvider>
  );
};

export default App;