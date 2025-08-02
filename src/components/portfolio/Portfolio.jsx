
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
    id: 1,
    title: "MyPockett",
    img: "Finance.png",
    desc: [
      "<strong>Tech Stack:</strong> React, Mongodb, Nodejs,  Gemini API, Clerk.",
      " Track credits, debits, and import bank data via CSV with monthly reports and visual expense charts.",
       
      "Monitor multi-asset investments with SIP calculator and growth insights.",
      " AI Chatbot to assist users with financial queries, and provide recommendations."
 ,
     
    ],
    // techStack: [
    //   { name: "React", logo: "React.png" },
    //   { name: "Next.js", logo: "Next.js.png" },
    //   { name: "Tailwind CSS", logo: "tailwind.png" },
    //   { name: "PostgreSQL", logo: "postgresql.png" },
    //   { name: "Drizzle ORM", logo: "Drizzle.png" },
    //   { name: "Neon", logo: "neon.png" },
    //   { name: "Gemini API", logo: "gemini.png" },
    //   { name: "Clerk", logo: "Clerk.png" }
    // ],
    link: "https://my-pockettt.onrender.com/",
  },
  {
    id: 2,
    title: "IntelliMock Ai",
    img: "Mockai.png",
    desc: [
      "<strong>Tech Stack:</strong> React, Next.js, PostgreSQL, Drizzle ORM, Neon, Gemini API, Clerk",
      "Quick login (Google/email), camera access, choose interview type.",
      " Mock Interview Session: Real-time AI-powered interview (by Gemini), with instant feedback.",
      " Review & Upgrade: Get performance feedback, insights."
    ],
    // techStack: [
    //   { name: "React", logo: "React.png" },
    //   { name: "Next.js", logo: "Next.js.png" },
    //   { name: "Tailwind CSS", logo: "tailwind.png" },
    //   { name: "PostgreSQL", logo: "postgresql.png" },
    //   { name: "Drizzle ORM", logo: "Drizzle.png" },
    //   { name: "Neon", logo: "neon.png" },
    //   { name: "Gemini API", logo: "gemini.png" },
    //   { name: "Clerk", logo: "Clerk.png" }
    // ],
    link: "https://intelli-mock-rbok.vercel.app/",
  },
  {
    id: 3,
    title: "See the Sort",
    img: "Hot.png",
    desc: [
     
      "<strong>Tech Stack:</strong> React, Framer Motion, CSS",
      "A react application that visually demonstrates sorting algorithms.",
      " Multiple Algorithms: Bubble, Insertion, Merge, and Quick Sort with animations.",
      
    
      "Beginner-Friendly: Simple, interactive tool to understand sorting logic."
    ],
    link: "https://see-the-sort-d7ma.vercel.app/",
  },
  {
    id: 4,
    title: "GitPeek",
    img: "BILLLLi.png",
    desc: [
      "<strong>Tech Stack:</strong> React, CSS, JavaScript",
      "Simple and interactive web application built with HTML, CSS, and JavaScript",
      "Search for GitHub profiles by entering any username",
      "Display relevant profile details in a visually appealing manner",
      "Clean and intuitive interface for easy profile exploration"
    ],
    link: "https://git-peek-l2yr.vercel.app/",
  },
  
  {
    id: 5,
    title: "Task Buddy",
    img: "Task.png",
    desc: [
      "<strong>Tech Stack:</strong> React, CSS, JavaScript",
      "Users can add new tasks with an input field and assign them a priority level. ",
      "The interface provides filtering options—All, Active, and Completed tasks.",

      "A dropdown on the right allows users to sort tasks based on criteria  for better management."
    ],
    link: " https://task-buddy-4git6js2y-kushalpriyaaas-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Your Weather Wise",
    img: "weather.png",
    desc: [
      "<strong>Tech Stack:</strong> React, CSS, JavaScript, Weather API",
      " A React-based web app that delivers up-to-date weather information for any entered city.",
      " Users can type a city name and click \"Search\" to fetch weather data instantly.",
      
     
    ],
    link: "https://github.com/Kushalpriyaaa/Weather_Wise",
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
      <div className="container" onClick={handleButtonClick} style={{ cursor: 'pointer' }}>
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            {Array.isArray(item.desc) ? (
              <ul>
                {item.desc.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
                ))}
              </ul>
            ) : (
              <p>{item.desc}</p>
            )}
            {item.techStack && (
              <div className="techStack">
                <span className="techLabel">Built with:</span>
                <div className="techLogos">
                  {item.techStack.map((tech, index) => (
                    <div key={index} className="techItem" title={tech.name}>
                      <img src={tech.logo} alt={tech.name} className="techLogo" />
                    </div>
                  ))}
                </div>
              </div>
            )}
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
    offset: ["start start", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Heading disappears earlier (80-90% scroll) so it's gone before contact section
  const headingOpacity = useTransform(scrollYProgress, [0, 0.8, 0.9], [1, 1, 0]);

  return (
    <div className="projects" ref={ref}>
      <motion.div className="progress" style={{ opacity: headingOpacity }}>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </motion.div>
      {/* Group projects into pairs - 2 projects per page */}
      {Array.from({ length: Math.ceil(items.length / 2) }, (_, pageIndex) => (
        <div key={pageIndex} className="projectPage">
          {items.slice(pageIndex * 2, pageIndex * 2 + 2).map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Portfolio;