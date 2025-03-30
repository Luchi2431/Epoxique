import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./App.css";
import CollectionItems from './pages/Collection/CollectionItems';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {Suspence,lazy} from 'react';
import { CartProvider } from "./context/CartContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const Home = lazy(() => import('./pages/Home/Home'));
const Collection = lazy(() => import('./pages/Collection/Collection'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const About = lazy(() => import('./pages/Info/About/About'));
const Reviews = lazy(() => import('./pages/Info/Reviews/Reviews'));
const Warranty = lazy(() => import('./pages/Info/Warranty/Warranty'));
const Dimensions = lazy(() => import('./pages/Info/Dimensions/Dimensions'));
const Materials = lazy(() => import('./pages/Info/Materials/Materials'));
const TableConfigurator = lazy(() => import('./pages/TableConfigurator/TableConfigurator'));
const ProductDetails = lazy(() => import('./components/ProductDetails.jsx/ProductDetails'));
//AJDE BRE
const App = () => {

  return (
    <ErrorBoundary>
    <CartProvider>
    <Router>
      <ScrollToTop />
      <Navbar/>
      <div className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/info/about" element={<About/>}/>
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:id" element={<CollectionItems />} />
        <Route path="/info/reviews" element={<Reviews />} />
        <Route path="/info/warranty" element={<Warranty />} />
        <Route path="/info/dimensions" element={<Dimensions />} />
        <Route path="/info/core" element={<Materials />} />
        <Route path="/tableconfigurator" element={<TableConfigurator/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      </div>
      <Footer />
    </Router>
    </CartProvider>
    </ErrorBoundary>
  );
}

export default App

