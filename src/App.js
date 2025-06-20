import HelpSection from "./components/HelpSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import ToolsSection from "./components/ToolsSection";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HelpSection />
      <Result />
      <ToolsSection />
      <Footer />
    </>
  );
}

export default App;
