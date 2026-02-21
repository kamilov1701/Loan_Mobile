import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../public/Home.png";
import ListIcon from "../../public/List.png";
import AnalyticsIcon from "../../public/Analytics.png";
import AlertIcon from "../../public/Alert.png";
import ProfileIcon from "../../public/Account_circle.png";

function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full max-w-md bg-white shadow-t p-2 flex justify-around border-t">
      <Link to="/" className="text-blue-500 font-semibold"><img src={HomeIcon} alt="" /></Link>
      <Link to="/list" className="text-blue-500 font-semibold"><img src={ListIcon} alt="" /></Link>
      <Link to="/analytics" className="text-blue-500 font-semibold"><img src={AnalyticsIcon} alt="" /></Link>
      <Link to="/alert" className="text-blue-500 font-semibold"><img src={AlertIcon} alt="" /></Link>
      <Link to="/profile" className="text-blue-500 font-semibold"><img src={ProfileIcon} alt="" /></Link>
    </nav>
  );
}

export default Navbar;