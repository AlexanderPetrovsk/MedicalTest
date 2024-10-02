import { useEffect, useRef, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { NavLink, useSearchParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { getNewsContent, getNewsTitle } from '../../utils/common';

function News(props) { 
    const { t, i18n } = useTranslation();

    const [searchText, setSearchText] = useState('');

    const filteredNews = props.data.filter((product) => {
        if (searchText === '') {
            return product;
        }

        return product.title.toLowerCase().includes(searchText.toLowerCase());
    });

    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (currentPage) => {
        setCurrentPage(currentPage);
    }

    const perPage = 12;

    const newsFrom = (currentPage - 1) * perPage;
    const newsTo = currentPage * perPage;
    
    const listRef = useRef(null);
    const executeScroll = () => listRef.current.scrollIntoView();

    const getNewsDescription = (description) => {
        if (description.length > 150) {
            return description.slice(0, 150) + '...';
        }

        return description.replace(/(<([^>]+)>)/gi, "");
    }

    const getDate = (date) => {
        return new Date(date).toLocaleString('en-US', { month: 'long', day: '2-digit', year: 'numeric'});
    }

    const [searchParams] = useSearchParams();
    const [chosenLang, setChosenLang] = useState('mk');

    useEffect(() => {
        if (searchParams.get('lang')) {
            setChosenLang(searchParams.get('lang'));
        }

        i18n.changeLanguage(chosenLang);
    }, [i18n, searchParams, chosenLang]);

    return (
        <div className="ps-news-main-wrapper">
            <div className="container">
                <div className="ps-news-row-parent">
                    <div className="col-lg-12">
                        <div className="header-title">
                            <h2>{t('news.latestNews')}</h2>
                        </div>
                    </div>
                    <div className='col-lg-12 shop-product-search' ref={listRef}>
                        <h2 className='shop-sidebar-title mb-3'>{t('news.search')}</h2>
                        <form>
                            <input type="text" placeholder="Search" onChange={(e) => { setSearchText(e.target.value); setCurrentPage(1) }}/>
                            <button onClick={(e) => e.preventDefault()}></button>
                        </form>
                    </div>
                    <div className='row'>
                        { filteredNews.slice(newsFrom, newsTo).map((news, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                    <NavLink to={`/news/${news.id}?lang=${searchParams.get('lang')}`}>
                                        <div className="ps-news-box">
                                            <div className="ps-news-inner">
                                                <div className="ps-news-img">
                                                    <img src={news.image} alt=""/>
                                                    <div className="ps-news-overlay"></div>
                                                    <div className="ps-news-date-btn">
                                                        <div>{ getDate(news.createdOn)}</div>
                                                    </div>
                                                </div>
                                                <div className="ps-news-content">
                                                    <h4>{ getNewsTitle(news) }</h4>
                                                    <div>{ parse(getNewsDescription(getNewsContent(news))) }</div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
                    <div className="news-pagination">
                        <Pagination perPage={perPage} items={filteredNews} onChange={(currentPage) => { handleChange(currentPage); executeScroll(); }} key={filteredNews}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;