import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { NavLink, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProductTitle } from "../../utils/common";

function Products(props) {
    const { t, i18n } = useTranslation();

    const [priceRange, setPriceRange] = useState(1000);
    const [searchText, setSearchText] = useState("");
    const [chosenBrand, setChosenBrand] = useState("");
    const [chosenCategory, setChosenCategory] = useState("");

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const category = searchParams.get('category');
        const brand = searchParams.get('brand');

        if (category) {
            setChosenCategory(category);
        }

        if (brand) {
            setChosenBrand(brand);
        }

        const url = new URL(window.location);
        url.searchParams.delete('brand');
        url.searchParams.delete('category');
        window.history.pushState({}, "", url.href);

        i18n.changeLanguage(searchParams.get('lang'));

    }, [setChosenCategory, setChosenBrand, searchParams, i18n]);

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

    const filteredData = props.data.filter((el) => {
        return (
            filterByBrand(el)
            && filterByPrice(el)
            && filterBySearchText(el)
            && filterByCategory(el)
        ); 
    });

    function camelCase(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (currentPage) => {
        setCurrentPage(currentPage);
    }

    const perPage = 8;

    const productsFrom = (currentPage - 1) * perPage;
    const productsTo = currentPage * perPage;

    const productCategories = [...new Set(props.data.map((product) => product.category))];
    const productBrands = [...new Set(props.data.map((product) => product.brand))];

    return (
        <React.Fragment>
            <div className='shop-products-main-wrapper container mt-5 mb-5'>
                <div className='row'>
                    <div className="col-lg-12">
                        <div className="header-title">
                            <h2>{t('products.shopProducts')}</h2>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className='shop-box mb-5'>
                            <div className='shop-title'>
                                <h2 className='shop-sidebar-title'>{t('products.showingResults')}</h2>
                                <p><span>{t('products.total')} : </span>{ props.data.length }</p>
                            </div>
                            <div className='shop-products'>
                                { filteredData.slice(productsFrom, productsTo).map((product, index) => {
                                    return (
                                        <NavLink to={`/products/${product.id}?lang=${searchParams.get('lang')}`} key={index}>
                                            <div className='shop-product-box' >
                                                <div className='shop-product-image'>
                                                    <img src={product.image} alt=''/>
                                                </div>
                                                <div className='shop-product-data'>
                                                    <h3>{getProductTitle(product)}</h3>
                                                    <h5>${product.price}</h5>
                                                </div>
                                            </div>
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="shop-pagination">
                            <Pagination 
                                perPage={perPage}
                                items={filteredData}
                                onChange={(currentPage) => { handleChange(currentPage); window.scrollTo(0, 0); }}
                                key={filteredData.length}
                            />
                        </div>
                    </div>
                    <div className='col-lg-1'>
                    </div>
                    <div className='col-lg-4 col-8 mx-auto'>
                        <div className='shop-product-search'>
                            <h2 className='shop-sidebar-title mb-3'>{t('products.productSearch')}</h2>
                            <form>
                                <input type="text" placeholder={t('products.productSearch')} onChange={(e) => {setSearchText(e.target.value); setCurrentPage(1); }}/>
                                <button onClick={(e) => e.preventDefault()}></button>
                            </form>
                        </div>
                        <div className='shop-product-brand-filter mb-5'>
                            <h2 className='shop-sidebar-title mb-3'>{t('products.brandFilter')}</h2>
                            <div className='shop-brand-filters'>
                                <ul className='shop-brands'>
                                    { productBrands.map((brand, index) => {
                                        return (
                                            <li
                                                className={`shop-brand ${chosenBrand.toLowerCase() === brand.toLowerCase() ? 'active-category' : ''}`}
                                                key={index}
                                                onClick={() => { setChosenBrand(brand); setCurrentPage(1); }}
                                            >
                                                {brand}
                                                <span>{ props.data.filter((product) => product.brand === brand).length }</span>
                                            </li>
                                        )
                                    })}
                                    <li className="shop-brand" onClick={() => { setChosenBrand(""); setCurrentPage(1); }}>
                                        <span className="px-2">{ t('products.clear') }</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='shop-product-range-filter'>
                            <h2 className='shop-sidebar-title mb-3'>{t('products.filterByPrice')}</h2>
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
                            <h2 className="shop-sidebar-title mb-3">{t('products.categories')}</h2>
                            <ul>
                                { productCategories.map((category, index) => {
                                    return (
                                        <li
                                            className={`${chosenCategory === category ? 'active-category' : ''}`}
                                            key={index}
                                            onClick={() => { setChosenCategory(category); setCurrentPage(1);}}
                                        >
                                            { t(`products.${camelCase(category)}`)}
                                        </li>
                                    )
                                })}
                                <li className="shop-brand" onClick={() => { setChosenCategory(""); setCurrentPage(1);}}>
                                    <span className="px-2">{ t('products.clear') }</span>
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