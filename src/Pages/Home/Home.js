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
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

function Home(props) {

    const productAds = [
        {
            image: product1,
            title: 'Smart Glove',
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            image: product2,
            title: 'Smart Kids',
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            image: product3,
            title: 'Smart Board',
            description: 'Lorem ipsum dolor sit amet.'
        },
    ]

    const slides = [
        {
            description: 'Lorem Ipsum Header Text Conesctetur Dolor Sit Amet Adipisicing elit Ut Labore Et Dolore Magna Aliqua',
        },
        {
            description: 'Sed Do Eius Tempor Incididunt Ut Labore Et Dolore Magna Aliqua, Lorem Ipsum Dolor Sit Amet',
        }
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
                    <NavLink to={`/products/${product.id}`}>
                        <div className="ps-product-box">
                            <div className="ps-product-img">
                                <img src={product.image} alt="" />
                                <div className="ps-product-icon">
                                    <span>
                                        <svg viewBox="0 0 13 14" width="13" height="14">
                                            <path id="Shape 15" className="shp0"
                                                d="M1.67 11.11C1.85 10.92 2.02 10.72 2.2 10.53C3.06 9.6 3.91 8.68 4.77 7.75C5.16 7.34 5.63 7.3 5.95 7.65C6.28 8 6.24 8.5 5.85 8.93C4.9 9.96 3.94 10.99 2.98 12.02C2.9 12.12 2.82 12.21 2.68 12.38C3.19 12.38 3.63 12.38 4.07 12.38C4.62 12.38 4.98 12.73 4.97 13.22C4.95 13.7 4.6 14.02 4.08 14.03C3.03 14.03 1.98 14.03 0.93 14.02C0.34 14.02 0.04 13.73 0.04 13.1C0.03 11.92 0.03 10.74 0.04 9.56C0.04 8.99 0.35 8.64 0.82 8.65C1.28 8.65 1.56 9 1.57 9.58C1.58 10.08 1.57 10.57 1.57 11.06C1.61 11.08 1.64 11.09 1.67 11.11ZM10.31 1.68C9.87 1.68 9.43 1.68 8.99 1.68C8.45 1.67 8.08 1.33 8.1 0.84C8.11 0.36 8.46 0.03 8.98 0.03C10.03 0.03 11.08 0.03 12.13 0.03C12.72 0.03 13.02 0.33 13.02 0.95C13.03 2.13 13.03 3.31 13.02 4.49C13.02 5.06 12.71 5.41 12.25 5.41C11.79 5.41 11.5 5.06 11.49 4.48C11.48 3.99 11.49 3.49 11.49 2.88C11.32 3.05 11.23 3.14 11.14 3.23C10.2 4.25 9.27 5.26 8.32 6.27C8.18 6.41 8 6.56 7.82 6.61C7.46 6.71 7.15 6.56 6.98 6.2C6.81 5.82 6.89 5.48 7.16 5.18C7.97 4.31 8.78 3.43 9.6 2.56C9.84 2.29 10.1 2.03 10.36 1.77C10.34 1.74 10.33 1.71 10.31 1.68ZM10.38 12.25C9.37 11.19 8.35 10.13 7.34 9.06C7.24 8.96 7.14 8.85 7.05 8.73C6.81 8.39 6.85 7.94 7.12 7.65C7.4 7.36 7.83 7.33 8.14 7.6C8.31 7.76 8.47 7.94 8.63 8.12C9.57 9.09 10.5 10.07 11.45 11.06C11.46 10.99 11.48 10.89 11.48 10.8C11.49 10.33 11.47 9.86 11.5 9.4C11.53 8.94 11.85 8.64 12.26 8.65C12.66 8.65 13 8.94 13.01 9.38C13.03 10.68 13.03 11.98 13.01 13.28C13 13.72 12.68 14.02 12.27 14.02C11.13 14.03 9.99 14.03 8.85 14.02C8.42 14.02 8.1 13.64 8.1 13.21C8.09 12.75 8.43 12.39 8.89 12.38C9.36 12.37 9.83 12.38 10.3 12.38C10.33 12.34 10.35 12.29 10.38 12.25ZM1.58 2.88C1.58 3.48 1.58 3.96 1.57 4.43C1.57 5.05 1.28 5.4 0.81 5.41C0.34 5.42 0.04 5.06 0.04 4.45C0.03 3.3 0.03 2.15 0.04 1C0.04 0.32 0.33 0.03 0.96 0.03C1.99 0.03 3.01 0.03 4.04 0.03C4.61 0.03 4.98 0.37 4.97 0.87C4.95 1.36 4.6 1.67 4.04 1.68C3.63 1.68 3.22 1.68 2.81 1.68C2.79 1.68 2.77 1.71 2.73 1.74C2.81 1.84 2.89 1.94 2.98 2.03C3.92 3.04 4.86 4.05 5.79 5.07C6.23 5.54 6.29 6.03 5.95 6.4C5.61 6.77 5.14 6.71 4.71 6.24C3.78 5.24 2.86 4.24 1.93 3.23C1.84 3.14 1.75 3.05 1.58 2.88Z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="ps-product-info">
                                <h4>{product.title}</h4>
                                <p>${product.price}</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            )
        });
    }

    return (
        <React.Fragment>
            <div className="ps-banner-swiper-main-wrapper">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation
                    loop
                >
                    { slides.map((slide, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="row">
                                    <div className="col-lg-9 col-md-12">
                                        <div className="ps-banner-content">
                                            <h2>{ slide.description }</h2>									
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }) }
                </Swiper>
            </div>
            <div className="ps-ad-section-main-wrapper">
                <div className="container-fluid">
                    <div className="ps-ad-wapper">
                        <div className="row ps-ad-resp-wrp align-items-stretch">
                            { productAds.map((product, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-12" key={index}>
                                        <div className="ps-ad-box">
                                            <a href={product.image}>
                                                <img src={product.image} alt="" />
                                            </a>
                                            <div className='ps-overlay'>
                                                <h2>{product.title}</h2>
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
                                <h4>Latest Products</h4>
                                <NavLink to='/products'>View All</NavLink>
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
                                <h4>Shop by brands</h4>
                            </div>
                            <div className="ps-brand-logo align-items-center">
                                {brands.map((brand, index) => {
                                    return (
                                        <NavLink to={`/products?brand=${brand.title}`}>
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
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="ps-shop-categry-left">
                                <h4>Shop by categories</h4>
                                <p>consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua
                                    enim ad minim veniam nostrud exercit.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="ps-shop-categry-right">
                                <NavLink to='/products?category=Rehabilitation'>
                                    <div className="ps-shop-categry-inner">
                                        <img src={spa} alt=""/>
                                        <p>Rehab</p>
                                    </div>
                                </NavLink>
                                <NavLink to='/products?category=Neurology'>
                                    <div className="ps-shop-categry-inner">
                                        <img src={brain} alt=""/>
                                        <p>Neurology</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/products?category=Internal Medicine">
                                    <div className="ps-shop-categry-inner">
                                        <img src={lungs} alt=""/>
                                        <p>Internal Medicine</p>
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
                                <h4>Latest News</h4>
                            </div>
                        </div>
                        { props.latestNews.map((news, index) => {
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <NavLink to={`/news/${news.id}`}>
                                        <div className="ps-news-box">
                                            <div className="ps-news-inner">
                                                <div className="ps-news-img">
                                                    <img src={news.image} alt=""/>
                                                    <div className="ps-news-overlay"></div>
                                                    <div className="ps-news-date-btn">
                                                        <div>JULY 29, 2021</div>
                                                    </div>
                                                </div>
                                                <div className="ps-news-content">
                                                    <h4>Contrary to popular beliefpsum is not
                                                        simply random and text.</h4>
                                                    <p>consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna
                                                        aliqua enim ad minim veniam nostrud exercit.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
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