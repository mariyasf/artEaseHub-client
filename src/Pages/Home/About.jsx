import { IoIosColorPalette } from 'react-icons/io';
import './about.css'
import { GrClearOption } from 'react-icons/gr';
import { FcServices } from 'react-icons/fc';

const About = () => {
    return (
        <div className='bg-[#ECEAE3] mb-20 flex flex-col lg:flex-row text-center gap-4 mx-auto p-10'>

            <div>
                <IoIosColorPalette className='mx-auto text-8xl text-orange-500' />
                <h3 className='font-Rancho text-xl font-bold'>Unique Designs</h3>
                <p>
                    Each painting is crafted with unique and innovative designs to captivate your imagination.
                </p>
            </div>
            <div>
                <img className='mx-auto' src="/images/icons/2.png" alt="" />
                <h3 className='font-Rancho text-xl font-bold'>High Quality</h3>
                <p>
                    We served the coffee to you maintaining the best quality
                </p>
            </div>
            <div>
                <FcServices className='mx-auto text-8xl ' />
                <h3 className='font-Rancho text-xl font-bold'>
                    Professional Service
                </h3>
                <p>
                    We offer professional-grade services, ensuring meticulous attention to detail and customer satisfaction.
                </p>
            </div>

            <div>
                <GrClearOption className='mx-auto text-8xl text-orange-700' />
                <h3 className='font-Rancho text-xl font-bold'>
                    Customization Options
                </h3>
                <p>
                    Tailor your painting experience with our customizable options, making each piece uniquely yours.
                </p>
            </div>



        </div>
    );
};

export default About;