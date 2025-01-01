import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Users from "./pages/users/Users.jsx";
import Subscription from "./pages/subscription/Subscription.jsx";
import { Provider } from "react-redux";


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<Subscription />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>
);
