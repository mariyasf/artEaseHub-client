import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const SeeDetails = () => {
    document.title = 'Product Details'
    const { id } = useParams();
    // console.log(id);
    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/seeDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })

    }, [id]);
    console.log(products);
    return (
        <div className="m-20">
            <div className="">

            </div>
        </div>
    );
};

export default SeeDetails;