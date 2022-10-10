import Product from '../components/product/Product';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Category from '../components/category/Category';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <Category/>
            <Footer/>
        </div>
    );
};

export default Home;