import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load all pages
const App = lazy(() => import("./App.jsx"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard.jsx"));
const Subscription = lazy(() => import("./pages/subscription/Subscription.jsx"));
const Users = lazy(() => import("./pages/users/Users.jsx"));

// Fallback UI
const LoadingFallback = () => <div className="spinner">Loading...</div>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<Subscription />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
