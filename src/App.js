// Import React, CSS, and Animation Libraries
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations
import { FaSun, FaMoon } from "react-icons/fa"; // Dark mode icons
import { TypeAnimation } from "react-type-animation"; // Typing effect
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
          <TypeAnimation
            sequence={[
              "Software Developer", 2000,
              "Tech Enthusiast", 2000,
              "Problem Solver", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
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

          <h3>💡 Philosophy & Career Goal</h3>
          <blockquote>
            “We are the facilitators of our own creative evolution.” – Bill Hicks
          </blockquote>
          <p>
            As a software developer, I believe in the power of continuous learning, adaptability, and creativity.
            My journey started with a curiosity about how technology shapes the world, and it has grown into a deep commitment
            to building solutions that enhance user experiences, streamline workflows, and solve real challenges.
          </p>
          <p>
            I see myself as more than just a developer—I am a problem solver, innovator, and lifelong learner.
            My goal is to leverage my technical skills and critical thinking to contribute to forward-thinking projects
            that push boundaries in technology. With every challenge I take on, I aim to evolve, adapt, and innovate—
            ultimately making a positive difference in the tech industry.
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

          <h3>📌 Project Summary</h3>
          <p>
            Craft Connect is an e-commerce platform that empowers artisans and small businesses
            by providing a digital marketplace to showcase and sell their handcrafted products.
            The platform offers a seamless shopping experience, secure transactions, and real-time
            communication between sellers and buyers.
          </p>

          <h3>🎯 Project Vision</h3>
          <p>
            The goal of Craft Connect is to create a user-friendly, scalable marketplace that
            supports small businesses in reaching a global audience. The project focuses on
            integrating modern web technologies for fast, secure, and intuitive interactions.
          </p>

          <h3>📜 Project/Business Requirements</h3>
          <p>
            The platform includes secure authentication using Firebase, a product listing feature
            where sellers can upload and manage their inventory, a shopping cart with checkout functionality,
            Stripe API integration for secure payments, and an order tracking system to monitor purchases.
            Users can also leave reviews and ratings for products.
          </p>

          <h3>📅 Project Plan</h3>
          <p>
            The project was developed using Agile methodology, following iterative sprints for feature
            development and testing. The development lifecycle includes an initial phase for UI/UX wireframes,
            followed by backend setup, frontend implementation, integration of authentication and payment systems,
            and final testing before deployment.
          </p>

          <h3>📐 Requirements Analysis & Design</h3>
          <p>
            The system was structured with modular components to ensure scalability and security.
            The backend architecture follows a RESTful API design using Node.js and Express.js.
            Data is managed using Firebase Firestore, with real-time synchronization between clients.
          </p>

          <h3>🎨 Wireframes & Mockups</h3>
          <p>
            The UI was designed in Figma, focusing on a clean and intuitive user experience.
            The main pages include a home page featuring trending products, a product detail page with
            item specifications, a shopping cart and checkout process, and a seller dashboard for managing
            product listings and sales reports.
          </p>

          <h3>📊 Status Reports</h3>
          <p>
            Project progress was tracked using JIRA, where tasks were assigned and updated weekly.
            Sprint retrospectives were conducted to analyze challenges and implement improvements.
            Status reports documented milestones, pending tasks, and potential risks.
          </p>

          <h3>⚙️ System Implementation</h3>
          <p>
            The frontend was built using React.js with Tailwind CSS for styling, while the backend is powered
            by Node.js and Express.js. Firebase Firestore manages data storage, Firebase Authentication ensures
            user security, and Stripe API handles payment processing. The system is deployed on Vercel and Firebase Hosting.
          </p>

          <h3>🔗 Project Links</h3>
          <p>
            <strong>📂 GitHub Repository:</strong>  
            <a href="https://github.com/dorpanz/Craft_connect_project.git" target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          </p>
          <p>
            <strong>🌐 Live Demo:</strong>  
            <a href="https://www.youtube.com/watch?v=UnOJr5eaC0c" target="_blank" rel="noopener noreferrer">
              Visit Craft Connect
            </a>
          </p>
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
            <li>
              <strong>📱 React Native Mobile App</strong> 
              <br />
              <a href="https://www.youtube.com/watch?v=YourReactNativeAppLink" target="_blank" rel="noopener noreferrer">
                🎥 Watch Demo
              </a>
            </li>
            <li>
              <strong>➗ Fun Math Game</strong> 
              <br />
              <a href="https://www.youtube.com/watch?v=YourFunMathGameLink" target="_blank" rel="noopener noreferrer">
                🎥 Watch Demo
              </a>
            </li>
          </ul>
        </motion.section>

        <motion.section className="contact" initial="hidden" animate="visible" variants={fadeIn}>
          <h2>📬 Contact Me</h2>
          <ul>
            <li>Email: <a href="mailto:chhavichhabra5@gmail.com">chhavichhabra5@gmail.com</a></li>
            <li>Phone: <a href="tel:+16478953246">+1 647 895 3246</a></li>
            <li>
              LinkedIn: 
              <a href="https://www.linkedin.com/in/chhavi-chhabra-263a57242" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/chhavi-chhabra
              </a>
            </li>
          </ul>
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
