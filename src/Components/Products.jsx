import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { _id, photo, item_name, price } = product;
    // console.log(product);

    return (
        <>
            <Link to={`/seeDetails/${_id}`}>
                <div className=" bg-purple-100 rounded-3xl p-5">
                    <figure>
                        <img
                            className="w-44 h-44 mx-auto"
                            src={photo}
                            alt="Movie" />
                    </figure>
                    <div className="flex-1 flex flex-row justify-evenly gap-10 py-5">

                        <div className='font-Poppins font-bold'>
                            <p className="text-xl">   {item_name} </p>
                            <p className="">  ${price}</p>
                        </div>



                    </div>
                </div>

            </Link >
            {/* when i hover the parent div it will show */}



        </>
    );
};

export default Products;