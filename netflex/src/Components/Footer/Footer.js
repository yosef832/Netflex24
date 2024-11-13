import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import "./footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer_container">
        <div className="Footer_icon">
          <a href="">
            <CiFacebook className="icon" />
          </a>
          <a href="">
            <FaInstagram className="icon" />
          </a>
          <a href="">
            <CiYoutube className="icon" />
          </a>
        </div>
        <div className="Footer_zero">
          <ul>
            <li>Audio Discription</li>
            <li>Invester Relations</li>
            <li>LegalNotice</li>
          </ul>
        </div>
      </div>
      <div className="Footer_zero">
        <ul>
          <li>Help center</li>
          <li>Jobs</li>
          <li>coocies preference</li>
        </ul>
      </div>
      <div className="Footer_zero">
        <ul>
          <li>Gift cards</li>
          <li>Terms of user</li>
          <li>coarporate information</li>
        </ul>
      </div>
      <div className="Footer_zero">
        <ul>
          <li>Media center</li>
          <li>Privacy</li>
          <li>contact us</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
