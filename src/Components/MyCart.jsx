import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProviders";
import ProductCard from "./ProductCard";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyCart = () => {
    document.title = 'My Cart List'

    const { user } = useContext(AuthContext) || {};
    // console.log(user.email);

    const [iteams, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://art-ease-hub-server.vercel.app/myProduct/${user?.email}`)
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                setItems(data);
            })

    }, [user])

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


                fetch(`https://art-ease-hub-server.vercel.app/myProduct/${id}`, {
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
                        const remaining = iteams.filter(prod => prod._id != _id);
                        setItems(remaining);
                    })


            }
        });
    }

    return (
        <div className="p-4 text-black font-Poppins">
            <div className="overflow-x-auto text-center">
                <table className="table text-center">
                    <thead className="text-2xl">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Customization</th>
                            <th>stockStatus</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            iteams.map((prod, ind) =>
                                <tr key={prod._id}>
                                    <th>
                                        <img
                                            className="w-24 h-24"
                                            src={prod.photo} alt="" />
                                    </th>
                                    <td>{prod.item_name}</td>
                                    <td>{prod.subcategory_name}</td>
                                    <td>${prod.price}</td>
                                    <td>{prod.rating}</td>
                                    <td>{prod.customization}</td>
                                    <td>{prod.stock_status}</td>
                                    <td>
                                        <Link to={`/update/${prod._id}`}
                                            className="btn text-2xl bg-primary text-white">
                                            <FaEdit />
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(prod._id)}
                                            className="btn text-2xl bg-red-500 text-white">X</button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;