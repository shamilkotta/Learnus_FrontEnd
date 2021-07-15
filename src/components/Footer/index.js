import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import './index.scss'

function Footer() {
    return (
        <section className="footer-container">
            <div className="footer wrapper">
                <div className="footer__main">
                    <div className="footer__description">
                        <div className="footer__brand">
                            <div className="brand__logo">
                                <h1><span>My</span>Course</h1>
                            </div>
                            <div className="brand__about">
                                <p className="p">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet Semper at elit.</p>
                            </div>
                            <div className="brand__social">  
                                <FaTwitter className="social__icon"/> 
                                <FaInstagram className="social__icon"/> 
                                <FaLinkedinIn className="social__icon"/> 
                                <FaFacebookF className="social__icon"/>
                            </div>
                        </div>
                        <div className="footer__info">
                            <p className="info__head">CONTACT INFO</p>
                            <p className="info__description">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula.
                                <br/><br/> <span style={{color: 'white', fontWeight: 'bold'}}>Address</span> : Preventive, 343 Honey Avenue street, NY - 62617.
                                <br/> <span style={{color: 'white', fontWeight: 'bold'}}>Phone</span> : +12 23456799
                                <br/> <span style={{color: 'white', fontWeight: 'bold'}}>Email</span> : info@example.com
                            </p>
                        </div>
                    </div>
                    <div className="footer__links">
                        <div>
                            <div className="links__head">
                                <p>COMPANY</p>
                            </div>
                            <p className="links__link">UI/UX Design</p>
                            <p className="links__link">UI/UX Design</p>
                            <p className="links__link">UI/UX Design</p>
                            <p className="links__link">UI/UX Design</p>
                            <p className="links__link">UI/UX Design</p>
                        </div>
                        <div>
                            <div className="links__head">
                                <p>COMPANY</p>
                            </div>
                            <p className="links__link">UI/UX Design</p>
                            <p className="links__link">UI/UX Design</p>
                            <p className="links__link">UI/UX Design</p>
                            <p className="links__link">UI/UX Design</p>
                            <p className="links__link">UI/UX Design</p>
                        </div>  
                    </div>
                </div>
                <div className="footer__copyright">
                    <p className="p">© 2021 Lorem ipsum viverra feugiat. Pellen tesque libero ut</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
