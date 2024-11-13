import React from "react";
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import "./Header.css"
import NetflixLogo from "../../Assets/Images/Netflix.logo.png";

function Header() {
  return (
    <section>
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix logo" />
            </li>
            <li>Home</li>
            <li>Tvshow</li>
            <li> Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>browse by language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <IoMdSearch />
            </li>
            <li>
              <IoNotificationsOutline />
            </li>
            <li>
              <MdOutlineAccountCircle />
            </li>
            <li>
              <IoMdArrowDropdownCircle />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
