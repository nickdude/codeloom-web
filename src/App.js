import HelpSection from "./components/HelpSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import ToolsSection from "./components/ToolsSection";
import Result from "./components/Result";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Codeloom Studio | Design-first Development</title>
        <meta
          name="description"
          content="We craft stunning websites and digital products focused on results. Boost your brand's growth with us!"
        />
        <meta
          name="keywords"
          content="UI/UX, Web Design, Development, React, Codeloom"
        />
        <link rel="canonical" href="https://codeloom.studio" />
      </Helmet>
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
