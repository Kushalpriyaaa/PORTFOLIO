import "./hero.scss";
import { motion } from "framer-motion";
import {useTypewriter,Cursor} from "react-simple-typewriter";
import { Link } from "react-router-dom";

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.9
  }
};
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
   transition: {
    duration: 2,
    repeat: Infinity,

    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
    },
  },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Passionate Coder", "Web Developer", "ML Enthusiast","Web Designer"],
    loop: Infinity,
    delaySpeed: 2000,
  });

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        ><motion.h2 variants={textVariants}>
        Hello, It's Me
      </motion.h2>
          <motion.h1 variants={textVariants}>KUSHAL PRIYA</motion.h1>
          <motion.h2 variants={textVariants}>
            And I'm a <span className="typewriter-text">{text}</span>
            <Cursor />
          </motion.h2>
          <motion.div className="buttons">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                window.location.href = 'https://kushalpriyaaa.github.io/Aboutt/';
              }}
            >
              About Me
            </motion.button>
          </motion.div>
          <motion.img 
            variants={textVariants} 
            animate="scrollButton" 
            src="/scroll.png" 
            alt="" 
          />
        </motion.div>
 <div className="imgageContainer">
            <img src="/file (1).png" alt="" />
        </div>
        </div>

{/* Move sliding container outside wrapper */}
<motion.div
  className="slidingTextContainer" // Fixed typo in className
  variants={sliderVariants}
  initial="initial"
  animate="animate"
>
  Coder , Developer
</motion.div>
      </div>
    
  );
};



export default Hero