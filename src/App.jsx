import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Program from "./page/Program";
import Project from "./page/Project";
import About from "./page/About";
import Blog from "./page/Blog";
import Donate from "./page/Donate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
