import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProductTitle } from "../../utils/common";

function Products(props) {
    const { t, i18n } = useTranslation();

    const [chosenBrand, setChosenBrand] = useState("");
    const [chosenCategory, setChosenCategory] = useState("");

    const [searchParams] = useSearchParams();

    const [chosenLang, setChosenLang] = useState('mk');

    useEffect(() => {
        const category = searchParams.get('category') || '';
        const brand = searchParams.get('brand') || '';

        setChosenCategory(category);
        setChosenBrand(brand);

        const url = new URL(window.location);
        url.searchParams.delete('brand');
        url.searchParams.delete('category');
        window.history.pushState({}, "", url.href);

        if (searchParams.get('lang')) {
            setChosenLang(searchParams.get('lang'));
        }

        i18n.changeLanguage(searchParams.get('lang'));

    }, [setChosenCategory, setChosenBrand, searchParams, i18n]);

    const titles = [
        {
            id: 'Neurology',
            title: t('products.neurology')
        },
        {
            id: 'Internal Medicine',
            title: t('products.internalMedicine')
        },
        {
            id: 'Rehabilitation',
            title: t('products.rehabilitation')
        },
    ];

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

    const [currentPage, setCurrentPage] = useState(1);

    const perPage = 8;

    const filteredData = props.data.filter((el) => {
        return (
            filterByBrand(el)
            && filterByCategory(el)
        ); 
    });

    const paginatedFilteredData = filteredData.slice(0, currentPage * perPage);

    const getTitle = () => {
        if (chosenCategory) {
            const title = titles.find(title => title.id === chosenCategory);

            return t(`${title.title}`);
        }

        return t('products.shopProducts');
    }

    return (
        <React.Fragment>
            <div className='shop-products-main-wrapper container mt-5 mb-5'>
                <div className='row'>
                    <div className="col-lg-12">
                        <div className="header-title">
                            <h2>{getTitle()}</h2>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='shop-box mb-5'>
                            <div className='shop-products'>
                                { paginatedFilteredData.map((product, index) => {
                                    return (
                                        <NavLink to={`/products/${product.id}?lang=${chosenLang}`} key={index}>
                                            <div className='shop-product-box' >
                                                <div className='shop-product-image'>
                                                    <img src={product.image} alt=''/>
                                                </div>
                                                <div className='shop-product-data'>
                                                    <h3>{getProductTitle(product)}</h3>
                                                </div>
                                            </div>
                                        </NavLink>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="shop-pagination text-center">
                            { paginatedFilteredData.length < filteredData.length ?
                                <button
                                    className="btn btn-primary text-white"
                                    onClick={() => { setCurrentPage(currentPage + 1) }}
                                >
                                    Load More
                                </button>
                            : '' }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products;