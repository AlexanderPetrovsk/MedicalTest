import React from "react";
import { NavLink } from "react-router-dom";

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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="ps-footer-link">
                                <h4>Links</h4>
                                <ul>
                                    { footerLinks.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink to={link.toLowerCase()}>
                                                    {link}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="ps-footer-link">
                                <h4>Products</h4>
                                <ul>
                                    { productsSubmenu.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink to={link.toLowerCase()}>
                                                    {link}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
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
            </div>
        </React.Fragment>
    )
}

export default Footer;