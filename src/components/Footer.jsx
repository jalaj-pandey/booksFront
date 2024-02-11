import React from 'react'
import '../styles/footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="content">
                <div className="top">
                    <div className="logo-details">
                        <span className="logo_name"><span style={{ color: "#f43f5e" }}>Book</span>Swap</span>
                    </div>
                    <div className="media-icons">
                        <Link to="https://www.instagram.com/thejalajpandey/"><i className="fab fa-instagram"></i></Link>
                        <Link to="https://www.linkedin.com/in/jalaj-pandey/"><i className="fa-solid fa-camera-retro" aria-hidden="true"></i></Link>
                        <Link to="https://github.com/jalaj-pandey"><i className="fa-brands fa-github"></i></Link>
                    </div>
                </div>
                <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">Company</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/signin">Get started</Link></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><Link to="/admin/dashboard">Sell Books</Link></li>
                        <li><Link to="/shop">Buy Books</Link></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Account</li>
                        <li><Link to="/login">Sign-in</Link></li>
                        <li><Link to="/sign-up">Join Free</Link></li>
                    </ul>

                    <ul className="box input-box">
                        <li className="link_name">About BookSwap</li>
                        <li style={{ color: "#F7FFFF" }}>
                        Browse, buy, and sell with ease on our Second-Hand Book Buy and Sell Project. 
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2024 <Link to="/">BookSwap</Link></span>
                    <span className="policy_terms">
                        <Link to="/">Privacy policy</Link>
                        <Link to="/">Terms & condition</Link>
                    </span>
                </div>
            </div>
        </footer>
    </div>
)
}

export default Footer