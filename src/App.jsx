import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax"; // Assuming Parallax is in this path
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
     
      <section id="About me">
        <Parallax type="services" />
      </section> 
      
      <section>
        <Services/>
      </section>

      <section id="Skills">
        <Parallax type="projects" />
      </section>
      
      <section id="Projects">
        <Portfolio />
      </section>
      
      <div style={{ height: "550vh" }}></div>
      
      <section id="Contact">
        <Contact/>
      </section>   
    </div>
  );
};

export default App;