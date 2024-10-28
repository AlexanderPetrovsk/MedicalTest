import { NavLink, useParams, useSearchParams } from "react-router-dom";
import parse from 'html-react-parser';
import { getProductDescription, getProductTitle } from "../../utils/common";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function ProductDetail(props) {
    const { t, i18n } = useTranslation();
 
    const [searchParams] = useSearchParams();
    const [chosenLang, setChosenLang] = useState('mk');
 
    useEffect(() => {
        if (searchParams.get('lang')) {
            setChosenLang(searchParams.get('lang'));
        }

        i18n.changeLanguage(chosenLang);
    }, [i18n, searchParams, chosenLang]);

    const { id } = useParams();
    const product = props.data.find(item => parseInt(item.id) === parseInt(id));

    const relatedProducts = props.data.filter((related) => {
        return related.brand === product.brand && related.id !== product.id;
    });

    return (
        <div className="mb-5 mt-5">
            <div className="product-details-container">
                <div className="mx-5 row mb-5">
                    <div className="col-lg-6">
                        <div className='product-details-image'>
                            <img src={product.image} alt=''/>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='product-detail-data'>
                            <h4>{getProductTitle(product)}</h4>
                            { parse(getProductDescription(product)) }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="header-title">
                        { relatedProducts.length ? <h2>{t('products.relatedProducts')}</h2> : <div className="related-products-filler"></div> }
                    </div>
                </div>
                { relatedProducts.slice(0, 3).map((relatedProduct, index) => {
                    return (
                        <div className="col-lg-4" key={index}>
                            <NavLink to={`/products/${relatedProduct.id}?lang=${chosenLang}`} key={index}>
                                <div className='shop-product-box' >
                                    <div className='shop-product-image'>
                                        <img src={relatedProduct.image} alt=''/>
                                    </div>
                                    <div className='shop-product-data'>
                                        <h3>{getProductTitle(relatedProduct)}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default ProductDetail;