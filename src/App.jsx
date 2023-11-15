import { useEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./page/Home";
import Program from "./page/Program";
import Project from "./page/Project";
import About from "./page/About";
import Blog from "./page/Blog";
import Donate from "./page/Donate";
import Login from "./layouts/login";
import Register from "./layouts/register";
import ComingSoon from "./page/ComingSoon";
import NotFoundPage from "./page/NotFoundPage";
import Profile from "./page/Profile";
import VerifyPage from "./page/VerifyPage";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/program" element={<Program />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
