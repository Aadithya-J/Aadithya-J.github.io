import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const heroSection = document.getElementById("home");

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    if (heroSection) {
      heroSection.addEventListener("mouseenter", handleMouseEnter);
      heroSection.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      if (heroSection) {
        heroSection.removeEventListener("mouseenter", handleMouseEnter);
        heroSection.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-50"
          style={{
            position: "absolute",
            width: "20px",
            height: "20px",
            backgroundColor: "white", // White color for the cursor
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Triangle shape
            transform: "translate(-50%, -50%)", // Center the triangle on the mouse position
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)", // Glow effect
            transition: "all 0.1s ease", // Smooth transition
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
