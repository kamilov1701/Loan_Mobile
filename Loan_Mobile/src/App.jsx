import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListLoaner from "./pages/ListLoaner";
import Analytics from "./pages/Analytics";
import Alert from "./pages/Alert";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 max-w-md mx-auto shadow-lg relative">
        <div className="pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/list" element={<ListLoaner />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/alert" element={<Alert />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        <Navbar />
      </div>
    </Router>
  );
}

export default App;