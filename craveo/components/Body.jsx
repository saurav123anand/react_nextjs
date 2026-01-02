import { resListData } from "../data/data"
import RestaurantCard from "./RestaurantCard"

export const Body = () => {
    return (
        <div className="body-container">
            <div className="search-bar">
                this is search bar
            </div>
            <div className="restaurant-list">
                 {/* Restaurant cards will go here */}
                 {
                    resListData.map(restaurant=><RestaurantCard key={restaurant.data.id}
                        resData={restaurant}
                    />)
                 }
            </div>
        </div>
    )
}