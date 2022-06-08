import React from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import {
  FaSignInAlt,
  FaGlassCheers,
  FaGlassMartiniAlt,
  FaHamburger,
  FaInfo,
  FaCoffee,
} from "react-icons/fa";
function TopMenu() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-Menu") {
      x.className += " responsive";
    } else {
      x.className = "top-Menu";
    }
  }
  return (
    <div className="top-Menu" id="myTopnav">
      <div className="menu-brand">
        <span>
          <FaCoffee />
        </span>
        <h2>Coffee Land</h2>
      </div>
      <div className="menu-nav">
        <nav>
          <ul>
            <li>
              <a href="#">
                <FaGlassCheers />
                نوشیدنی
              </a>
              <BsChevronDown />
            </li>
            <li>
              <a href="#">
                <FaGlassMartiniAlt />
                شیک
              </a>
            </li>
            <li>
              <FaHamburger />
              <a href="#">فست فود</a>
            </li>
            <li>
              <FaInfo />
              <a href="#">درباره ما</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-toggler">
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default TopMenu;
