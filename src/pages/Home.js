import SliderBrand from '../components/slider/SliderBrand';
import SliderProduct from '../components/slider/SliderProduct';
import Blog from '../components/blog/Blog';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <div className=''>
            <Header/>
            <SliderBrand/>
            <SliderProduct/>
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;