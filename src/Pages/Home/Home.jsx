import { Link, useLoaderData } from "react-router-dom";
import About from "./About";
import Banner from "./Banner";
import Feedback from "./Feedback";
import Service from "./Service";
import { useState } from "react";
import Products from "../../Components/Products";


const Home = () => {
    document.title = 'Home'

    const lodedproduct = useLoaderData();
    console.log(lodedproduct);
    const painting = lodedproduct.slice(0, 6);

    return (
        <div>
            <Banner />
            <About />
            <Service />

            <div className='text-center my-10 space-y-5'>
                <h2 className='text-[#331A15] font-Rancho font-bold text-4xl'>
                    Our Products
                </h2>
                <Link to={"/allProduct"}>
                    <a className="btn bg-purple-700 hover:bg-purple-900
                             text-white text-xl uppercase">Explor more</a>

                </Link>

            </div>
            {
                <div className='px-10 lg:px-40
            grid grid-cols-2  lg:grid-cols-3  gap-10
            '>
                    {
                        painting.map(product =>
                            <Products
                                key={product._id}
                                product={product}

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