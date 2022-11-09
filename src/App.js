import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="header">
        <Intro />
      </div>
      <div className="body-section">
        <hr className="horizontal-rule" />
        <About />
        <hr className="horizontal-rule" />
        <Services />
        <hr className="horizontal-rule" />
        <Projects />
        <hr className="horizontal-rule" />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
