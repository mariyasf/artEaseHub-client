import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import FeedbackCard from '../../Components/FeedbackCard';


const CustomerFeedback = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/feedback')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data);
            })
    }, []);

    return (
        <div>
            <div className='text-center my-10'>


                <h2 className='text-[#331A15] font-Rancho font-bold text-4xl'>Customer Reviews</h2>

            </div>

            <Marquee  className='py-10'>
                {
                    review.map(feed =>
                        <FeedbackCard key={feed.id} feed={feed}>

                        </FeedbackCard>
                    )
                }
            </Marquee>

        </div>

    );
};

export default CustomerFeedback;