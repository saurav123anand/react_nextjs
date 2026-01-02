const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, deliveryTime, costForTwoString,cloudinaryImageId} = resData?.data || {};
    return (
        <div className="restaurant-card">
            <img 
                className="restaurant-image" 
                src={cloudinaryImageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660///${cloudinaryImageId}.jpg` : "https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg?output-format=webp"}
                alt="Restaurant" 
            />
            <div className="restaurant-details">
                <h3 className="restaurant-name">{name}</h3>
                <p className="cuisine-type">{cuisines?.join(", ")}</p>
                <p className="rating">{avgRating} stars</p>
                <p className="delivery-time">{deliveryTime} mins</p>
                <p className="average-cost">{costForTwoString}</p>
            </div>
        </div>
    )
}
export default RestaurantCard;
