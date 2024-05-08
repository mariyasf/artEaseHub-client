import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


const Feedback = () => {
    document.title = 'Customer Feedback'

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const title = form.title.value;

        const newFeed = {
            name,
            email,
            message,
            title
        }
        console.log(newFeed)


        fetch('https://art-ease-hub-server.vercel.app/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFeed)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    Swal.fire({
                        icon: "success",
                        title: "Sccess",
                        text: 'Feedback Added successfully',
                        confirmButtonText: 'Ok'
                    });
                }
            })

        form.reset()

    };
    return (
        <div>
            <div className='text-center my-10 space-y-5'>
                <h2 className='text-[#331A15] font-Rancho font-bold text-4xl'>
                    Customer Feedback
                </h2>

            </div>
            <div className="card lg:card-side bg-base-100 lg:h-[550px] shadow-xl mt-10 mx-5 lg:mx-20">
                <figure>
                    <img src="/images/t.jpg"
                        className='h-[450px] lg:h-full w-full lg:w-[550px]'
                        alt="Album" />
                </figure>

                <div className="card-body mx-10">
                    <form onSubmit={handleSubmit}
                        className="p-4 rounded-lg text-black font-Poppins">

                        <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold mb-1">Name</label>
                            <input type="text"
                                id="name" name="name"

                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="title" className="block font-semibold mb-1">Title</label>
                            <input type="text"
                                id="title" name="title"
                                placeholder="Title"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
                            <input type="email"
                                id="email" name="email"
                                placeholder="Your Email" className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block font-semibold mb-1">Message</label>
                            <textarea id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2" required />
                        </div>

                        <div className='flex justify-end'>
                            <input
                                className="btn w-full bg-sky-500 text-white "
                                type="submit"
                                value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Feedback;