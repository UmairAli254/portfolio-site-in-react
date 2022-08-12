import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Services from "./components/ServicesSection/Services";
import Experience from "./components/ExperienceSection/Experience";
import Work from "./components/WorkSection/Work";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
};

export default App;
