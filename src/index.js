import './index.css';
import React from 'react';
import Home from './Pages/Home/Home';
import ReactDOM from 'react-dom/client';
import Service from './Pages/Service/Service';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import Products from './Pages/Products/Products';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
import News from './Pages/News/News';
import NewsDetail from './Pages/News/NewsDetail';
import product1 from '../src/assets/product1.png';
import product2 from '../src/assets/product2.jpg';
import product3 from '../src/assets//product3.jpg';
import ProductDetail from './Pages/Products/ProductDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

const newsItems = [
  {
      image: product1,
      title: 'Contrary to popular beliefpsum is not simply random text findings.',
      description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
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
  {
      image: product1,
      title: 'Contrary to popular beliefpsum is not simply random and text.',
      description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
  },
  {
      image: product1,
      title: 'Contrary to popular beliefpsum is not simply random and text.',
      description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
  },
  {
      image: product1,
      title: 'Contrary to popular beliefpsum is not simply random and text.',
      description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
  },
  {
      image: product1,
      title: 'Contrary to popular beliefpsum is not simply random and text.',
      description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
  },
  {
      image: product1,
      title: 'Contrary to popular beliefpsum is not simply random and text.',
      description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
  },
  {
      image: product1,
      title: 'Contrary to popular beliefpsum is not simply random and text.',
      description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
  },
  {
      image: product1,
      title: 'Contrary to popular beliefpsum is not simply random and text.',
      description: 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.'
  },
]

const products = [
  {
      title: 'Lorem Ipsum dolor.',
      price: 230.00,
      image: product1,
      brand: 'Neofect',
      category: 'Rehabilitation'

  },
  {
      title: 'Lorem Ipsum simet.',
      price: 230.00,
      image: product1,
      brand: 'Neofect',
      category: 'Rehabilitation'
  },
  {
      title: 'Lorem Ipsum consectetur.',
      price: 1000.00,
      image: product1,
      brand: 'Meden Inmed',
      category: 'Rehabilitation'
  },
  {
      title: 'Lorem Ipsum.',
      price: 430.00,
      image: product1,
      brand: 'Neofect',
      category: 'Rehabilitation'
  },
  {
      title: 'Lorem Ipsum.',
      price: 230.00,
      image: product1,
      brand: 'Spes medica',
      category: 'Neurology'
  },
  {
      title: 'Lorem Ipsum.',
      price: 230.00,
      image: product1,
      brand: 'Spes medica',
      category: 'Neurology'
  },
  {
      title: 'Lorem Ipsum.',
      price: 230.00,
      image: product1,
      brand: 'Elmiko',
      category: 'Neurology'
  },
  {
      title: 'Lorem Ipsum.',
      price: 210.00,
      image: product1,
      brand: 'Thera Trainer',
      category: 'Rehabilitation'
  },
  {
      title: 'Lorem Ipsum.',
      price: 230.00,
      image: product1,
      brand: 'Contec',
      category: 'Internal Medicine'
  },
];

newsItems.forEach((item, index) => {
  item.id = index + 1;
});

products.forEach((item, index) => {
  item.id = index + 1;
  item.description = 'consectetur adipisicing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam nostrud exercit.consectetur adipisicing elit, sed do eius tempor incididunt ut. sed do eius tempor incididunt ut sed do eius tempor incididunt ut sed do eius tempor incididunt ut';
});

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products data={products}/>} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News data={newsItems}/>} />
        <Route path="/news/:id" element={<NewsDetail data={newsItems} />} />
        <Route path="/products/:id" element={ <ProductDetail data={products} />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
