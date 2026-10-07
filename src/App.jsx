import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Featured from "./components/Featured";
import Insights from "./components/Insights";
import Mindset from "./components/Mindset";

export default function App() {
  return (
    <div className="transition duration-500">
      <Navbar />
      <main id="main">
        <Hero />
        <Mindset />
        <Experience />
        <Featured />
        <Skills />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
