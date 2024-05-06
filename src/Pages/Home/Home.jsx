import { useLoaderData } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Feedback from "./Feedback";
import ProductCard from "./ProductCard";
import Service from "./Service";
import { useState } from "react";


const Home = () => {
    document.title = 'Home'

    const lodedproduct = useLoaderData();
    console.log(lodedproduct);

    const [painting, setPainting] = useState(lodedproduct);

    return (
        <div>
            <Banner />
            <About />
            <Service />

            <div className='text-center my-10 space-y-5'>
                <h2 className='text-[#331A15] font-Rancho font-bold text-4xl'>
                    Our Products
                </h2>

            </div>
            {
                <div className='coffee-banner px-10 lg:px-40
            grid grid-cols-1  lg:grid-cols-2  gap-10
            '>
                    {
                        painting.map(product =>
                            <ProductCard
                                key={product._id}
                                product={product}
                                painting={painting}
                                setPainting={setPainting}
                            />

                        )
                    }
                </div>
            }
            <Feedback />
        </div>
    );
};

export default Home;