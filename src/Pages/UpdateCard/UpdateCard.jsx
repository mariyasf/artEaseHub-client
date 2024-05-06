import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import HomeButton from '../../Components/HomeButton';

const UpdateCard = () => {
    const coffee = useLoaderData();

    const {
        _id,
        name,
        chef,
        supplier,
        taste,
        category,
        details,
        photo
    } = coffee;

    const handleUpdateCard = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const updatedCard = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo
        }
        console.log(updatedCard);

        // Send data to the server
        fetch(`http://localhost:5000/painting/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        icon: "success",
                        title: "Sccess",
                        text: 'Updatede successfully',
                        confirmButtonText: 'Ok'
                    });
                }
            })
        form.reset();

    }

    return (
        <div className="lg:w-[1140px] mx-auto my-10">
            <HomeButton />

            <div className="bg-[#F4F3F0] flex flex-col items-center">
                <div className="text-center space-y-5 py-20 px-10">
                    <h2 className="font-Rancho text-4xl">Update Products Details</h2>


                </div>

                <form
                    onSubmit={handleUpdateCard}
                    className="px-10 pb-10 lg:px-40  w-full">

                    <div className="flex flex-col lg:flex-row gap-10">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Name</span>

                            </div>

                            <input type="text"
                                name="name"
                                defaultValue={name} placeholder="Enter coffee name"
                                className="input input-bordered w-full" />

                        </label>

                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Chef</span>

                            </div>
                            <input type="text"
                                name="chef"
                                defaultValue={chef} placeholder="Enter coffee chef "
                                className="input input-bordered w-full" />

                        </label>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Supplier</span>

                            </div>
                            <input type="text"
                                name="supplier"
                                defaultValue={supplier} placeholder="Enter coffee supplier "
                                className="input input-bordered w-full" />

                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Taste</span>

                            </div>
                            <input type="text"
                                name="taste"
                                defaultValue={taste} placeholder="Enter coffee taste"
                                className="input input-bordered w-full" />

                        </label>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Category</span>

                            </div>
                            <input type="text"
                                name="category"
                                defaultValue={category} placeholder="nter coffee category"
                                className="input input-bordered w-full" />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Details</span>

                            </div>
                            <input type="text"
                                name="details"
                                defaultValue={details} placeholder="Enter coffee details"
                                className="input input-bordered w-full" />

                        </label>
                    </div>

                    <div className="space-y-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Photo</span>

                            </div>
                            <input type="text"
                                name="photo"
                                defaultValue={photo} placeholder="Enter photo URL"
                                className="input input-bordered w-full" />

                        </label>


                        <input className="btn primary-btn2 w-full" type="submit" value="Update Coffee" />

                    </div>



                </form>
            </div>

        </div>
    );
};

export default UpdateCard;