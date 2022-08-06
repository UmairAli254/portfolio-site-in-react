import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Hero from "./components/HeroSection/Hero";
import Services from "./components/ServicesSection/Services";
import Experience from "./components/ExperienceSection/Experience";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
    </div>
  )
};

export default App;
