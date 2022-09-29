import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Page/About";
import PropsTwo from "./Page/About inner card/PropsTwo";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import MyProject from "./Page/My project/MyProject";
import Navbar from "./Page/Navbar";
import Signin from "./Page/Signin";
import SignUp from "./Page/SignUp";
import ScrollToTop from "./ScrollTop";

function App() {
  return (
    <>
      <Router basename="/my-profile">
      <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="my-project" element={<MyProject/>}/>

        </Routes>
      </Router>
      
      {/* <PropsTwo/> */}
    </>
  );
}

export default App;
