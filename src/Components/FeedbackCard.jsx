

const FeedbackCard = ({ feed }) => {
    const { name, title, message } = feed;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl font-poppins mx-4">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{message}</p>
                <div className="flex justify-between">
                    <p className="py-4 font-bold ">{name}</p>
                    <img className="rounded-full h-8 w-8"
                        src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' alt="" />
                </div>


            </div>
        </div>
    );
};

export default FeedbackCard;