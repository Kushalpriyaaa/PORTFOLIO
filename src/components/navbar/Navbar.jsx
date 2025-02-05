import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} // Fixed typo: duration
        >
          {/* You can add content here if needed */}
        </motion.span>
        <div className="social">
          <a href="https://codolio.com/profile/Kush2" target="_blank" rel="noopener noreferrer">
            <img src="/codolio.png" alt="Codolio" />
          </a>
          <a href="https://github.com/Kushalpriyaaa" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/kushal-priya-96a623257" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin (1).png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/kush._k__/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="file:///C:/Users/kushk/Downloads/MTeck_s_Resume__2_%20(5).pdf" target="_blank" rel="noopener noreferrer">
          <img src="/kon.png" alt="Resume" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;