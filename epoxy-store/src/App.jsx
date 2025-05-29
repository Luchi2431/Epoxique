import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./App.css";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Suspense, lazy, useContext } from 'react'; 
import { CartContext, CartProvider } from "./context/CartContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CollectionItems from "./components/CollectionItems/CollectionItems";
import Gallery from "./pages/Gallery/Gallery";
import CartNotification from "./components/CartNotification/CartNotification";
import NotFound from "./pages/NotFound/NotFound";

// Lazy imports remain the same
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
const ProductDetails = lazy(() => import('./components/ProductDetails/ProductDetails'));

// App wrapper with access to context
const AppContent = () => {
  const { notification, closeNotification } = useContext(CartContext);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <ScrollToTop />
      <Navbar/>
      <CartNotification 
        isVisible={notification.visible} 
        productName={notification.productName}
        onClose={closeNotification}
      />
      <div className='main-content'>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/contact" element={<Contact/>}/>

            {/* Collection routes */}
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:id" element={<CollectionItems />} />
            <Route path="/product/:id" element={<ProductDetails/>}/>

            {/* Gallery routes */}
            <Route path="/gallery" element={<Gallery/>} />

            {/* Info Pages */}
            <Route path="/info/about" element={<About/>}/>
            <Route path="/info/about/:id" element={<About/>}/>
            <Route path="/info/reviews" element={<Reviews />} />
            <Route path="/info/warranty" element={<Warranty />} />
            <Route path="/info/dimensions" element={<Dimensions />} />
            <Route path="/info/core" element={<Materials />} />

            <Route path="/tableconfigurator" element={<TableConfigurator/>}/>
            
          </Routes>
        </Suspense>
      </div>
      <Footer />
      <ToastContainer limit={3} />
    </Router>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ErrorBoundary>
  );
};

export default App;