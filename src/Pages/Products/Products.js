import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
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

    const filteredData = props.data.filter((el) => {
        return (
            filterByBrand(el)
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
            <div className='shop-products-main-wrapper container mt-5 mb-5'>
                <div className='row'>
                    <div className="col-lg-12">
                        <div className="header-title">
                            <h2>{t('products.shopProducts')}</h2>
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='shop-box mb-5'>
                            <div className='shop-title'>
                                <h2 className='shop-sidebar-title'>{t('products.showingResults')}</h2>
                                <p><span>{t('products.total')} : </span>{ props.data.length }</p>
                            </div>
                            <div className='shop-products'>
                                { filteredData.slice(productsFrom, productsTo).map((product, index) => {
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
                        <div className="shop-pagination">
                            <Pagination 
                                perPage={perPage}
                                items={filteredData}
                                onChange={(currentPage) => { handleChange(currentPage); window.scrollTo(0, 0); }}
                                key={filteredData.length}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Products;