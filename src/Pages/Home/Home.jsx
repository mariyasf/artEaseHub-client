import About from "./About";
import Banner from "./Banner";
import Service from "./Service";


const Home = () => {
    document.title = 'Home'

    return (
        <div>
            <Banner />
            <About />
            <Service />
        </div>
    );
};

export default Home;