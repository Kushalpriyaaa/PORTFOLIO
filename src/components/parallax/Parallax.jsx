import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./parallax.scss";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transformations for text and background elements
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Array of technologies for easier mapping
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Java",
    "MySQL",
    "MongoDB",
    "Python",
    "Angular",
    "Bootstrap",
  ];

  return (
    <div
      className={`parallax ${type === "skills" ? "skills" : ""}`}
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg,rgb(12, 12, 19),#0c0c1d)",
      }}
      
    >
         {/* Animated Background Elements */}
         <motion.div className="mountains" />
      <motion.div className="planets" />
      <motion.div style={{ x: yBg}} className="stars" />
      {/* Header Section */}
      <motion.h1
        className={type === "services" ? "about-me" : "skills-title"}
        style={{ y: yText }}
      >
        {type === "services" ? "About Me" : "Skills"}
      </motion.h1>

      {/* Services Section */}
      
      {type === "services" ? (
        <p className="about-text">
          I'm Kushal Priya, currently pursuing B.Tech from Bennett University.
          Throughout my engineering journey, I have consistently honed my
          problem-solving skills by tackling a wide range of Data Structures
          and Algorithms (DSA) challenges on platforms such as Leetcode and
          GeeksforGeeks. Additionally, I have actively participated in numerous
          hackathons, utilizing my technical expertise to develop innovative
          solutions and collaborate effectively in high-pressure environments.
        </p>
      ) : (
        <div className="scroll-container">
          {/* First Scroll Animation */}
          <motion.div
            className="scroll"
            style={{ "--time": "20s" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div>
              {technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div>
              {technologies.map((tech, index) => (
                <span key={`${index}-duplicate`}>{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Second Scroll Animation */}
          <motion.div
            className="scroll"
            style={{ "--time": "40s" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div>
              {technologies.map((tech, index) => (
                <span key={`${index}-second`}>{tech}</span>
              ))}
            </div>
            <div>
              {technologies.map((tech, index) => (
                <span key={`${index}-second-duplicate`}>{tech}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="scroll"
            style={{ "--time": "25s" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div>
              {technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div>
              {technologies.map((tech, index) => (
                <span key={`${index}-duplicate`}>{tech}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="scroll"
            style={{ "--time": "30s" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div>
              {technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div>
              {technologies.map((tech, index) => (
                <span key={`${index}-duplicate`}>{tech}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="scroll imgBox"
            style={{ "--time": "10s" }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div>
              {[
                { src: "/USA.png", alt: "USA" },
                { src: "/html.png", alt: "HTML" },
                { src: "/css.png", alt: "CSS" },
                { src: "/js.png", alt: "JavaScript" },
                { src: "/tailwind.png", alt: "Tailwind" },
                { src: "/React.png", alt: "React" },
                { src: "/mysql.png", alt: "MySQL" },
                { src: "/mongo.png", alt: "MongoDB" },
                { src: "/nodejs.png", alt: "NodeJS" }
              ].map(({ src, alt }) => (
                <a key={alt} href="#">
                  <img src={src} alt={alt} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}


    </div>
    
  );
  
};


export default Parallax;