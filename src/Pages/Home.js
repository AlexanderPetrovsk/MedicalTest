import React from "react";
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

function Home() {
    const slides = [
        {
            title: 'UP TO 50% OFF TODAY ONLY!',
            description: 'Flat 5% extra on medicines & Enjoy FREE Delivery!',
            buttonText: 'Shop'
        },
        {
            title: 'UP TO 20% OFF TODAY ONLY!',
            description: 'Flat 15% extra on medicines & Enjoy FREE Delivery!',
            buttonText: 'Shop'
        }
    ]

    const newProducts = [
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


    const bestSellers = [
        {
            image: product1,
            title: 'Lorem ipsum dolor sit amet.',
            price: '$32.00'
        },
        {
            image: product2,
            title: 'Lorem ipsum dolor sit amet.',
            price: '$32.00'
        },
        {
            image: product1,
            title: 'Lorem ipsum dolor sit amet.',
            price: '$32.00'
        },
        {
            image: product3,
            title: 'Lorem ipsum dolor sit amet.',
            price: '$32.00'
        },
        {
            image: product2,
            title: 'Lorem ipsum dolor sit amet.',
            price: '$32.00'
        },
        {
            image: product1,
            title: 'Lorem ipsum dolor sit amet.',
            price: '$32.00'
        },
        {
            image: product3,
            title: 'Lorem ipsum dolor sit amet.',
            price: '$32.00'
        },
        {
            image: product2,
            title: 'Lorem ipsum dolor sit amet.',
            price: '$32.00'
        },
    ]
    return (
        <React.Fragment>
            <div className="ps-banner-swiper-main-wrapper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        { slides.map((slide, index) => {
                            return (
                                <div className="swiper-slide" key={index}>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-7 col-md-12">
                                                <div className="ps-banner-content">
                                                    <h5>{ slide.title }</h5>
                                                    <h2>{ slide.description }</h2>									
                                                    <div className="ps-banner-btn">
                                                        <a className="ps-btn" >
                                                            <span>{ slide.buttonText }</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                    <div className="ps-banner-slider-btn">
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
            <div className="ps-ad-section-main-wrapper">
                <div className="container-fluid">
                    <div className="ps-ad-wapper">
                        <div className="row ps-ad-resp-wrp align-items-stretch">
                            { newProducts.map((product, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-12" key={index}>
                                        <div className="ps-ad-box">
                                            <a href="javascript:;">
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
                            <h4>Best Seller</h4>
                            <a href="javascript:;">View All</a>
                        </div>
                    </div>
                    { bestSellers.map((product, index) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-12">
                            <div className="ps-product-box">
                                <div className="ps-product-img">
                                    <img src={product.image} alt="" />
                                    <div className="ps-product-icon">
                                        <ul>
                                            <li>
                                                <a href="javascript:;">
                                                    <span>
                                                        <svg viewBox="0 0 15 14" width="15" height="14">
                                                            <path id="Shape 4" className="shp0"
                                                                d="M7.16 14.02C7.05 14.02 6.95 13.98 6.87 13.9C6.26 13.3 5.68 12.74 5.17 12.25C2.15 9.34 0.16 7.41 0.16 4.6C0.16 2 1.76 0.04 3.88 0.04C4.64 0.04 5.33 0.31 5.95 0.85C6.53 1.36 6.93 2.02 7.16 2.5C7.39 2.02 7.78 1.36 8.37 0.85C8.98 0.31 9.68 0.04 10.43 0.04C12.55 0.04 14.15 2 14.15 4.6C14.15 7.41 12.16 9.34 9.14 12.25C8.63 12.74 8.05 13.3 7.44 13.9C7.36 13.98 7.26 14.02 7.16 14.02Z" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.938" viewBox="0 0 17 15.938">	
                                                            <path id="Cart" d="M1721.5,101.374h-1.75l-3.84-5.113a0.476,0.476,0,0,0-.7-0.083,0.552,0.552,0,0,0-.07.747l3.33,4.449h-9.94l3.33-4.449a0.552,0.552,0,0,0-.07-0.747,0.476,0.476,0,0,0-.7.083l-3.84,5.113h-1.75a0.515,0.515,0,0,0-.5.532v1.063a0.514,0.514,0,0,0,.5.531h16a0.514,0.514,0,0,0,.5-0.531v-1.063A0.515,0.515,0,0,0,1721.5,101.374Zm-13.49,10.243a0.5,0.5,0,0,0,.48.385h10.02a0.5,0.5,0,0,0,.48-0.385l1.89-7.054h-14.76Zm8.27-5.547a0.5,0.5,0,0,1,.57-0.437,0.527,0.527,0,0,1,.41.611l-0.5,3.189a0.508,0.508,0,0,1-.49.444,0.512,0.512,0,0,1-.49-0.619Zm-3.28.087a0.5,0.5,0,1,1,1,0v3.188a0.5,0.5,0,1,1-1,0v-3.188Zm-2.82-.524a0.5,0.5,0,0,1,.57.437l0.5,3.188a0.525,0.525,0,0,1-.41.611,0.434,0.434,0,0,1-.08.008,0.508,0.508,0,0,1-.49-0.444l-0.5-3.189A0.534,0.534,0,0,1,1710.18,105.633Z" transform="translate(-1705 -96.063)"/>
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span>
                                                        <svg viewBox="0 0 13 14" width="13" height="14">
                                                            <path id="Shape 15" className="shp0"
                                                                d="M1.67 11.11C1.85 10.92 2.02 10.72 2.2 10.53C3.06 9.6 3.91 8.68 4.77 7.75C5.16 7.34 5.63 7.3 5.95 7.65C6.28 8 6.24 8.5 5.85 8.93C4.9 9.96 3.94 10.99 2.98 12.02C2.9 12.12 2.82 12.21 2.68 12.38C3.19 12.38 3.63 12.38 4.07 12.38C4.62 12.38 4.98 12.73 4.97 13.22C4.95 13.7 4.6 14.02 4.08 14.03C3.03 14.03 1.98 14.03 0.93 14.02C0.34 14.02 0.04 13.73 0.04 13.1C0.03 11.92 0.03 10.74 0.04 9.56C0.04 8.99 0.35 8.64 0.82 8.65C1.28 8.65 1.56 9 1.57 9.58C1.58 10.08 1.57 10.57 1.57 11.06C1.61 11.08 1.64 11.09 1.67 11.11ZM10.31 1.68C9.87 1.68 9.43 1.68 8.99 1.68C8.45 1.67 8.08 1.33 8.1 0.84C8.11 0.36 8.46 0.03 8.98 0.03C10.03 0.03 11.08 0.03 12.13 0.03C12.72 0.03 13.02 0.33 13.02 0.95C13.03 2.13 13.03 3.31 13.02 4.49C13.02 5.06 12.71 5.41 12.25 5.41C11.79 5.41 11.5 5.06 11.49 4.48C11.48 3.99 11.49 3.49 11.49 2.88C11.32 3.05 11.23 3.14 11.14 3.23C10.2 4.25 9.27 5.26 8.32 6.27C8.18 6.41 8 6.56 7.82 6.61C7.46 6.71 7.15 6.56 6.98 6.2C6.81 5.82 6.89 5.48 7.16 5.18C7.97 4.31 8.78 3.43 9.6 2.56C9.84 2.29 10.1 2.03 10.36 1.77C10.34 1.74 10.33 1.71 10.31 1.68ZM10.38 12.25C9.37 11.19 8.35 10.13 7.34 9.06C7.24 8.96 7.14 8.85 7.05 8.73C6.81 8.39 6.85 7.94 7.12 7.65C7.4 7.36 7.83 7.33 8.14 7.6C8.31 7.76 8.47 7.94 8.63 8.12C9.57 9.09 10.5 10.07 11.45 11.06C11.46 10.99 11.48 10.89 11.48 10.8C11.49 10.33 11.47 9.86 11.5 9.4C11.53 8.94 11.85 8.64 12.26 8.65C12.66 8.65 13 8.94 13.01 9.38C13.03 10.68 13.03 11.98 13.01 13.28C13 13.72 12.68 14.02 12.27 14.02C11.13 14.03 9.99 14.03 8.85 14.02C8.42 14.02 8.1 13.64 8.1 13.21C8.09 12.75 8.43 12.39 8.89 12.38C9.36 12.37 9.83 12.38 10.3 12.38C10.33 12.34 10.35 12.29 10.38 12.25ZM1.58 2.88C1.58 3.48 1.58 3.96 1.57 4.43C1.57 5.05 1.28 5.4 0.81 5.41C0.34 5.42 0.04 5.06 0.04 4.45C0.03 3.3 0.03 2.15 0.04 1C0.04 0.32 0.33 0.03 0.96 0.03C1.99 0.03 3.01 0.03 4.04 0.03C4.61 0.03 4.98 0.37 4.97 0.87C4.95 1.36 4.6 1.67 4.04 1.68C3.63 1.68 3.22 1.68 2.81 1.68C2.79 1.68 2.77 1.71 2.73 1.74C2.81 1.84 2.89 1.94 2.98 2.03C3.92 3.04 4.86 4.05 5.79 5.07C6.23 5.54 6.29 6.03 5.95 6.4C5.61 6.77 5.14 6.71 4.71 6.24C3.78 5.24 2.86 4.24 1.93 3.23C1.84 3.14 1.75 3.05 1.58 2.88Z" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">
                                                    <span>
                                                        <svg viewBox="0 0 13 14" width="13" height="14">
                                                            <path id="Shape 16" className="shp0"
                                                                d="M9.47 3.1C8.45 2.35 7.38 2.02 6.19 2.15C4.36 2.35 3.06 3.33 2.28 5C2.03 5.53 1.56 5.8 1.06 5.71C0.54 5.62 0.16 5.21 0.13 4.68C0.12 4.51 0.14 4.32 0.21 4.17C1.3 1.74 3.16 0.28 5.81 -0.06C7.95 -0.34 9.82 0.33 11.4 1.79C11.43 1.82 11.46 1.84 11.51 1.87C11.65 1.66 11.79 1.45 11.93 1.24C12.07 1.03 12.26 0.91 12.51 0.98C12.77 1.06 12.87 1.27 12.87 1.53C12.86 2.75 12.86 3.97 12.84 5.19C12.84 5.62 12.51 5.83 12.11 5.66C11.01 5.16 9.9 4.66 8.8 4.16C8.57 4.05 8.43 3.88 8.47 3.62C8.5 3.36 8.68 3.24 8.93 3.2C9.09 3.17 9.25 3.14 9.47 3.1ZM1.74 11.86C1.58 12.1 1.44 12.31 1.3 12.52C1.16 12.73 0.97 12.83 0.72 12.76C0.47 12.68 0.37 12.48 0.37 12.23C0.38 11.01 0.38 9.78 0.4 8.56C0.41 8.11 0.73 7.91 1.14 8.09C2.23 8.58 3.32 9.07 4.41 9.57C4.7 9.7 4.82 9.88 4.77 10.14C4.73 10.4 4.54 10.51 4.3 10.55C4.15 10.57 4 10.6 3.76 10.64C4 10.8 4.18 10.93 4.37 11.03C6.71 12.34 9.71 11.38 10.87 8.95C10.91 8.85 10.96 8.75 11.01 8.65C11.3 8.09 11.93 7.87 12.48 8.13C13.03 8.39 13.28 9.03 13.03 9.61C12.46 10.91 11.6 11.97 10.4 12.74C7.66 14.5 4.27 14.19 1.87 11.98C1.83 11.94 1.8 11.92 1.74 11.86Z" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ps-product-info">
                                    <img src="assets/images/rating.png" />
                                    <span>(2 Reviews)</span>
                                    <h4>{product.title}</h4>
                                    <p>{product.price}<del>$46.00</del></p>
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