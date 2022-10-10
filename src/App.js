import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';

import SliderBrand from './components/slider/SliderBrand';
import SliderProduct from './components/slider/SliderProduct';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import ProductSimilar from './components/product/ProductSimilar';
import Product from './pages/Product';

import Search from './pages/Search';

import Category from './pages/Category';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path="/home" element={<SliderBrand/>}/>
        </Routes>
        <Routes>
          <Route exact path="/footer" element={<Footer/>}/>
        </Routes>
        <Routes>
          <Route exact path="/search" element={<Search/>}/>
        </Routes>
        <Routes>
          <Route exact path="/product" element={<Product/>}/>
        </Routes>
        <Routes>
          <Route exact path="/category" element={<Category/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
