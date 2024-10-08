import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import neofect from '../../assets/neofect.svg';
import meden from '../../assets/meden.svg';
import spes from '../../assets/spes.svg';
import contec from '../../assets/contec.png';
import lungs from '../../assets/lungs.svg';
import spa from '../../assets/spa.svg';
import brain from '../../assets/brain.svg';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation'
import { NavLink, useSearchParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { getProductTitle } from '../../utils/common';

function Home(props) {
    const { t, i18n } = useTranslation();

    const productAds = [
        {
            image: product1,
            title: t('home.ads.first.title'),
            subtitle: t('home.ads.first.subtitle'),
            description: t('home.ads.first.description')
        },
        {
            image: product2,
            title: t('home.ads.second.title'),
            subtitle: t('home.ads.second.subtitle'),
            description: t('home.ads.second.description')
        },
        {
            image: product3,
            title: t('home.ads.third.title'),
            subtitle: t('home.ads.third.subtitle'),
            description: t('home.ads.third.description')
        },
    ]

    const brands = [
        {
            image: neofect,
            title: 'Neofect'
        },
        {
            image: meden,
            title: 'Meden Inmed'
        },
        {
            image: spes,
            title: 'Spes Medica'
        },
        {
            image: contec,
            title: 'Contec'
        },
    ];

    const getProductsLayout = (products) => {
        return products.map((product, index) => {
            return (
                <div className="col-lg-3 col-md-6 col-12" key={index}>
                    <NavLink to={`/products/${product.id}?lang=${chosenLang}`} onClick={() => window.scrollTo(0, 0)}>
                        <div className="ps-product-box">
                            <div className="ps-product-img">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="ps-product-info">
                                <h4>{getProductTitle(product)}</h4>
                            </div>
                        </div>
                    </NavLink>
                </div>
            )
        });
    }

    const getNewsDescription = (description) => {
        if (description.length > 150) {
            return description.slice(0, 150) + '...';
        }

        return description.replace(/(<([^>]+)>)/gi, "");
    }

    const getDate = (date) => {
        return new Date(date).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric'});
    }

    const [searchParams] = useSearchParams();
    const [chosenLang, setChosenLang] = useState('mk');
 
    useEffect(() => {
        if (searchParams.get('lang')) {
            setChosenLang(searchParams.get('lang'));
        }

        i18n.changeLanguage(chosenLang);
    }, [i18n, searchParams, chosenLang]);

    return (
        <React.Fragment>
            <div className="ps-banner-swiper-main-wrapper">
                <div className="row">
                    <div className="col-lg-9 col-md-12 mx-auto">
                        <div className="ps-banner-content">
                            <h2>{ parse(t('home.banner')) }</h2>									
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-ad-section-main-wrapper">
                <div className="container-fluid">
                    <div className="ps-ad-wapper">
                        <div className="row ps-ad-resp-wrp align-items-stretch">
                            { productAds.map((product, index) => {
                                return (
                                    <div className="col-lg-4 col-md-8 col-12" key={index}>
                                        <div className="ps-ad-box">
                                            <a href={product.image}>
                                                <img src={product.image} alt="" />
                                            </a>
                                            <div className='ps-overlay'>
                                                <h2>{product.title}</h2>
                                                <h3>{product.subtitle}</h3>
                                                <h5>{product.description}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-best-seller-main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="ps-best-seller-heading">
                                <h4>{t('home.latestProducts')}</h4>
                                <NavLink to={`/products?lang=${chosenLang}`} onClick={() => window.scrollTo(0, 0)}>
                                    { t('home.viewAll') }
                                </NavLink>
                            </div>
                        </div>
                        { getProductsLayout(props.latestProducts) }
                    </div>
                </div>
            </div>
            <div className="ps-brand-main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="ps-best-seller-heading">
                                <h4>{t('home.shopByBrands')}</h4>
                            </div>
                            <div className="ps-brand-logo align-items-center">
                                {brands.map((brand, index) => {
                                    return (
                                        <NavLink to={`/products?lang=${chosenLang}&brand=${brand.title}`} onClick={() => window.scrollTo(0, 0)} key={index}>
                                            <img src={brand.image} key={index} alt=""/>
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-shop-categry-main-wrapper">
                <div className="container">
                    <div className="col-lg-12 mb-5">
                        <div className="ps-shop-categry-left">
                            <h4>{t('home.shopByCategories')}</h4>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <div className="ps-shop-categry-right">
                                <NavLink to={`/products?lang=${chosenLang}&category=Rehabilitation`} onClick={() => window.scrollTo(0, 0)}>
                                    <div className="ps-shop-categry-inner">
                                        <img src={spa} alt=""/>
                                        <p>{t('home.rehabilitation')}</p>
                                    </div>
                                </NavLink>
                                <NavLink to={`/products?lang=${chosenLang}&category=Neurology`} onClick={() => window.scrollTo(0, 0)}>
                                    <div className="ps-shop-categry-inner">
                                        <img src={brain} alt=""/>
                                        <p>{t('home.neurology')}</p>
                                    </div>
                                </NavLink>
                                <NavLink to={`/products?lang=${chosenLang}&category=Internal Medicine`} onClick={() => window.scrollTo(0, 0)}>
                                    <div className="ps-shop-categry-inner">
                                        <img src={lungs} alt=""/>
                                        <p>{t('home.internalMedicine')}</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ps-news-main-wrapper">
                <div className="container">
                    <div className="row ps-news-row-parent">
                        <div className="col-lg-12 col-md-12">
                            <div className="ps-testml-slider-heading">
                                <h4>{t('home.latestNews')}</h4>
                            </div>
                        </div>
                        { props.latestNews.map((news, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="ps-news-box">
                                            <div className="ps-news-inner">
                                                <NavLink to={`/news/${news.id}?lang=${chosenLang}`} onClick={() => window.scrollTo(0, 0)}>
                                                    <div className="ps-news-img">
                                                        <img src={news.image} alt=""/>
                                                        <div className="ps-news-overlay"></div>
                                                        <div className="ps-news-date-btn">
                                                            <div>{getDate(news.createdOn)}</div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <div className="ps-news-content">
                                                    <h4>{news.Title}</h4>
                                                    <div>{ parse(getNewsDescription(news.Content)) }</div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Home;