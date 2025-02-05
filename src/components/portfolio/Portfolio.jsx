
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  
  {
    id: 2,
    title: "See the Sort",
    img: "Hot.png",
    desc: " A react based application using Data structure and algorithm , showcasing sorting algorithms like Bubble Sort, Insertion Sort, Merge sort,Quick Sort.",
    link: "https://see-the-sort-d7ma.vercel.app/",
  },
  {
    id: 3,
    title: "GitPeek",
    img: "BILLLLi.png",
    desc: " The GitHub Profile Search Project is a simple and interactive web application built using HTML, CSS, and JavaScript. The primary goal of the project is to allow users to search for GitHub profiles by entering a username and display relevant profile details in a visually appealing manner.",
    link: "https://git-peek-l2yr.vercel.app/",
  },
  {
    id: 4,
    title: "IntelliMock Ai",
    img: "image.png",
    desc: "Ai asks industry specific questions to the user and based on the answers provided by the user, it generates a mock interview experience for the user. The user can practice the interview as many times as they want.",
    link: "https://intelli-mock-rbok.vercel.app/",
  },
 
  {
    id: 3,
    title: "EmoAge Ai",
    img: "Age.png",
    desc: "EmoAge Ai is a web application that uses machine learning to predict the age and emotion of a person from an image. The application is built using React and TensorFlow.js, and it uses a pre-trained model to make predictions.",
    link: "https://emo-age-ai.vercel.app/",
  },
  {
    id: 1,
    title: "Your Weather Wise",
    img: "weather.png",
    desc: "This is a React-based weather application that provides real-time weather updates for various locations. The app is designed to be user-friendly, and visually appealing, offering an intuitive experiance.",
    link: "https://reactjs.org/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  const handleButtonClick = () => {
    window.open(item.link, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleButtonClick}>See Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;