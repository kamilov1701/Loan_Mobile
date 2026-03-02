import React from "react";
import { Link } from "react-router-dom";

import { FiHome } from "react-icons/fi";
import { IoMdListBox } from "react-icons/io";
import { FiBarChart2 } from "react-icons/fi";
import { FiAlertTriangle } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <center>
      <nav className="fixed bottom-0 left-0 w-full max-w-md bg-white shadow-t p-2 flex justify-around border-t">
        <Link to="/" className="text-blue-500 font-semibold"><FiHome size={36}/></Link>
        <Link to="/list" className="text-blue-500 font-semibold"><IoMdListBox size={36}/></Link>
        <Link to="/analytics" className="text-blue-500 font-semibold"><FiBarChart2 size={36}/></Link>
        <Link to="/alert" className="text-blue-500 font-semibold"><FiAlertTriangle size={36}/></Link>
        <Link to="/profile" className="text-blue-500 font-semibold"><CgProfile  size={36}/></Link>
      </nav>
    </center>
  );
}

export default Navbar;