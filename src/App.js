import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Router basename="/my-profile">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
