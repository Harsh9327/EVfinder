// import { Link } from "react-router-dom";
import { useState } from "react";
import user from "../assets/user2.jpg"
import logo from "../assets/logo192.png";
import name from "../assets/NewProject.png";

export const Header = () => {
const [hidden, setHidden] = useState(true);
  
  return (
  <header className="bg-gray-800 text-white p-2 flex justify-between items-center ">
  {/* Logo and Site Name */}
  <div className="flex items-center">
    <img src={logo} alt="Logo" className="w-11 h-11 mr-2" />
    <img src={name} alt="logoname" className=" h-6"/>
  </div>

  {/* Navigation Links */}
  {/* <nav className="space-x-4">
    <a to="#" className="hover:text-gray-300">Home</a>
    <a to="#" className="hover:text-gray-300">About</a>
    <a to="#" className="hover:text-gray-300">Contact</a>
  </nav> */}

  {/* Search Icon */}
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {/* Add your SVG path for the search icon here */}
    </svg>
  </div>

  {/* User Dropdown */}
  <div className="group relative">
    <button  onClick={() => setHidden(!hidden)}className="flex items-center focus:outline-none">
      <img src={user} alt="User" className="w-6 h-6 rounded-full" />
      <span className="ml-2">Username</span>
    </button>

    {/* Dropdown Menu */}
    <div className={`${hidden ? "hidden" : "" }  group:block absolute right-0 mt-2 bg-white text-gray-800 p-2 rounded shadow`}>
      <a to="#" className="block py-1 cursor-pointer">Profile</a>
      <a to="#" className="block py-1 cursor-pointer">Settings</a>
      <hr className="my-1" />
      <a to="#" className="block py-1 cursor-pointer">Logout</a>
    </div>
  </div>
</header>
    
  )
}
