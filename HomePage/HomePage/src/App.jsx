import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import routes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
