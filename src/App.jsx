import * as React from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

// root page
import { HomePage, AboutPage, ProgramPage, ProjectPage, SingleBlogPage, ProfilePage, SingleDonationPage, PaymentDonatePage } from "./page/root";

// dashboard page
import { DashboardPage, DonationHistory, DonationPage, SoonDashboardPage, UserPage } from "./page/dashboard";

// authentication page
import { GoogleCallbackPage, ResetPasswordPage } from "./page/auth";
const LoginPage = React.lazy(() => import("./page/auth/LoginPage"));
const RegisterPage = React.lazy(() => import("./page/auth/RegisterPage"));
const ForgotPasswordPage = React.lazy(() => import("./page/auth/ForgotPasswordPage"));
const VerifyPage = React.lazy(() => import("./page/auth/VerifyPage"));
import AuthBackground from "./components/skeleton/AuthBackground";

//error page
import ComingSoon from "./page/ComingSoon";
import NotFoundPage from "./page/NotFoundPage";

import ProtectedToken from "./routes/ProtectedToken";

import DonatePage from "./page/root/DonatePage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/donate/:id" element={<SingleDonationPage />} />
        <Route path="/donate/:id/payment" element={<PaymentDonatePage />} />

        <Route element={<ProtectedToken />}>
          <Route path="/profile/:id" element={<ProfilePage />} />

          <Route path="/dashboards" element={<DashboardPage />} />

          <Route path="/dashboard/user" element={<UserPage />} />

          <Route path="/dashboard/blog" element={<SoonDashboardPage />} />
          <Route path="/dashboard/blog/add" element={<SoonDashboardPage />} />

          <Route path="/dashboard/product" element={<SoonDashboardPage />} />

          <Route path="/dashboard/order-list" element={<SoonDashboardPage />} />

          <Route path="/dashboard/donation" element={<DonationPage />} />
          <Route path="/dashboard/donation/:id" element={<DonationHistory />} />
        </Route>

        <Route
          path="/login"
          element={
            <React.Suspense fallback={AuthBackground}>
              <LoginPage />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={AuthBackground}>
              <RegisterPage />
            </React.Suspense>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <React.Suspense fallback={AuthBackground}>
              <ForgotPasswordPage />
            </React.Suspense>
          }
        />
        <Route
          path="/verify"
          element={
            <React.Suspense fallback={AuthBackground}>
              <VerifyPage />
            </React.Suspense>
          }
        />
        <Route path="/auth/google" element={<GoogleCallbackPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
