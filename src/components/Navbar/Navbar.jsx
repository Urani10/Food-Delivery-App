import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { getTotalCartAmount } = useContext(StoreContext);

  // Close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Navbar Menu for Large Screens */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu for Small Screens */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              setIsSidebarOpen(false);
            }}
            className={menu === "home" ? "active" : ""}
          >
            HOME
          </Link>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("menu");
              setIsSidebarOpen(false);
            }}
            className={menu === "menu" ? "active" : ""}
          >
            MENU
          </a>
          <a
            href="#app-download"
            onClick={() => {
              setMenu("mobile-app");
              setIsSidebarOpen(false);
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            MOBILE-APP
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMenu("contact-us");
              setIsSidebarOpen(false);
            }}
            className={menu === "contact-us" ? "active" : ""}
          >
            CONTACT US
          </a>
          {/* Search and Basket Icons */}
          <div className="sidebar-icons">
            <img src={assets.search_icon} alt="Search" />
            <Link to="/cart">
              <img src={assets.basket_icon} alt="Basket" />
            </Link>
          </div>
          {/* Sign In Button */}
          <button
            onClick={() => {
              setShowLogin(true);
              setIsSidebarOpen(false); // Close sidebar when button is clicked
            }}
            className="sidebar-signin-btn"
          >
            Sign In
          </button>
        </ul>
      </div>

      {/* Navbar Right Section (Hidden on Small Screens) */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
