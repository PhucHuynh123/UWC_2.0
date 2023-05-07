import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
    return (
        <div className="footer">
            <div className="content">
                <img src={logo} className="logo" alt="logo"/>
                <div className="contact">
                    <h3>Liên hệ</h3>
                    <p>abc@gmail.com</p>
                </div>
                <div className="follow">
                    <h3>Theo dõi</h3>
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>Linkedin</p>
                </div>
            </div>
            <div className="bottomFooter">
                <span>Copy right © 2022-2023</span>
                <span>2023 Privacy Policy.</span>
            </div>
        </div>
    );
}

export default Footer;
