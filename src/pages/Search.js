import Product from '../components/product/Product';
import SliderProduct from '../components/slider/SliderProduct';
import Blog from '../components/blog/Blog';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProductSimilar from '../components/product/ProductSimilar';
import Search from '../components/search/Search';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Search/>
            <ProductSimilar/>
            <Footer/>
        </div>
    );
};

export default Home;