
const Service = () => {
    return (
        <div className='bg-[url("/images/s1.jpg")] bg-no-repeat bg-cover  flex justify-center items-center font-poppins' >


            <div className='bg-black h-full w-full bg-opacity-80'>
                {/* <img className='w-full h-full  lg:h-[850px]' src='/images/s1.jpg' alt="" /> */}

                <div className="flex flex-col lg:flex-row  justify-evenly m-14">
                    <p className='text-4xl text-center lg:w-1/5 font-Rancho
                     text-white '>
                        <span className="pb-5 border-b">Services That We Provide</span>
                    </p>

                    <p className="text-gray-300 lg:w-2/5 text-xl mt-10 font-Poppins">
                        From serene landscapes to vibrant portraits, we breathe life into every canvas.
                        Our watercolors flow with delicate beauty, while oils evoke realism and abstraction.
                        Charcoal sketches capture detail with finesse, while cartoons ignite imagination.
                        Discover artistry redefined, tailored to your vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 pb-10">
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="/images/s2.jpg" className="h-[350px] w-full" alt="Shoes" /></figure>
                        <div className="card-body  font-Poppins">
                            <h2 className="card-title">Landscape Painting</h2>
                            <a className="btn bg-purple-700 hover:bg-purple-900
                             text-white text-xl uppercase">Explor more</a>
                        </div>
                    </div>

                    <div className="card  bg-base-100 shadow-xl">
                        <figure>
                            <img src="/images/s3.jpg" className="h-[350px] w-full" alt="Shoes" />
                        </figure>
                        <div className="card-body  font-Poppins">
                            <h2 className="card-title">Portrait Drawing</h2>
                            <a className="btn bg-purple-700 hover:bg-purple-900
                             text-white text-xl uppercase">Explor more</a>
                        </div>
                    </div>

                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="/images/s5.jpg" className="h-[350px] w-full" alt="Shoes" /></figure>
                        <div className="card-body  font-Poppins">
                            <h2 className="card-title">Cartoon Drawing</h2>
                            <a className="btn bg-purple-700 hover:bg-purple-900
                             text-white text-xl uppercase">Explor more</a>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="/images/s6.jpg" className="h-[350px] w-full" alt="Shoes" /></figure>
                        <div className="card-body  font-Poppins">
                            <h2 className="card-title">Watercolour Painting</h2>
                            <a className="btn bg-purple-700 hover:bg-purple-900
                             text-white text-xl uppercase">Explor more</a>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Service;