import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="transition duration-500">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
