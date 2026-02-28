// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ListLoaner from "./pages/ListLoaner";
// import Analytics from "./pages/Analytics";
// import Alert from "./pages/Alert";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100 max-w-md mx-auto shadow-lg relative">
//         <div className="pb-16">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/list" element={<ListLoaner />} />
//             <Route path="/analytics" element={<Analytics />} />
//             <Route path="/alert" element={<Alert />} />
//             <Route path="/profile" element={<Profile />} />
//           </Routes>
//         </div>

//         <Navbar />
//       </div>
//     </Router>
//   );
// }

// export default App;



















import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ListLoaner from "./Pages/ListLoaner";
import Analytics from "./Pages/Analytics";
import Alert from "./Pages/Alert";
import Profile from "./Pages/Profile";

function Layout() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div className="min-h-screen bg-gray-100 max-w-md mx-auto shadow-lg relative">
      <div className="pb-16">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/list" element={<ProtectedRoute><ListLoaner /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
          <Route path="/alert" element={<ProtectedRoute><Alert /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </div>

      {!hideNavbar && <Navbar />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;