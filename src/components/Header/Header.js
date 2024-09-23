import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';
import React, { useState } from "react";

function Header() {
    const headerLinks = [
        {
            title: 'Home',
            subMenus: []
        },
        {
            title: 'Products',
            subMenus: [
                'Placeholder 1',
                'Placeholder 2',
                'Placeholder 3'
            ]
        },
        {
            title: 'Service',
            subMenus: []
        },
        {
            title: 'News',
            subMenus: []
        },
        {
            title: 'Contact',
            subMenus: []
        },
    ];

    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className={`ps-navigation-wrapper ${ menuToggle ? 'menu_open' : ''}`}>
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7 col-md-12 col-9">
                    <div className="ps-main-logo">
                        <img src={logo} alt='' />
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 ps-toggle-responsive">
                    <div className="ps-navbar">
                        <ul className="ps-toggle">
                            { headerLinks.map((link, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li
                                            className='ps-menu-children dropdown'
                                            onMouseEnter={() => { document.getElementsByClassName('ps-submenu')[0].classList.add('active') }}
                                            onMouseLeave={() => { document.getElementsByClassName('ps-submenu')[0].classList.remove('active') }}
                                        >
                                            <NavLink to={link.title.toLowerCase()} className='ps-title'>
                                                {link.title}
                                                <i className={`${link.subMenus.length ? 'fa fa-caret-down' : '' }`}></i>
                                            </NavLink>
                                            { link.subMenus.length ?
                                                <ul className="ps-submenu">
                                                    { link.subMenus.map((subMenu, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <span>{subMenu}</span>
                                                            </li>
                                                        )
                                                    })}
                                                </ul> : <React.Fragment></React.Fragment>
                                            }
                                        </li>
                                    </React.Fragment>
                                )
                            })}
                        </ul>
                    </div>			
                </div>
                <div className="col-xl-2 col-lg-4 col-md-12 col-12">
                    <div className="ps-navigation-main-wrapper">					
                        <div className="ps-navigation-header-search">
                            <div className="ps-navigation-input">
                                <input text="" placeholder="Search Your Product Here" />
                                <span className="fa fa-search"></span>
                            </div>
                        </div>
                        <div className="ps-toggle-btn" onClick={() => { setMenuToggle(!menuToggle) }}>
                            <span className="fa fa-bars"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;