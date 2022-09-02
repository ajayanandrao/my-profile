import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Page/About";
import PropsTwo from "./Page/About inner card/PropsTwo";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Signin from "./Page/Signin";
import SignUp from "./Page/SignUp";

function App() {
  return (
    <>
      <Router basename="/my-profile">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      
      {/* <PropsTwo/> */}
    </>
  );
}

export default App;
