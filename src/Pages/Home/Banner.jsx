import './banner.css';

const Banner = () => {
    return (
        <>
            <div
                className='banner font-Rancho text-white
            lg:justify-end flex'
            >
                <div className='px-10 pt-20 lg:pt-40 space-y-5'>
                    <h2 className='font-bold text-4xl'>
                        Would you like a Cup of Delicious Coffee?
                    </h2>

                    <p className='text-xl lg:w-[750px]'>
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>

                    <button className='primary-btn'>Learn More</button>
                </div>

            </div >
            <div className='bg-[#ECEAE3] flex flex-col lg:flex-row text-center gap-4 mx-auto p-10'>

                <div>
                    <img className='mx-auto' src="/images/icons/1.png" alt="" />
                    <h3 className='font-Rancho text-xl font-bold'>Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <img className='mx-auto' src="/images/icons/2.png" alt="" />
                    <h3 className='font-Rancho text-xl font-bold'>High Quality</h3>
                    <p>
                        We served the coffee to you maintaining the best quality
                    </p>
                </div>
                <div>
                    <img className='mx-auto' src="/images/icons/3.png" alt="" />
                    <h3 className='font-Rancho text-xl font-bold'>
                        Pure Grades
                    </h3>
                    <p>
                        The coffee is made of the green coffee beans which you will love
                    </p>
                </div>
                <div>
                    <img className='mx-auto' src="/images/icons/4.png" alt="" />
                    <h3 className='font-Rancho text-xl font-bold'>
                        Proper Roasting
                    </h3>
                    <p>
                        Your coffee is brewed by first roasting the green coffee beans
                    </p>
                </div>



            </div>


        </>
    );
};

export default Banner;
