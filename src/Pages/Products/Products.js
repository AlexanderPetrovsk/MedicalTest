import React, { useState } from "react";
import product1 from '../../assets/product1.png';

function Products() {
    const products = [
        {
            title: 'Lorem Ipsum.',
            price: '$230.00',
            image: product1,
            brand: 'Contec'
        },
        {
            title: 'Lorem Ipsum.',
            price: '$230.00',
            image: product1,
            brand: 'Contec'
        },
        {
            title: 'Lorem Ipsum.',
            price: '$230.00',
            image: product1,
            brand: 'Meden Inmed'
        },
        {
            title: 'Lorem Ipsum.',
            price: '$230.00',
            image: product1,
            brand: 'Neofect'
        },
        {
            title: 'Lorem Ipsum.',
            price: '$230.00',
            image: product1,
            brand: 'Meden Inmed'
        },
        {
            title: 'Lorem Ipsum.',
            price: '$230.00',
            image: product1,
            brand: 'Neofect'
        },
        {
            title: 'Lorem Ipsum.',
            price: '$230.00',
            image: product1,
            brand: 'Meden Inmed'
        },
        {
            title: 'Lorem Ipsum.',
            price: '$230.00',
            image: product1,
            brand: 'Meden Inmed'
        },
    ];

    const [priceRange, setPriceRange] = useState(500);

    return (
        <React.Fragment>
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <div className='shop-box mb-5'>
                            <div className='shop-title'>
                                <h2 className='shop-sidebar-title'>Showing results</h2>
                                <p><span>Total : </span>{ products.length }</p>
                            </div>
                            <div className='shop-products'>
                                { products.map((product, index) => {
                                    return (
                                        <div className='shop-product-box' key={index}>
                                            <div className='shop-product-image'>
                                                <img src={product.image} alt=''/>
                                            </div>
                                            <div className='shop-product-data'>
                                                <h3>{product.title}</h3>
                                                <h5>{product.price}</h5>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-1'>
                    </div>
                    <div className='col-lg-4'>
                        <div className='shop-product-search'>
                            <h2 className='shop-sidebar-title mb-3'>Product Search</h2>
                            <form>
                                <input type="text" placeholder="Product Search" />
                                <button>search</button>
                            </form>
                        </div>
                        <div className='shop-product-brand-filter mb-5'>
                            <h2 className='shop-sidebar-title mb-3'>Brand Filter</h2>
                            <div className='shop-brand-filters'>
                                <ul className='shop-brands'>
                                    { [...new Set(products.map((product) => product.brand))].map((brand, index) => {
                                        return (
                                            <li key={index} className='shop-brand'>
                                                {brand}
                                                <span>{ products.filter((product) => product.brand === brand).length }</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='shop-product-range-filter'>
                            <h2 className='shop-sidebar-title mb-3'>Filter By Price</h2>
                            <input
                                type="range"
                                className="shop-form-range form-range"
                                name="price"
                                min="0"
                                max="1000"
                                value={priceRange}
                                onChange={(e) => {
                                    const bubble =  document.getElementById('price-bubble');
                                    setPriceRange(e.target.value);
                                    const min = 0;
                                    const max = 1000;
                                    const newVal = Number(((e.target.value - min) * 100) / (max - min));
                                  
                                    bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;

                                }}
                            />
                            <output id='price-bubble'>${priceRange}</output>
                        </div>
                        <div class="shop-product-category-filter">
                            <h2 class="shop-sidebar-title mb-3">Categories</h2>
                            <ul>
                                <li>Neurology</li>
                                <li>Rehabilitation</li>
                                <li>InternalMedicine</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products;