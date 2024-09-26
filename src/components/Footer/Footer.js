import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';

function Footer() {
    const footerLinks = [
       'Home',
       'Products',
       'Service',
       'News',
       'Contact'
    ];

    const productsSubmenu = [
        'Rehabilitation',
        'Neurology',
        'Internal Medicine',
    ]
    return (
        <React.Fragment>
            <div className="ps-footer-main-wrapper">
                <div className="mb-5">
                    <div className="row mx-5 justify-content-center">
                        <div className="col-xl-6 col-lg-5 col-md-12 col-3 mb-5 d-flex justify-content-center">
                            <div className="ps-footer-logo">
                                <img src={logo} alt='' />
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-12 mb-5">
                            <div className="ps-footer-link">
                                <h4>Links</h4>
                                <ul>
                                    { footerLinks.map((link, index) => {
                                        return (
                                            <li key={index} onClick={() => window.scrollTo(0, 0)}>
                                                <NavLink to={`/${link.toLowerCase()}`}>
                                                    {link}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-12 mb-5">
                            <div className="ps-footer-link">
                                <h4>Products</h4>
                                <ul>
                                    { productsSubmenu.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink to={`/products?category=${link}`} onClick={() => window.scrollTo(0, 0)}>
                                                    {link}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-3 col-12 mb-5">
                            <div className="ps-footer-link">
                                <h4>Store Location</h4>					
                            </div>
                            <div className="ps-footer-addres">
                                <span className="fas fa-location-dot"></span>						
                                <p>Londonska nm.10/3/4<br />Skopje, Macedonia</p>
                            </div>
                            <div className="ps-footer-addres">
                                <span className="far fa-envelope"></span>
                                <p>info@meditek.com.mk</p>
                            </div>
                            <div className="ps-footer-addres">
                                <span className="fa-solid fa-phone"></span>
                                <p> +389 2 6133025</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="ps-copyright-wrapper">
                    <p>Copyright © All Rights Reserved - Meditek 2024 </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;