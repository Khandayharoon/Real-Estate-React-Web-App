import React from "react";
import './contact.css';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
const Contact = () =>{
    return(

        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* Left Side */}
                <div className=" flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to contact Us</span>
                    <span className="secondaryText"> We always ready to help you by providing the best service for you . <br /> we belive a good place tp live can make life better!!!</span>
                
                    <div className="flexColStart contactModes">
                            {/* First Row  First Mode*/}
                            <div className="flexStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Call</span>
                                            <span className="secondaryText">021 123 124 12</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Call Now </div>
                                </div>
                            {/* First Row Second Mode */}

                            <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Chat</span>
                                            <span className="secondaryText">021 123 124 12</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Chat Now </div>
                                </div>

                            </div>




                                {/* Second Row First Mode  */}
                                <div className="flexStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Video Call</span>
                                            <span className="secondaryText">021 123 124 12</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Video Call Now </div>
                                </div>
                            {/* Second Row Second Mode */}

                            <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Message</span>
                                            <span className="secondaryText">021 123 124 12</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Message Now </div>
                                </div>

                            </div>
                        
                        </div>
                </div>

                {/* Right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="Contact Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;