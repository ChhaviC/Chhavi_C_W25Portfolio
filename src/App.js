// Import React, CSS, and Animation Libraries
import profilePic from "./assets/chhavi.jpg";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./index.css";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      {/* Dark Mode Toggle */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Hero Section */}
      <header className="hero">
        <motion.div className="hero-content" initial="hidden" animate="visible" variants={fadeIn}>
          <img src={profilePic} alt="Chhavi Chhabra" className="hero-photo" />
          <div className="hero-text">
            <h1>Hello, I'm <span className="highlight">Chhavi Chhabra</span></h1>
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 2000,
                "React Enthusiast", 2000,
                "Problem Solver", 2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>
      </header>

      <main className="main-content">
        {/* Bio */}
        <motion.section className="bio" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>📜 Bio</h2>
          <p>
            I am a Computer Programming student with a strong passion for web and mobile application development.
            My goal is to innovate and contribute to cutting-edge technologies. I specialize in React, JavaScript, Node.js, Python, and SQL.
          </p>
          <h3>💡 Philosophy & Career Goal</h3>
          <blockquote>
            “We are the facilitators of our own creative evolution.” – Bill Hicks
          </blockquote>
          <p>
            I believe in continuous learning, adaptability, and creativity. I strive to build solutions that enhance user experiences and solve real challenges.
          </p>
        </motion.section>

        {/* Resume & Cover Letter */}
        <motion.section className="resume" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>📄 Resume</h2>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">View Resume</a>
        </motion.section>

        <motion.section className="cover-letter" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>✉️ Cover Letter</h2>
          <a href="/cover-letter.pdf" target="_blank" rel="noopener noreferrer" className="btn">View Cover Letter</a>
        </motion.section>

        {/* Capstone Project */}
        <motion.section className="capstone-project" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>🚀 Capstone Project: Craft Connect</h2>
          <p>
            Craft Connect is an e-commerce platform that empowers artisans by providing a digital marketplace.
            Features include seller dashboards, secure authentication, Stripe payment integration, and product management.
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/dorpanz/Craft_connect_project.git" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </p>
          <p>
            <strong>Live Demo:</strong>{" "}
            <a href="https://craft-connect-ecom.netlify.app/" target="_blank" rel="noopener noreferrer">
              Visit Craft Connect
            </a>
          </p>
        </motion.section>

        {/* Contact Section */}
        <motion.section className="contact" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>📬 Contact Me</h2>
          <ul>
            <li>Email: <a href="mailto:chhavichhabra5@gmail.com">chhavichhabra5@gmail.com</a></li>
            <li>Phone: <a href="tel:+16478953246">+1 647 895 3246</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/chhavi-chhabra-263a57242" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/chhavi-chhabra
            </a></li>
          </ul>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <motion.p initial="hidden" animate="visible" variants={fadeIn}>
          &copy; 2025 Chhavi. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default App;
