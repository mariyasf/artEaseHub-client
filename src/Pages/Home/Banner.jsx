import { useState } from 'react';
import b1 from '/images/b1.jpg'
import b2 from '/images/b2.jpg'
import b3 from '/images/b3.jpeg'
import b4 from '/images/s1.jpg'

import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: b1, description: "Nature's beauty captured on canvas."
        },
        {
            image: b2, description: "Expressive faces in intricate detail"
        },
        {
            image: b3, description: "Bold strokes, captivating contrasts."
        },
        {
            image: b4, description: "Vibrant hues blending on paper"
        },

    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div className="carousel w-full relative">
            {
                slides.map((slide, index) => (
                    <div key={index}
                        id={`slide${index}`}
                        className={`carousel-item relative w-full h-[800px] ${index === currentSlide ? 'block' : 'hidden'}`}>

                        <img src={slide.image}
                            className="w-full h-[800px]"
                            alt={`Slide ${index + 1}`} />

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-150"></div>

                        <div className={`absolute top-0 left-0 w-full h-full flex flex-col 
                        justify-center items-center text-black
                        ${index === currentSlide ? 'fade-in' : 'fade-out'}`}>

                            <div className='text-[40px] lg:text-[90px] font-Rancho font-bold  
                            lg:w-[650px] mx-auto bg-[#ECEAE3] p-4'>

                                <Typewriter
                                    words={[slide.description]}
                                    loop={false}
                                    cursor={false}
                                    typeSpeed={80}
                                    deleteSpeed={false}
                                />
                            </div>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <button onClick={prevSlide} className="btn btn-circle">❮</button>
                            <button onClick={nextSlide} className="btn btn-circle">❯</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Banner;
