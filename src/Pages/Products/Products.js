import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProductTitle } from "../../utils/common";
import neurology from '../../assets/neurologyStart.jpg';
import rehab from '../../assets/rehabStart.jpg';
import internalMedicine from '../../assets/internalMedicineStart.jpg';

function Products(props) {
    const { t, i18n } = useTranslation();

    const [chosenBrand, setChosenBrand] = useState("");
    const [chosenCategory, setChosenCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");

    const [searchParams] = useSearchParams();

    const [chosenLang, setChosenLang] = useState('mk');

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [isLoading]);

    useEffect(() => {
        setIsLoading(true);

        const category = searchParams.get('category') || '';
        const brand = searchParams.get('brand') || '';
        const subCategory = searchParams.get('subCategory') || '';

        setChosenCategory(category);
        setChosenBrand(brand);
        setSubCategory(subCategory);

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
            title: t('products.neurology'),
            image: neurology,
        },
        {
            id: 'Internal Medicine',
            title: t('products.internalMedicine'),
            image: internalMedicine
        },
        {
            id: 'Rehabilitation',
            title: t('products.rehabilitation'),
            image: rehab
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
        if (subCategory && chosenBrand) {
            return `${subCategory} - ${chosenBrand}`;
        }

        if (chosenCategory) {
            const title = titles.find(title => title.id === chosenCategory);

            return title.title;
        }

        return t('products.shopProducts');
    }
    
    const getImage = () => {
        const title = titles.find(title => title.id === chosenCategory);

        return title.image;
    }

    const getCategoryBanner = () => {
        if (chosenCategory) {
            return (
                <div
                    className="header-banner pb-2 mb-5"
                    style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${getImage()})`}}
                >
                    <div className="row align-items-center justify-content-center mx-auto mb-5 container">
                        <div className="header-banner-title">
                            <h2>{ getTitle() }</h2>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="header-title">
                <h2>{getTitle()}</h2>
            </div>
        )
    }


    if (isLoading) {
        return (
            <div class="d-flex justify-content-center">
                <div className="loading-state">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>            
        )
    }
    return (
        <React.Fragment>
            <div className='shop-products-main-wrapper mb-5'>
                <div className='row'>
                    <div className="col-lg-12">
                        { getCategoryBanner() }
                    </div>
                    <div className='col-lg-12'>
                        <div className='shop-box mb-5'>
                            <div className='shop-products container '>
                                { paginatedFilteredData.map((product, index) => {
                                    return (
                                        <NavLink to={`/products/${product.id}?lang=${chosenLang}`} key={index} onClick={() => { window.scrollTo(0, 0)}}>
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