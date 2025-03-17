// Import React, CSS, and Animation Libraries
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import { FaSun, FaMoon } from "react-icons/fa"; // Dark mode icons
import "./index.css"; // Importing CSS styles

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
      {/* Dark Mode Toggle Button */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <header className="header">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          Welcome to Chhavi's Portfolio
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn}>
          Software Developer | Tech Enthusiast | Problem Solver
        </motion.p>
      </header>

      <main className="main-content">
       

        {/* Bio Section */}
        <motion.section className="bio" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>📜 Bio</h2>
          <p>
            I am a Computer Programming student with a strong passion for web and mobile application development.
            My goal is to innovate and contribute to cutting-edge technologies. I specialize in React, JavaScript, Node.js, Python, and SQL.
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

        {/* Capstone Project - Craft Connect */}
        <motion.section className="capstone-project" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>🚀 Capstone Project: Craft Connect</h2>
          <p><strong>Project Type:</strong> E-Commerce Website</p>

          <h3>Overview</h3>
          <p>
            <strong>Craft Connect</strong> is an innovative online marketplace designed to empower artisans and small business owners 
            by giving them a seamless platform to showcase and sell their handcrafted products. 
          </p>

          <h3>✨ Key Features</h3>
          <ul>
            <li> <strong>Secure Authentication:</strong> Firebase-based login/signup</li>
            <li><strong>Product Listings:</strong> Sellers can manage inventory & showcase products</li>
            <li> <strong>Payments:</strong> Secure transactions via Stripe API</li>
            <li><strong>Order Tracking:</strong> Customers can track shipments</li>
            <li><strong>Seller Dashboard:</strong> Sales & analytics tracking</li>
            <li><strong>Fully Responsive:</strong> Optimized for all devices</li>
          </ul>

          <h3>🛠️ Tech Stack</h3>
          <ul>
            <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> Firebase Firestore</li>
            <li><strong>Authentication:</strong> Firebase Auth</li>
            <li>💰 <strong>Payments:</strong> Stripe API</li>
          </ul>

          <h3>🔗 Project Links</h3>
          <p><strong>📂 GitHub Repository:</strong> <a href="https://github.com/dorpanz/Craft_connect_project.git" target="_blank">View Code</a></p>
          <p><strong>🌐 Live Demo:</strong> <a href="https://www.youtube.com/watch?v=UnOJr5eaC0c" target="_blank">Visit Craft Connect</a></p>
        </motion.section>

        {/* Professional Summary */}
        <motion.section className="professional-summary" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>💼 Professional Work</h2>
          <p>Some of my previous projects:</p>
          <ul>
            <li>
              <strong>📅 Room Booking & Event Management App</strong> 
              <br />
              <a href="https://www.youtube.com/watch?v=V812ll1EGbU" target="_blank" rel="noopener noreferrer">
                🎥 Watch Demo
              </a>
            </li>
            <li>
              <strong>🍽️ Personal Restaurant Guide App</strong> 
              <br />
              <a href="https://www.youtube.com/watch?v=H4qonrW1vhI" target="_blank" rel="noopener noreferrer">
                🎥 Watch Demo
              </a>
            </li>
            <li>
              <strong>🏡 House Price Prediction Model</strong> 
              <br />
              <a href="https://www.youtube.com/watch?v=Gq0GnHlEUgw" target="_blank" rel="noopener noreferrer">
                🎥 Watch Demo
              </a>
            </li>
          </ul>

          <h3>🎗️ Community Service</h3>
          <p>Volunteer Mentor at Code for Change Initiative</p>

          <h3>🏆 Awards & Recognition</h3>
          <p>Best Software Developer Award 2024</p>
        </motion.section>

      </main>

      <footer className="footer">
        <motion.p initial="hidden" animate="visible" variants={fadeIn}>
          &copy; 2025 Chhavi. All Rights Reserved.
        </motion.p>
      </footer>
    </div>
  );
};

export default App;
