
import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { getTotalQuantity } = useContext(StoreContext);
  const totalQuantity = getTotalQuantity();

  const [menu, setMenu] = useState("home");
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    // later: filter food items using context/api
    console.log("Searching:", e.target.value);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo-link">
        <img src={assets.tasty} alt="TastyKart Logo" className="logo" />
      </Link>

      {/* Menu */}
      <ul className={`navbar-menu ${openMenu ? "show-menu" : ""}`}>
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => {
            setMenu("home");
            setOpenMenu(false);
          }}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          className={menu === "menu" ? "active" : ""}
          onClick={() => {
            setMenu("menu");
            setOpenMenu(false);
          }}
        >
          Menu
        </a>

        <a
          href="#app-download"
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => {
            setMenu("mobile-app");
            setOpenMenu(false);
          }}
        >
          Mobile App
        </a>

        <a
          href="#footer"
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => {
            setMenu("contact-us");
            setOpenMenu(false);
          }}
        >
          Contact
        </a>
      </ul>

      {/* Right */}
      <div className="navbar-right">
        {/* Search */}
        <div className="search-box">
          {showSearch && (
            <input
              type="text"
              placeholder="Search food..."
              value={searchText}
              onChange={handleSearch}
              autoFocus
            />
          )}

          <img
            src={assets.search_icon}
            alt="search"
            className="icon"
            onClick={() => setShowSearch(!showSearch)}
          />

          {showSearch && (
            <span
              className="close-search"
              onClick={() => {
                setShowSearch(false);
                setSearchText("");
              }}
            >
              ×
            </span>
          )}
        </div>

        {/* Cart */}
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket" className="icon" />
          </Link>

          {totalQuantity > 0 && (
            <div className="dot">
              <p>{totalQuantity}</p>
            </div>
          )}
        </div>

        <button className="sign-in-btn" onClick={() => setShowLogin(true)}>
          Sign In
        </button>

        {/* Hamburger */}
        <div
          className={`hamburger ${openMenu ? "active-ham" : ""}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;