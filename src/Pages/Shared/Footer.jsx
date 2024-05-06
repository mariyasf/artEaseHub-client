import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import footer2 from '/images/footer2.jpg'
import logo from '/images/logo.png'
import './footer.css'
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
    return (
        <>
            <div
                className='mt-10 w-full bg-base-200   flex flex-col lg:flex-row gap-10 
                font-Poppins px-10 lg:px-40 py-20'>
                <div className='text-black flex-1'>
                    <div className='space-y-4'>
                        <img src={logo} className='w-24 h-24' alt="" />
                        <h3 className='text-4xl font-bold'>ArtEaseHub</h3>
                        <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-4 text-3xl '>
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagram />
                            <FaLinkedin />

                        </div>
                    </div>
                    <div className='mt-10 space-y-4'>
                        <h3 className='text-4xl font-Poppins font-bold'>Get in Touch </h3>
                        <div className='space-y-4 text-lg '>
                            <p className='flex gap-4'>
                                <IoMdCall />
                                <span>+88 01533 333 333</span>
                            </p>
                            <p className='flex gap-4'>
                                <MdEmail />
                                <span> info@gmail.com</span>
                            </p>
                            <p className='flex gap-4'>
                                <FaLocationDot />
                                <span>72, Wall street, King Road, Dhaka</span>
                            </p>
                        </div>

                    </div>


                </div>

                <div className='flex-1'>
                    <h2 className='font-Poppins text-3xl pb-5 font-bold'>Connect With Us</h2>

                    <form action="">
                        <input type="text"
                            className='p-4 rounded-xl mb-4 w-full border'
                            name='name'
                            placeholder='Name' />
                        <br />

                        <input type="email"
                            className='p-4 rounded-xl mb-4 w-full border'
                            name='email'
                            placeholder='email' />
                        <br />
                        <textarea
                            className='p-4 rounded-xl mb-4 w-full border'
                            name='message'
                            placeholder='Message'
                            rows='5'
                        ></textarea>

                        <button className='footer-primary-btn font-Poppins '>Send Message</button>

                        <br />


                    </form>
                </div>
            </div>

            <div className='relative bg-black text-neutral-content h-[120px]'
            >
                <aside className='absolute inset-0 flex items-center justify-center gap-5'>
                    <p className='text-white font-Poppins text-xl'>
                        Copyright © 2024 - All right reserved by ArtEaseHub
                    </p>
                </aside>

            </div>

        </>
    );
};

export default Footer;