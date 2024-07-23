import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { FormattedMessage } from "react-intl";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [active, setActive] = useState(false);

  const handleMenuToggle = () => setActive(prev => !prev);

  const isActive = (path) => {
    return currentPath === path || (path === "/#products" && currentPath.startsWith("/#"));
  };

  return (
    <div>
      {/* Header */}
      <div
        id="sticker-sticky-wrapper"
        className="sticky-wrapper"
        style={{ height: "86px" }}
      >
        <div className="top-header-area" id="sticker">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 text-center">
                <div className="main-menu-wrap">
                  <nav className="main-menu">
                    <div className="site-logo">
                      <a href="/">
                        <img src="../assets/img/logo.png" alt="Logo" />
                      </a>
                    </div>
                    <ul>
                      <li className={isActive("/") ? "current-list-item" : ""}>
                        <Link to="/">
                          <FormattedMessage id="header.home" />
                        </Link>
                      </li>
                      <li className={isActive("/about") ? "current-list-item" : ""}>
                        <Link to="/about">
                          <FormattedMessage id="header.about" />
                        </Link>
                      </li>
                      <li className={isActive("/contact") ? "current-list-item" : ""}>
                        <Link to="/contact">
                          <FormattedMessage id="header.contact" />
                        </Link>
                      </li>
                      <li className={isActive("/#products") ? "current-list-item" : ""}>
                        <a href="/#products">
                          <FormattedMessage id="header.products" />
                        </a>
                      </li>
                    </ul>
                    <LanguageSwitcher active={active} setActive={setActive} />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-nav padd">
          <div className="site-logo">
            <a href="/">
              <img src="../assets/img/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="icon" onClick={handleMenuToggle}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
        <div className={`small-nav ${active ? "active" : ""}`}>
          <div className="small-logo">
            <a href="/">
              <img src="../assets/img/logo.png" alt="Logo" />
            </a>
          </div>
          <ul>
            <li onClick={handleMenuToggle} className={isActive("/") ? "current-list-item" : ""}>
              <Link to="/">
                <FormattedMessage id="header.home" />
              </Link>
            </li>
            <li onClick={handleMenuToggle} className={isActive("/about") ? "current-list-item" : ""}>
              <Link to="/about">
                <FormattedMessage id="header.about" />
              </Link>
            </li>
            <li onClick={handleMenuToggle} className={isActive("/contact") ? "current-list-item" : ""}>
              <Link to="/contact">
                <FormattedMessage id="header.contact" />
              </Link>
            </li>
            <li onClick={handleMenuToggle} className={isActive("/#products") ? "current-list-item" : ""}>
              <a href="/#products">
                <FormattedMessage id="header.products" />
              </a>
            </li>
          </ul>
          <LanguageSwitcher active={active} setActive={setActive} />
        </div>
      </div>
      {/* End header */}
    </div>
  );
};

export default Navbar;
