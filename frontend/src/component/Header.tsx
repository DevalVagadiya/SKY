import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Clock,
  Info,
  Droplet,
  Package,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gray-700 text-white text-sm flex justify-between items-center px-4 md:px-6 py-2">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>Mon to Sun 08:00 AM to 08:00 PM</span>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>test@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 95107 66011</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-6 py-2 bg-white shadow">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          <div>
            <h1 className="text-xl font-bold text-blue-600">test</h1>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-4 text-gray-600 font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-yellow-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-blue-700"
              }`
            }
          >
            <Info className="w-4 h-4 mr-1" />
            About Us
          </NavLink>

          <NavLink
            to="/blood-tests"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-blue-700"
              }`
            }
          >
            <Droplet className="w-4 h-4 mr-1" />
            Blood Tests
          </NavLink>

          <NavLink
            to="/packages"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-blue-700"
              }`
            }
          >
            <Package className="w-4 h-4 mr-1" />
            Health Packages
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-blue-700"
              }`
            }
          >
            <Package className="w-4 h-4 mr-1" />
            Contact Us
          </NavLink>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link to="/appointment">
            <button className="flex items-center bg-yellow-500 text-white px-5 py-2 rounded-full font-medium hover:bg-yellow-600 transition">
              Make Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-6 space-y-4 text-gray-700 font-medium">
          <NavLink
            to="/"
            end
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-yellow-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-blue-700"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/blood-tests"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-blue-700"
              }`
            }
          >
            Blood Tests
          </NavLink>
          <NavLink
            to="/packages"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full transition ${
                isActive
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-yellow-100 hover:text-blue-700"
              }`
            }
          >
            Health Packages
          </NavLink>
          <Link
            to="/appointment"
            onClick={() => setMobileOpen(false)}
            className="block"
          >
            <button className="w-full flex items-center justify-center bg-yellow-500 text-white px-5 py-2 rounded-full font-medium hover:bg-yellow-600 transition">
              Make Appointment
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
