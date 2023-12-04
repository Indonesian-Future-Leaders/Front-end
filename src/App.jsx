import { useEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// import { jwtDecode } from "jwt-decode";

// import { SweatAlertWithContent } from "./utils/sweet-alert";

import Home from "./page/Home";
import Program from "./page/Program";
import Project from "./page/Project";
import About from "./page/About";
// import Blog from "./page/Blog";
// import Donate from "./page/Donate";
import ComingSoon from "./page/ComingSoon";
import NotFoundPage from "./page/NotFoundPage";
import SingleBlogPage from "./page/SingleBlogPage";
// import LoginPage from "./page/LoginPage";
// import RegisterPage from "./page/RegisterPage";
// import Profile from "./page/Profile";
// import VerifyPage from "./page/VerifyPage";
// import ForgotPasswordPage from "./page/ForgotPasswordPage";
// import ResetPasswordPage from "./page/ResetPasswordPage";
// import ProtectedToken from "./routes/ProtectedToken";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return;
};

const App = () => {
  // const token = localStorage.getItem("token");
  // const isTokenExpired = (token) => {
  //   const decoded = jwtDecode(token);

  //   const currentTime = Date.now().valueOf() / 1000;

  //   if (currentTime > decoded.exp) {
  //     return true;
  //   }

  //   return false;
  // };

  // useEffect(() => {
  //   if (token) {
  //     const isExp = isTokenExpired(token);
  //     if (isExp) {
  //       SweatAlertWithContent("Your session is about to time out. Do you want to extend your current session?");
  //     }
  //   }
  // }, [token]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/donate" element={<ComingSoon />} />

        <Route path="/blog/:id" element={<SingleBlogPage />} />
        {/* <Route element={<ProtectedToken />}>
          <Route path="/profile/:id" element={<Profile />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} /> */}

        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
