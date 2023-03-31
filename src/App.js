import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";
import Experience from "./Component/Experience/Experience";
import Works from "./Component/Works/Works";
import Portfolio from "./Component/Portfolio/Portfolio";
import Testimonials from "./Component/Testimonials/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Toggle from "./Component/Toggle/Toggle";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
    <Navbar/>
    <Intro/>
    <Services/>
    <Experience />
    <Works/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    {/* <Toggle/> */}
    </div>
  );
}

export default App;
