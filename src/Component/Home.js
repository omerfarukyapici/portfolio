import Header from './Header';
import Footer from './Footer';
import './Home.css';
import HomeContent from './HomeContent';

const Home = () => {
    return (
        <div className='Home'>

            <Header />
            <HomeContent />
            <Footer />

        </div>
    );
}

export default Home;