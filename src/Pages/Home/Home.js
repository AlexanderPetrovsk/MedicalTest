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
import React from 'react';
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
                    <NavLink to={`/products/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
                        <div className="ps-product-box">
                            <div className="ps-product-img">
                                <img src={product.image} alt="" />
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
                                <NavLink to='/products' onClick={() => window.scrollTo(0, 0)}>View All</NavLink>
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
                                        <NavLink to={`/products?brand=${brand.title}`} onClick={() => window.scrollTo(0, 0)}>
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
                                <NavLink to='/products?category=Rehabilitation' onClick={() => window.scrollTo(0, 0)}>
                                    <div className="ps-shop-categry-inner">
                                        <img src={spa} alt=""/>
                                        <p>Rehab</p>
                                    </div>
                                </NavLink>
                                <NavLink to='/products?category=Neurology' onClick={() => window.scrollTo(0, 0)}>
                                    <div className="ps-shop-categry-inner">
                                        <img src={brain} alt=""/>
                                        <p>Neurology</p>
                                    </div>
                                </NavLink>
                                <NavLink to="/products?category=Internal Medicine" onClick={() => window.scrollTo(0, 0)}>
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
                                    <NavLink to={`/news/${news.id}`} onClick={() => window.scrollTo(0, 0)}>
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