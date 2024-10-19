import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#101630] text-white">
      <div className="px-5 md:px-24">
        <Header />
        <HeroSection />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>
      <Footer /> {/* email js parameters not added to get emails */}
    </div>
  );
}

export default App;
