import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <span className="logo_name">
                <span style={{ color: "#f43f5e" }}>Book</span>Swap
              </span>
            </div>
            <div className="media-icons">
              <IconContext.Provider value={{  size: 32}}>
              <div style={{ display: 'flex', position: 'relative', }}>
                <Link to="https://www.instagram.com/thejalajpandey/">
                  <FaInstagram className="icon1" style={{ display: 'flex', position: 'relative',left:4, top:4 }}/>
                </Link>
                <Link to="https://www.linkedin.com/in/jalaj-pandey/">
                  <CiLinkedin style={{ display: 'flex', position: 'relative',left:4, top:4,}}/>
                </Link>
                <Link to="https://github.com/jalaj-pandey">
                  <FaGithub style={{ display: 'flex', position: 'relative',left:4, top:4 }}/>
                </Link>
                </div>
              </IconContext.Provider>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/login">Get started</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <Link to="/admin/dashboard">Sell Books</Link>
              </li>
              <li>
                <Link to="/shop">Buy Books</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <Link to="/login">Sign-in</Link>
              </li>
              <li>
                <Link to="/sign-up">Join Free</Link>
              </li>
            </ul>

            <ul className="box input-box">
              <li className="link_name">About BookSwap</li>
              <li style={{ color: "#F7FFFF" }}>
                Browse, buy, and sell with ease on our Second-Hand Book Buy and
                Sell Project.
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2024 <Link to="/">BookSwap</Link>
            </span>
            <span className="policy_terms">
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
