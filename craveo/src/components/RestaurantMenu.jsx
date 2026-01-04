import { useEffect } from "react";
import { useParams } from "react-router"
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const {resId}=useParams();

    console.log("ResId:", resId);
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h1 className="menu-restaurant-name">Restaurant #{resId}</h1>
                <p className="menu-subtitle">Explore our delicious menu</p>
            </div>
            <div className="menu-content">
                <h2 className="menu-title">Menu</h2>
                <ul className="menu-items-list">
                    <li className="menu-item">
                        <span className="item-name">Biryani</span>
                        <span className="item-badge">Popular</span>
                    </li>
                    <li className="menu-item">
                        <span className="item-name">Pasta</span>
                        <span className="item-badge">Veg</span>
                    </li>
                    <li className="menu-item">
                        <span className="item-name">Burger</span>
                        <span className="item-badge">Fast Food</span>
                    </li>
                    <li className="menu-item">
                        <span className="item-name">Salad</span>
                        <span className="item-badge">Healthy</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu