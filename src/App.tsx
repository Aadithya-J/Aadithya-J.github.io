import { useEffect } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import { lazy, Suspense } from 'react';

// Lazy load components that aren't needed immediately
// const About = lazy(() => import("./components/About"));
// const Projects = lazy(() => import("./components/Projects"));

const App = () => {

  return (
      <ParallaxProvider>
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
  );
};

export default App;