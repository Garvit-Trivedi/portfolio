import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { Home, Briefcase, Phone, Code2, Lightbulb } from "lucide-react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Skills from "./components/Skill"; // Import Skills component

function App() {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Section references
  const heroRef = useRef(null);
  const serviceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null); // Add skills reference

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="box-content overflow-x-hidden">
              <div
                className="min-h-screen bg-gray-900 text-white"
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                {/* Sections */}
                <div ref={heroRef}>
                  <Hero />
                </div>
                <div ref={serviceRef}>
                  <Service />
                </div>
                <div ref={skillsRef}>
                  <Skills />
                </div>
                <div ref={projectsRef}>
                  <Projects />
                </div>
                <div ref={contactRef}>
                  <Contact />
                </div>
                <Footer />

                {/* Draggable Navigation */}
                
              </div>
            </div>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;