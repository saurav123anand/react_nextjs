import { IMAGE_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const {info} = resData;
    const { name, cuisines, avgRating, costForTwo,cloudinaryImageId,areaName,locality} = info;
    const deliveryTime = info.sla.deliveryTime;
    // const { name, cuisines, avgRating, deliveryTime, costForTwoString,cloudinaryImageId} = resData?.data || {};
    return (
        <div className="restaurant-card">
            <img 
                className="restaurant-image" 
                src={`${IMAGE_CDN_URL}${cloudinaryImageId.toLowerCase().endsWith(".jpg") ? cloudinaryImageId : cloudinaryImageId + ".jpg"}`}
                alt="Restaurant" 
            />
            <div className="restaurant-details">
                <h3 className="restaurant-name">{name}</h3>
                <p className="cuisine-type">{cuisines?.join(", ")}</p>
                <p className="rating">{avgRating} stars</p>
                <p className="delivery-time">{deliveryTime} mins</p>
                <p className="area-name">{areaName}</p>
                <p className="locality-name">{locality}</p>
                <p className="average-cost">{costForTwo}</p>
            </div>
        </div>
    )
}
export default RestaurantCard;
