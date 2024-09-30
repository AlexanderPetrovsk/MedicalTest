import './i18n';
import './index.css';
import React from 'react';
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import ReactDOM from 'react-dom/client';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/Service/Service';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import Products from './Pages/Products/Products';
import NewsDetail from './Pages/News/NewsDetail';
import { getNews, getProducts } from './utils/common';
import ProductDetail from './Pages/Products/ProductDetail';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const productsData = await getProducts();
const newsData = await getNews();

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home latestProducts={productsData.slice(0, 8)} latestNews={newsData.slice(0, 3)} />} />
        <Route path='/products' element={<Products data={productsData}/>} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News data={newsData}/>} />
        <Route path="/news/:id" element={<NewsDetail data={newsData} />} />
        <Route path="/products/:id" element={ <ProductDetail data={productsData} />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
