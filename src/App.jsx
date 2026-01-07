import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
  }, []);

  // Function to scroll to section
  const scrollToSection = (sectionId) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      contact: contactRef,
    };

    if (refs[sectionId]?.current) {
      refs[sectionId].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  // Set up scroll detection with Intersection Observer
  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust these values for sensitivity
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe each section
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []); // Empty dependency array - runs once on mount

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />

      <main className="pt-16">
        {/* Add section IDs to each section */}
        <section ref={homeRef} id="home" className="scroll-mt-16">
          <Home isDarkMode={isDarkMode} />
        </section>

        <section ref={aboutRef} id="about" className="scroll-mt-16">
          <About isDarkMode={isDarkMode} />
        </section>

        <section ref={experienceRef} id="experience" className="scroll-mt-16">
          <Experience isDarkMode={isDarkMode} />
        </section>

        <section ref={projectsRef} id="projects" className="scroll-mt-16">
          <Projects isDarkMode={isDarkMode} />
        </section>

        <section ref={contactRef} id="contact" className="scroll-mt-16">
          <Contact isDarkMode={isDarkMode} />
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
