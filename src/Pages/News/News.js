import { useState } from 'react';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.jpg';
import Pagination from '../../components/Pagination/Pagination';

function News() { 
    const newsItems = [
        {
            image: product1,
            title: 'Contrary to popular beliefpsum is not simply random text findings.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },
        {
            image: product2,
            title: 'This is a Lorem Ipsum news header.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },
        {
            image: product3,
            title: 'Contrary to popular beliefpsum is not simply random and text.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },
        {
            image: product1,
            title: 'Contrary to popular beliefpsum is not simply random and text.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },
        {
            image: product2,
            title: 'Contrary to popular beliefpsum is not simply random and text.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },
        {
            image: product3,
            title: 'Contrary to popular beliefpsum is not simply random and text.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },        {
            image: product2,
            title: 'This is a Lorem Ipsum news header.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },
        {
            image: product3,
            title: 'Contrary to popular beliefpsum is not simply random and text.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },
        {
            image: product1,
            title: 'Contrary to popular beliefpsum is not simply random and text.',
            description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
        },
    ]

    const [searchText, setSearchText] = useState('');

    const filteredNews = newsItems.filter((product) => {
        if (searchText === '') {
            return product;
        }

        return product.title.toLowerCase().includes(searchText.toLowerCase());
    });

    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (currentPage) => {
        setCurrentPage(currentPage);
    }

    const perPage = 6;

    const newsFrom = (currentPage - 1) * perPage;
    const newsTo = currentPage * perPage;
 
    return (
        <div className="ps-news-main-wrapper">
            <div className="container">
                <div className="ps-news-row-parent">
                    <div className="col-lg-12">
                        <div className="header-title">
                            <h2>Latest News</h2>
                        </div>
                    </div>
                    <div className='col-lg-12 shop-product-search'>
                        <h2 className='shop-sidebar-title mb-3'>Search</h2>
                        <form>
                            <input type="text" placeholder="Search" onChange={(e) => { setSearchText(e.target.value); setCurrentPage(1) }}/>
                            <button>search</button>
                        </form>
                    </div>
                    <div className='row'>
                        { filteredNews.slice(newsFrom, newsTo).map((news, index) => {
                            return (
                                <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                    <div className="ps-news-box">
                                        <div className="ps-news-inner">
                                            <div className="ps-news-img">
                                                <img src={news.image} alt=""/>
                                                <div className="ps-news-overlay"></div>
                                                <div className="ps-news-date-btn">
                                                    <a href="/home">JULY 29, 2021</a>
                                                </div>
                                            </div>
                                            <div className="ps-news-content">
                                                <h4>{ news.title }</h4>
                                                <p>{ news.description }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="news-pagination">
                        <Pagination perPage={perPage} items={filteredNews} onChange={(currentPage) => { handleChange(currentPage); }} key={filteredNews}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;