import './about.css'

const About = () => {
    return (
        <div className='bg-[#ECEAE3] my-20 flex flex-col lg:flex-row text-center gap-4 mx-auto p-10'>

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
    );
};

export default About;