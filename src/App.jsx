import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import GlowEffect from "./components/GlowEffect";

function App() {
  return (
    <>
      <GlowEffect />
      {/* <div className="bg-red-500 text-white p-10">If you see a red box, Tailwind is working!</div> */}
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <Projects />
      <Certificates />

      <Contact />
      {/* <Blog /> */}
    </>
  );
}

export default App;
