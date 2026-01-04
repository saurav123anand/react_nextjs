import { useEffect, useState } from "react";
import { resListData } from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"
import { FETCH_RESTAURANTS_URL } from "../utils/constants";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const isOnline = useOnlineStatus();


    useEffect(() => {
        // API call to fetch restaurant data
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch(FETCH_RESTAURANTS_URL);
        const restaurants = await data.json();
        let restaurantList = restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(restaurantList);
        setAllRestaurants(restaurantList);
        setIsLoading(false);
    }

    if (isOnline === false) {
        return <h1>🔴 You are offline! Please check your internet connection.</h1>;
    }


    return isLoading ? <Shimmer /> : (
        <div className="body-container">
            <div className="filter">
                <input type="text" className="search-input" placeholder="Search for restaurants..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                        // Filter restaurants based on search text
                        const filteredRestaurants = allRestaurants.filter(res => res.info.name.toLowerCase().includes(e.target.value.toLowerCase()));
                        setRestaurants(filteredRestaurants);
                    }}
                />

                <button className="filter-btn"
                    onClick={() => {
                        let filteredRestaurants = restaurants.filter(res => res.info.avgRating > 4.5)
                        setRestaurants(filteredRestaurants)
                    }

                    }
                >Top Rated Restaurants</button>
                <button
                    className="filter-btn"
                    onClick={() => setRestaurants(allRestaurants)}
                >
                    Reset
                </button>
            </div>
            {restaurants.length === 0 ? <h1 style={{ textAlign: "center" }}>No restaurants found</h1> : <div className="restaurant-list">
                {/* Restaurant cards will go here */}
                {
                    restaurants.map(restaurant =>
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            <RestaurantCard key={restaurant.info.id}
                                resData={restaurant} />
                        </Link>
                    )
                }
            </div>}
        </div>
    )
}