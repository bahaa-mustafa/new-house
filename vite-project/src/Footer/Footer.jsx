import Button from "../Button"
import "./Footer.css"

import img1 from "./assets/f1.png"
import img2 from "./assets/f2.png"
import img3 from "./assets/f3.png"
import img4 from "./assets/f4.png"
import img5 from "./assets/f5.png"
import img6 from "./assets/f6.png"

import { Facebook, Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
// import { Instagram } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <footer className="footer" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="footer_contact">
                            <div className="phone">
                                <a href="#"><Phone color="whitesmoke" /></a>
                                <h5>Call: +02 111100001111</h5>
                            </div>
                            <div className="email">
                                <a href="#"><Mail color="whitesmoke" /></a>
                                <h5>Email: demo@bahaa-mustafa.com</h5>
                            </div>
                            <div className="location">
                                <a href="#"><MapPinHouse color="whitesmoke" /></a>
                                <h5>Location</h5>
                            </div>
                        </div>
                        <div className="footer_elements">
                            <div className="elements_links">
                                <div className="head">
                                    <h5>quick links</h5>
                                </div>
                                <div className="links">
                                    <div className="right">
                                        <a href="#home">Home</a>
                                        <a href="#furniture">Furniture</a>
                                        <a href="#contact">Contact us</a>
                                    </div>
                                    <div className="left">
                                        <a href="#about">About</a>
                                        <a href="#blog">Blog</a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_feeds">
                                <div className="head">
                                    <h5>instagram feeds</h5>
                                </div>
                                <div className="photos">
                                    <div className="list">
                                        <div className="img"><img src={img1} alt="img" /></div>
                                        <div className="img"><img src={img2} alt="img" /></div>
                                        <div className="img"><img src={img3} alt="img" /></div>
                                    </div>
                                    <div className="list">
                                        <div className="img"><img src={img4} alt="img" /></div>
                                        <div className="img"><img src={img5} alt="img" /></div>
                                        <div className="img"><img src={img6} alt="img" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_inputs">
                                <div className="head">
                                    <h5>sign up for our newsletter</h5>
                                </div>
                                <div className="inputs">
                                    <input type="text" placeholder="Enter Your Email" />
                                    <Button title="subscribe" color="blue" />
                                </div>
                                <div className="social">
                                    <a href="#"><Facebook color="#86d2ce" /></a>
                                    <a href="#"><Twitter color="#86d2ce" /></a>
                                    <a href="#"><Linkedin color="#86d2ce" /></a>
                                    <a href="#"><Instagram color="#86d2ce" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer_copy_rights">
                            <h6>&copy; All rights reserver for <a href="#">bahaa-mustafa</a></h6>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}