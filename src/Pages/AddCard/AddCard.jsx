import HomeButton from "../../Components/HomeButton";
import Swal from 'sweetalert2'

const AddCard = () => {
    document.title = 'Add'

    const handleAddCard = e => {
        e.preventDefault();

        const form = e.target;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const email = form.email.value;
        const photo = form.photo.value;

        const newPainting = {
            item_name,
            subcategory_name,
            short_description,
            price,
            rating,
            customization,
            processing_time,
            stock_status,
            email,
            photo
        }
        console.log(newPainting);

        // Send data to the server
        fetch('https://art-ease-hub-server.vercel.app/painting', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPainting)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        icon: "success",
                        title: "Sccess",
                        text: 'Added successfully',
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
                    <h2 className="font-Rancho text-4xl">Add Painting</h2>


                </div>

                <form
                    onSubmit={handleAddCard}
                    className="px-10 pb-10 lg:px-40 w-full">


                    <div className="flex flex-col lg:flex-row gap-10">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Item Name</span>
                            </div>
                            <input type="text"
                                name="item_name"
                                required placeholder="Enter Painting Name"
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Subcategory Name</span>
                            </div>
                            <select
                                name="subcategory_name"
                                className="input input-bordered w-full">
                                <option value="">Select Option</option>
                                <option value="landscape">Landscape Painting</option>
                                <option value="portrait">Portrait Drawing</option>
                                <option value="watercolor">Watercolor Painting</option>
                                <option value="oil">Oil Painting</option>
                                <option value="charcoal">Charcoal Sketching</option>
                                <option value="cartoon">Cartoon Drawing</option>
                                <option value="abstract">Abstract Art</option>
                                <option value="realism">Realistic Art</option>
                                <option value="floral">Floral Art</option>
                                <option value="animal">Animal Portraits</option>
                            </select>
                        </label>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Short Description</span>
                            </div>
                            <textarea
                                name="short_description"
                                required placeholder="Enter Short Description"
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input type="number"
                                name="price"
                                required placeholder="Enter Price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Rating</span>
                            </div>
                            <input type="number"
                                name="rating"
                                min="0" max="5" step="0.1"
                                required placeholder="Enter Rating"
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Customization</span>
                            </div>
                            <select
                                name="customization"
                                required className="input input-bordered w-full">
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </label>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Processing Time</span>
                            </div>
                            <input type="number"
                                name="processing_time"
                                required placeholder="Enter Processing Time"
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text">Stock Status</span>
                            </div>
                            <select
                                name="stock_status"
                                required className="input input-bordered w-full">
                                <option value="in_stock">In Stock</option>
                                <option value="made_to_order">Made to Order</option>
                            </select>
                        </label>
                    </div>

                    <div className="space-y-5">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Photo</span>
                            </div>
                            <input type="text"
                                name="photo"
                                required placeholder="Enter Photo URL"
                                className="input input-bordered w-full" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email"
                                name="email"
                                required placeholder="Enter Your Email"
                                className="input input-bordered w-full" />
                        </label>

                        <input
                            className="btn w-full bg-sky-500 text-white "
                            type="submit"
                            value="Add Card" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCard;
