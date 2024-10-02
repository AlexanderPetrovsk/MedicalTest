import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { useTranslation } from "react-i18next";

function Footer() {
    const { t, i18n } = useTranslation();

    const footerLinks = [
       {
        title: t('header.home'),
        link: 'home'
       },
       {
        title: t('header.products'),
        link: 'products'
       },
       {
        title: t('header.service'),
        link: 'service'
       },
       {
        title: t('header.news'),
        link: 'news'
       },
       {
        title: t('header.contact'),
        link: 'contact'
       },
    ];

    const productsSubmenu = [
        {
            title: t('footer.rehabilitation'),
            link: 'Rehabilitation'
        },
        {
            title: t('footer.neurology'),
            link: 'Neurology'
        },
        {
            title: t('footer.internalMedicine'),
            link: 'Internal Medicine'
        },
    ];

   
    const [searchParams] = useSearchParams();
    const [chosenLang, setChosenLang] = useState('mk');

    useEffect(() => {
        if (searchParams.get('lang')) {
            setChosenLang(searchParams.get('lang'));
        }

        i18n.changeLanguage(searchParams.get('lang'));
    }, [i18n, searchParams]);

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
                                <h4>{t('footer.links')}</h4>
                                <ul>
                                    { footerLinks.map((link, index) => {
                                        return (
                                            <li key={index} onClick={() => window.scrollTo(0, 0)}>
                                                <NavLink to={`/${link.link}?lang=${chosenLang}`}>
                                                    {link.title}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3 col-12 mb-5">
                            <div className="ps-footer-link">
                                <h4>{t('footer.products')}</h4>
                                <ul>
                                    { productsSubmenu.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <NavLink to={`/products?lang=${chosenLang}&category=${link.link}`} onClick={() => window.scrollTo(0, 0)}>
                                                    {link.title}
                                                </NavLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-3 col-12 mb-5">
                            <div className="ps-footer-link">
                                <h4>{t('footer.storeLocation')}</h4>					
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