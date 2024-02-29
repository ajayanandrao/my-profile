import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ScrollToTop from "./ScrollTop";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Contact from "./Contact/Contact";
import About from "./About/About";
import ScrollToTop from "./ScrollTop";

function App() {
  return (
    <>
      <Router basename="/my-profile">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
