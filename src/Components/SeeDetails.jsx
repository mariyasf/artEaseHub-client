import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const SeeDetails = () => {
    document.title = 'Product Details'
    const { id } = useParams();
    // console.log(id);
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`https://art-ease-hub-server.vercel.app/seeDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })

    }, [id]);
    console.log(products);

    const {
        photo,
        short_description,
        customization,
        item_name,
        price,
        processing_time,
        rating,
        stock_status,
        subcategory_name
    } = products;

    return (
        <div className="m-20 flex flex-col lg:flex-row gap-5 font-Poppins">
            <div className="flex-1 border">
                <img className='w-full h-[450px]' src={photo} alt="" />
            </div>

            <div className='flex-1 border text-xl p-10 space-y-4 text-gray-600'>
                <h2 className="font-bold text-2xl uppercase">{item_name}</h2>
                <p className="">Category: <span>{subcategory_name}</span></p>
                <p className="py-4 border-y">{short_description}</p>
                <div className="flex justify-between gap-2">
                    <p>Price: <span>${price}</span></p>
                    <div className="border"></div>
                    <p className="">Rating: <span>{rating}</span></p>
                    <div className="border"></div>
                    <p>Processing Time: <span>{processing_time}</span></p>
                </div>
                <div className="flex justify-between gap-4">
                    <p>Customization: <span className="uppercase">{customization}</span></p>
                    <p>Stock Status: <span>{stock_status}</span></p>
                </div>

            </div>

            <div>

            </div>

        </div>
    );
};

export default SeeDetails;