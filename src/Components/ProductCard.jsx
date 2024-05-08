import React from 'react';
import { FaCoffee, FaEdit, FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = ({ product, painting, setPainting }) => {

    const { _id, photo, item_name, price } = product;
    // console.log(product);

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://art-ease-hub-server.vercel.app/painting/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = painting.filter(coff => coff._id != _id);
                        setPainting(remaining);
                    })


            }
        });

    }
    return (
        <div className="card card-side lg:p-5
         bg-[#F5F4F1]  shadow-xl flex flex-col lg:flex-row justify-between gap-5">
            <figure>
                <img
                    className="w-full lg:w-40 lg:h-40"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex-1 flex flex-row justify-evenly gap-10 py-5">

                <div>
                    <p><span className="font-bold">Name:</span> {item_name}</p>
                    <p><span className="font-bold">price:</span> {price}</p>
                    <p><span className="font-bold">Price:</span> $12</p>
                </div>


                <div className="bg-[#ce8930] w-8 h-8 flex text-xl text-white
                 text-center items-center justify-center">
                    <Link to={`/seeDetails/${_id}`}>
                        <FaEye />
                    </Link>


                </div>

            </div>
        </div>
    );
};

export default ProductCard;