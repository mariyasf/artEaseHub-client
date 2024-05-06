import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const ALLProduct = () => {
    document.title = 'All Product'

    const lodedproduct = useLoaderData();
    // console.log(lodedproduct);

    const [painting, setPainting] = useState(lodedproduct);

    return (
        <div>
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
        </div>
    );
};

export default ALLProduct;