import React, { useEffect, useState } from "react";
import logo from '../../assets/logo.svg';
import { NavLink, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

function Header(props) {
    polyfillCountryFlagEmojis();
    const { t, i18n } = useTranslation();
    

    const [menuToggle, setMenuToggle] = useState(false);
    const [chosenLang, setChosenLang] = useState('mk');
    
	const [searchParams, setSearchParams] = useSearchParams();


    const changeLanguage = (lang) => {
        setChosenLang(lang);

        const params = new URLSearchParams();

        params.set('lang', lang);
        setSearchParams(params);

        i18n.changeLanguage(lang);
    }

    useEffect(() => {
        if (!searchParams.get('lang')) {
            const url = new URL(window.location);
            url.searchParams.set('lang', 'mk');
            window.history.pushState({}, "", url.href);

            i18n.changeLanguage('mk');
            
            return;
        }

        setChosenLang(searchParams.get('lang'));
        i18n.changeLanguage(searchParams.get('lang'));
    }, [searchParams, i18n, setSearchParams]);

    const categories = props.data.reduce((acc, data) => {
        const category = chosenLang === 'mk' ? data.categoryMk : data.category;
        const subCategory = chosenLang === 'mk' ? data.subCategoryMk : data.subCategory;

        if(!acc[data.category]) {
            acc[data.category] = []
        }

        if(!acc[data.category][category]) {
            acc[data.category][category] = []
        }

        if (!acc[data.category][category][subCategory]) {
            acc[data.category][category][subCategory] = []
        }

        acc[data.category][category][subCategory].push({
            title: data.name
        });

        return acc;
    }, []);


    const formattedCategories = [];
    Object.entries(categories).forEach(category => {
        const categoryLink = category[0];
        const categoryTitle = Object.keys(category[1])[0];

        const subMenus = Object.entries(category[1][categoryTitle])
        .map((value) => {
            // console.log(value);
                return {
                    title: value[0],
                    subMenus: value[1]
                }
            }).reverse();

        formattedCategories.push({
            link: categoryLink,
            title: categoryTitle,
            subMenus
        })
    });

    const headerLinks = [
        {
            link:'home',
            title: t('header.home'),
            subMenus: []
        },
        {
            link: 'service',
            title: t('header.service'),
            subMenus: []
        },
        {
            link: 'products',
            title: t('header.products'),
            subMenus: formattedCategories.reverse()
        },
        {
            link: 'news',
            title: t('header.news'),
            subMenus: []
        },
        {
            link: 'contact',
            title: t('header.contact'),
            subMenus: []
        },
    ];

    return (
        <div className={`ps-navigation-wrapper fixed-top ${ menuToggle ? 'menu_open' : ''}`}>
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-7 col-md-12 col-9">
                    <div className="ps-main-logo">
                        <NavLink to={`/home?lang=${chosenLang}`} onClick={() => window.scrollTo(0, 0)}>
                            <img src={logo} alt='' />
                        </NavLink>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-4 col-md-12 ps-toggle-responsive">
                    <div className="row">
                        <span onClick={() => { setMenuToggle(false) } } className="close-button"> X </span>
                    </div>
                    <div className="ps-navbar">
                        <ul className="ps-toggle">
                            { headerLinks.map((link, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li
                                            className='ps-menu-children dropdown'
                                            onMouseEnter={() => {
                                                if (window.innerWidth < 1200) {
                                                    return;
                                                }

                                                if (!link.subMenus?.length || window.innerWidth < 768) {
                                                    return;
                                                }

                                                const subMenuClasslist = document.querySelector('.ps-submenu').classList

                                                const icon  = document.querySelector('.icon-1').classList;
                                                icon.add('fa-caret-up');
                                                subMenuClasslist.add('active');
                                            }}
                                            onMouseLeave={() => {
                                                if (window.innerWidth < 1200) {
                                                    return;
                                                }

                                                const subMenuClasslist = document.querySelector('.ps-submenu').classList

                                                document.querySelectorAll('.ps-submenu1').forEach(submenu => {
                                                    submenu.classList.remove('active');
                                                });

                                                document.querySelectorAll('i').forEach(icon => {
                                                    icon.classList.remove('fa-caret-up');
                                                });

                                                subMenuClasslist.remove('active');
                                            }}
                                        >
                                            <NavLink
                                                to={link.link + `?lang=${chosenLang}`}
                                                className='ps-title'
                                                onClick={() => { window.scrollTo(0, 0); setMenuToggle(false); }}
                                            >
                                                <span>
                                                    {link.title}
                                                </span>
                                            </NavLink>
                                            {
                                                link.subMenus.length
                                                    ? <i className='icon-1 fa fa-caret-down' onClick={() => {
                                                        const subMenuClasslist = document.querySelector('.ps-submenu').classList
                                                        const icon  = document.querySelector('.icon-1').classList;

                                                        if (subMenuClasslist.contains('active')) {
                                                            subMenuClasslist.remove('active');
                                                            icon.remove('fa-caret-up');

                                                            return; 
                                                        }

                                                        icon.add('fa-caret-up');
                                                        subMenuClasslist.add('active');
                                                    }}></i>
                                                    : ''
                                            } 
                                            { link.subMenus.length ?
                                                <ul className="ps-submenu">
                                                    { link.subMenus.map((subMenu, index) => {
                                                        return (   
                                                            <li
                                                                key={index}
                                                                className="dropdown1"
                                                            >
                                                                <NavLink
                                                                    to={`/products?lang=${chosenLang}&category=${subMenu.link}`}
                                                                    key={index}
                                                                    onClick={() => { window.scrollTo(0, 0); setMenuToggle(false) }}
                                                                    onMouseEnter={() => {
                                                                        if (window.innerWidth < 1200) {
                                                                            return;
                                                                        }

                                                                        document.querySelectorAll('.ps-submenu1').forEach((submenu, arrayIndex) => {
                                                                            if (arrayIndex !== index) {
                                                                                submenu.classList.remove('active');
                                                                            }
                                                                        });

                                                                        document.querySelectorAll('i.dropdown-icon').forEach(icon => {
                                                                            icon.classList.remove('fa-caret-up');
                                                                        });

                                                                        document.querySelector('.ps-submenu').classList.add('active');
                                                                        const subMenuClasslist = document.querySelectorAll('.ps-submenu1')[index].classList
                        
                                                                        const icon  = document.querySelectorAll('.icon-2')[index].classList;
                                                                        icon.add('fa-caret-up');
                                                                        subMenuClasslist.add('active');
                                                                    }}
                                                                >
                                                                    {subMenu.title}
                                                                </NavLink>
                                                                <i className='icon-2 fa fa-caret-down dropdown-icon' onClick={() => {
                                                                    if (document.querySelectorAll('.ps-submenu1')[index].classList.contains('active')) {
                                                                        document.querySelectorAll('.ps-submenu1')[index].classList.remove('active');
                                                                        document.querySelectorAll('i.dropdown-icon')[index].classList.remove('fa-caret-up');

                                                                        return;
                                                                    }

                                                                    document.querySelectorAll('.ps-submenu1').forEach((submenu) => {
                                                                        submenu.classList.remove('active');
                                                                    });

                                                                    document.querySelectorAll('i.dropdown-icon').forEach(icon => {
                                                                        icon.classList.remove('fa-caret-up');
                                                                    });

                                                                    document.querySelector('.ps-submenu').classList.add('active');
                                                                    const subMenuClasslist = document.querySelectorAll('.ps-submenu1')[index].classList
                    
                                                                    const icon  = document.querySelectorAll('.icon-2')[index].classList;
                                                                    icon.add('fa-caret-up');
                                                                    subMenuClasslist.add('active');
                                                                }}></i>
                                                                <ul
                                                                    className="ps-submenu1"
                                                                    onMouseLeave={() => {
                                                                        if (window.innerWidth < 1200) {
                                                                            return;
                                                                        }

                                                                        const subMenuClasslist = document.querySelectorAll('.ps-submenu1')[index].classList
                                                                        const icon  = document.querySelectorAll('.icon-2')[index].classList;

                                                                        icon.remove('fa-caret-up');
                                                                        subMenuClasslist.remove('active');
                                                                    }}
                                                                >
                                                                    { subMenu.subMenus.map((menu, index) => {
                                                                        return (
                                                                            <li
                                                                                key={index}
                                                                                className="dropdown2"
                                                                            >
                                                                                <span>{menu.title}</span>
                                                                                <ul className="ps-submenu2">
                                                                                    { menu.subMenus.map((final, index) => {
                                                                                        return (
                                                                                            <li key={index}>
                                                                                                <NavLink
                                                                                                    to={`/products?lang=${chosenLang}&brand=${final.title}`} key={index}
                                                                                                    onClick={() => { window.scrollTo(0, 0); setMenuToggle(false);}}
                                                                                                >
                                                                                                    {final.title}
                                                                                                </NavLink>
                                                                                            </li>
                                                                                        )
                                                                                    })}
                                                                                </ul>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </li>
                                                        )
                                                    })}
                                                </ul> : <React.Fragment></React.Fragment>
                                            }
                                        </li>
                                    </React.Fragment>
                                )
                            })}
                            <li className="lanugage-select">
                                <select value={chosenLang} onChange={(e) => { changeLanguage(e.target.value) }}>
                                    <option value="mk">
                                        🇲🇰
                                    </option>
                                    <option value="en">
                                        🇬🇧
                                    </option>
                                </select>
                            </li>
                        </ul>
                    </div>			
                </div>
                <div className="col-xl-2 col-lg-4 col-md-12 col-12">
                    <div className="ps-navigation-main-wrapper">					
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