/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../assets/images/navbar/tech-utsav-logo.png";
import menu_icon from "../../../assets/images/navbar/icon-menu.svg";
import close_icon from "../../../assets/images/navbar/icon-close.svg";
import { TiHome } from "react-icons/ti";
import { FaSchool } from "react-icons/fa";
import { RiCalendarEventFill } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { GiArchiveRegister } from "react-icons/gi";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { BsRobot } from "react-icons/bs";
import { useNavigate } from "react-router";

const NavbarWrapper = styled.div`
  * {
    padding: 0;
    margin: 0;
    outline: none;
  }
  .page-wrapper {
    position: relative;
    margin: 0 auto;
    width: 100%;
    min-width: 300px;
    background: #fff;
    overflow: hidden;
    z-index: 9;
  }
  .main-header {
    position: fixed;
    top: 0;
    width: inherit;
    z-index: 999;
  }
  .main-header .outer-container {
    position: relative;
    background: white;
  }
  .main-header .nav-blur {
    position: relative;
    box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.4);
    backdrop-filter: blur(8px);
  }
  .main-header .outer-container .logo-box {
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 28px 70px;
  }
  .main-header .outer-container .logo-box a {
    position: relative;
    z-index: 1;
  }
  .menu-area {
    text-align: center;
    position: relative;
  }
  .main-menu .navbar-collapse {
    padding: 0px;
    display: block !important;
  }
  .logo-box img {
    display: inline-block;
    max-width: 100%;
    position: relative;
    height: 60px;
    margin-top: 21px;
    bottom: 36px;
  }
  .main-menu .navigation {
    position: inherit;
    margin: 0px;
  }
  ul,
  li {
    list-style: none;
    margin: 0px;
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .main-menu .navigation > li:first-child {
    margin-left: 0px !important;
  }
  .main-menu .navigation li {
    position: inherit;
    display: inline-block;
    text-align: left;
    padding: 29px 0px 29px 0px;
  }
  .main-menu .navigation > li > a {
    position: relative;
    display: block;
    text-align: center;
    font-size: 17px;
    line-height: 30px;
    font-weight: 600;
    opacity: 1;
    color: #282828;
    padding: 0px;
    z-index: 1;
  }
  .main-menu .navigation > li > a:hover,
  .active-url {
    color: #2868c5 !important;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    background: transparent;
  }
  .btn-box {
    position: absolute;
    top: 17px;
    right: 30px;
  }
  .events-dropdown {
    display: none;
  }
  .events-main-nav:hover {
    .events-dropdown {
      background: white;
      display: flex;
      flex-direction: column;
      padding-top: 5px;
      box-shadow: rgba(23, 24, 34, 0.2) 3px 6px 6px;
    }
    .events-dropdown span {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
  .events-dropdown span:hover {
    background: #ebebf0;
  }
  .btn-box a {
    position: relative;
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    font-family: "Poppins", sans-serif;
    background-image: linear-gradient(
      90deg,
      #ffbc45 0%,
      #ff5959 51%,
      #ffbc45 100%
    );
    padding: 15px 50px;
    background-size: 200% auto;
    z-index: 1;
    border-radius: 29px;
    border-bottom-left-radius: 0;
  }
  .mobile-container {
    display: none;
  }
  @media only screen and (max-width: 690px) {
    .outer-container {
      display: none;
    }
    .mobile-container {
      display: flex;
      justify-content: space-between;
      padding: 5px 20px;
      background: #fff;
      align-items: center;
      box-shadow: rgba(23, 24, 34, 0.2) 0px 1px 4px;
    }
    .logo-box-mobile img {
      height: 40px;
      margin: 7px 0;
    }
    .nav-lists-mobile {
      width: 100%;
      height: calc(100vh - 64px);
      top: 64px;
      background: white;
      left: 0;
    }
    .navigation li {
      padding: 0 !important;
    }
    .main-menu .navigation {
      position: inherit;
      margin: 0px;
      padding-top: 85px;
      margin-left: 40px;
      margin-right: 10px;
    }
    .main-menu .navigation > li > a {
      display: flex;
    }
    .active-url {
      border-right: 6px solid #2868c5;
      border-radius: 6px;
    }
    .events-dropdown-mob {
      background: white;
      display: flex;
      flex-direction: column;
      padding-top: 5px;
      padding-left: 20px;
    }
    .events-dropdown-mob span {
      padding: 10px 7px;
      font-weight: 600;
    }
  }
`;

const Navbar = () => {
  const [isNavbarBlur, setIsNavbarBlur] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const queryURL = window.location.pathname;
  const navigate = useNavigate();

  window.onscroll = function (e) {
    const scrolledCount = window.scrollY;
    if (scrolledCount >= 900) {
      setIsNavbarBlur(true);
    } else {
      setIsNavbarBlur(false);
    }
  };

  return (
    <NavbarWrapper>
      <div className="page-wrapper">
        <header className={`main-header`}>
          <div
            className={`outer-container ${
              isNavbarBlur ? "nav-blur" : ""
            } clearfix`}
          >
            <div className="logo-box">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="menu-area clearfix">
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation scroll-nav clearfix">
                    <li>
                      <a
                        href="/"
                        className={`${queryURL === "/" ? "active-url" : ""}`}
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className={`${
                          queryURL === "/about" ? "active-url" : ""
                        }`}
                      >
                        About
                      </a>
                    </li>
                    <li className="events-main-nav relative">
                      <a
                        className={`${
                          queryURL === "/tech-events" || queryURL === "/non-tech-events" ? "active-url" : ""
                        }`}
                      >
                        Events 
                        <IoMdArrowDropdown/>
                      </a>
                      <div className="absolute events-dropdown">
                        <span className="font-15" onClick={() => navigate("/tech-events")}>Tech Events</span>
                        <span className="font-15" onClick={() => navigate("/non-tech-events")}>Non-Tech Events</span>
                      </div>
                    </li>
                    <li>
                      <a
                        href="/registration"
                        className={`${
                          queryURL === "/registration" ? "active-url" : ""
                        }`}
                      >
                        Registration
                      </a>
                    </li>
                    <li>
                      <a
                        href="/support"
                        className={`${
                          queryURL === "/support" ? "active-url" : ""
                        }`}
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {queryURL !== "/registration" && (
              <div className="btn-box">
                <a href="/registration">Get Started</a>
              </div>
            )}
          </div>
          <div className="mobile-container">
            <div className="logo-box-mobile">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div>
              {!isNavOpen ? (
                <img
                  src={menu_icon}
                  alt="menu"
                  onClick={() => setIsNavOpen(true)}
                  className="cursor-pointer"
                />
              ) : (
                <img
                  src={close_icon}
                  alt="close"
                  onClick={() => setIsNavOpen(false)}
                  className="cursor-pointer"
                />
              )}
            </div>
            {isNavOpen && (
              <div className="absolute nav-lists-mobile">
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation scroll-nav flex flex-col gap10 clearfix">
                      <li>
                        <a
                          href="/"
                          className={`${
                            queryURL === "/" ? "active-url" : ""
                          } flex items-center gap5`}
                        >
                          <TiHome />
                          <span>Home</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          className={`${
                            queryURL === "/about" ? "active-url" : ""
                          } flex items-center gap5`}
                        >
                          <FaSchool /> <span>About</span>
                        </a>
                      </li>
                      <li className="events-main-nav-mob relative">
                        <a
                          onClick={() => setIsEventOpen(!isEventOpen)}
                          className={`${
                            queryURL === "/tech-events" || queryURL === "/non-tech-events" ? "active-url" : ""
                          } flex items-center gap5`}
                        >
                          <RiCalendarEventFill />
                          Events
                          {!isEventOpen ? 
                            <IoMdArrowDropdown/> : <IoMdArrowDropup />
                          }
                        </a>
                        {isEventOpen &&
                          <div className="events-dropdown-mob">
                            <div className="flex items-center">
                              <BsRobot /><span className="font-15" onClick={() => navigate("/tech-events")}>Tech Events</span>
                            </div>
                            <div className="flex items-center">
                              <TbDeviceGamepad2 /><span className="font-15" onClick={() => navigate("/non-tech-events")}>Non-Tech Events</span>
                            </div>
                          </div>
                        }
                      </li>
                      <li>
                        <a
                          href="/registration"
                          className={`${
                            queryURL === "/registration" ? "active-url" : ""
                          } flex items-center gap5`}
                        >
                          <GiArchiveRegister />
                          <span>Registration</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/support"
                          className={`${
                            queryURL === "/support" ? "active-url" : ""
                          } flex items-center gap5`}
                        >
                          <BiSupport />
                          <span>Support</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
