import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <div>
            <Link to={'/'}
            >
                <button className="flex gap-4 items-center p-4
                 hover:bg-[#D2B48C] hover:rounded-xl  mb-10">

                    <FaLongArrowAltLeft />
                    <span>Back to Home</span>
                </button>
            </Link>
        </div>
    );
};

export default HomeButton;