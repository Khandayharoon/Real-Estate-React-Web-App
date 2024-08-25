import React from "react";
import './Footer.css'

const Footer = ()=>(
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">

            {/* Left Side */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" />
                <span className="secondaryText">
                    Our Vision is to make all People <br></br>
                    the best place to live for them.!!!
                </span>
            </div>

            {/* Right Side */}
            <div className="f-right flexColStart">
                <span className="primaryText">Information</span>
                <span className="secondaryText"> 145 New York , FL 4751, USA</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About us</span>
                </div>
            </div>
            <div>
                <span className="primaryText">© Haroon Nissar Khanday ❤</span>
            </div>
        </div>
    </section>
)

export default Footer;