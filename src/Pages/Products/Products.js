import React, { useEffect, useState } from "react";
import product1 from '../../assets/product1.png';
import Pagination from "../../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

function Products() {
    const products = [
        {
            title: 'Lorem Ipsum dolor.',
            price: 230.00,
            image: product1,
            brand: 'Contec',
            category: 'Rehabilitation'

        },
        {
            title: 'Lorem Ipsum simet.',
            price: 230.00,
            image: product1,
            brand: 'Contec',
            category: 'Rehabilitation'
        },
        {
            title: 'Lorem Ipsum consectetur.',
            price: 1000.00,
            image: product1,
            brand: 'Meden Inmed',
            category: 'Neurology'
        },
        {
            title: 'Lorem Ipsum.',
            price: 430.00,
            image: product1,
            brand: 'Neofect',
            category: 'Internal Medicine'
        },
        {
            title: 'Lorem Ipsum.',
            price: 230.00,
            image: product1,
            brand: 'Meden Inmed',
            category: 'Neurology'
        },
        {
            title: 'Lorem Ipsum.',
            price: 230.00,
            image: product1,
            brand: 'Neofect',
            category: 'Neurology'
        },
        {
            title: 'Lorem Ipsum.',
            price: 230.00,
            image: product1,
            brand: 'Meden Inmed',
            category: 'Neurology'
        },
        {
            title: 'Lorem Ipsum.',
            price: 210.00,
            image: product1,
            brand: 'Thera Trainer',
            category: 'Neurology'
        },
        {
            title: 'Lorem Ipsum.',
            price: 230.00,
            image: product1,
            brand: 'Thera Trainer',
            category: 'Neurology'
        },
        {
            title: 'Lorem Ipsum ss.',
            price: 430.00,
            image: product1,
            brand: 'Thera Trainer',
            category: 'Neurology'
        },
    ];

    const [priceRange, setPriceRange] = useState(1000);
    const [searchText, setSearchText] = useState("");
    const [chosenBrand, setChosenBrand] = useState("");
    const [chosenCategory, setChosenCategory] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const category = searchParams.get('category');
        const brand = searchParams.get('brand');

        if (category) {
            setChosenCategory(category);
            searchParams.delete('category');
        }

        if (brand) {
            setChosenBrand(brand);
            searchParams.delete('brand');
        }

        setSearchParams(searchParams);

    }, [searchParams, setSearchParams]);

    const filterByBrand = (product) => {
        if (chosenBrand === "") {
            return product;
        }

        return product.brand.toLowerCase() === chosenBrand.toLowerCase();
    } 

    const filterByCategory = (product) => {
        if (chosenCategory === "") {
            return product;
        }

        return product.category.toLowerCase() === chosenCategory.toLowerCase();
    } 

    const filterByPrice = (product) => {
        return product.price <= priceRange;
    }
    
    const filterBySearchText = (product) => {
        if (searchText === '') {
            return product;
        }

        return product.title.toLowerCase().includes(searchText.toLowerCase());
    }

    const filteredData = products.filter((el) => {
        return (
            filterByBrand(el)
            && filterByPrice(el)
            && filterBySearchText(el)
            && filterByCategory(el)
        ); 
    });

    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (currentPage) => {
        setCurrentPage(currentPage);
    }

    const perPage = 8;

    const productsFrom = (currentPage - 1) * perPage;
    const productsTo = currentPage * perPage;

    return (
        <React.Fragment>
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className="col-lg-12">
                        <div className="header-title">
                            <h2>Shop Products</h2>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='shop-box mb-5'>
                            <div className='shop-title'>
                                <h2 className='shop-sidebar-title'>Showing results</h2>
                                <p><span>Total : </span>{ products.length }</p>
                            </div>
                            <div className='shop-products'>
                                { filteredData.slice(productsFrom, productsTo).map((product, index) => {
                                    return (
                                        <div className='shop-product-box' key={index}>
                                            <div className='shop-product-image'>
                                                <img src={product.image} alt=''/>
                                            </div>
                                            <div className='shop-product-data'>
                                                <h3>{product.title}</h3>
                                                <h5>${product.price}</h5>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="shop-pagination">
                            <Pagination perPage={perPage} items={filteredData} onChange={(currentPage) => { handleChange(currentPage); }} key={filteredData.length}/>
                        </div>
                    </div>
                    <div className='col-lg-1'>
                    </div>
                    <div className='col-lg-4 col-8 mx-auto mt-5'>
                        <div className='shop-product-search'>
                            <h2 className='shop-sidebar-title mb-3'>Product Search</h2>
                            <form>
                                <input type="text" placeholder="Product Search" onChange={(e) => {setSearchText(e.target.value); setCurrentPage(1); }}/>
                                <button>search</button>
                            </form>
                        </div>
                        <div className='shop-product-brand-filter mb-5'>
                            <h2 className='shop-sidebar-title mb-3'>Brand Filter</h2>
                            <div className='shop-brand-filters'>
                                <ul className='shop-brands'>
                                    { [...new Set(products.map((product) => product.brand))].map((brand, index) => {
                                        return (
                                            <li
                                                className={`shop-brand ${chosenBrand === brand ? 'active-category' : ''}`}
                                                key={index}
                                                onClick={() => { setChosenBrand(brand); setCurrentPage(1); }}
                                            >
                                                {brand}
                                                <span>{ products.filter((product) => product.brand === brand).length }</span>
                                            </li>
                                        )
                                    })}
                                    <li className="shop-brand" onClick={() => { setChosenBrand(""); setCurrentPage(1); }}>
                                        <span className="px-2">Clear</span>
                                    </li>
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
                                    setCurrentPage(1);
                                }}
                            />
                            <output id='price-bubble'>${priceRange}</output>
                        </div>
                        <div className="shop-product-category-filter">
                            <h2 className="shop-sidebar-title mb-3">Categories</h2>
                            <ul>
                                { [...new Set(products.map((product) => product.category))].map((category, index) => {
                                    return <li
                                            className={`${chosenCategory === category ? 'active-category' : ''}`}
                                            key={index}
                                            onClick={() => { setChosenCategory(category); setCurrentPage(1);}}
                                        >
                                            {category}
                                        </li>
                                })}
                                <li className="shop-brand" onClick={() => { setChosenCategory(""); setCurrentPage(1);}}>
                                    <span className="px-2">Clear</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products;