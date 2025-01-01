import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Subscription from "./pages/subscription/Subscription.jsx";
import { Provider } from "react-redux";
import Subscribers from "./pages/subscribers/Subscribers.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="subscribers" element={<Subscribers />} />
            <Route path="subscribers/:id" element={<Subscription />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>
);
