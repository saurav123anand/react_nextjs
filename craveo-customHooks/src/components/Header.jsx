
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const [toggleLogin, setToggleLogin]=useState(false);
    const isOnline = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container"> 
                <img src={LOGO_URL} 
                alt="App Logo" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login-btn" onClick={()=>setToggleLogin(!toggleLogin)}>{toggleLogin ? "Logout" : "Login"}</button>
                </ul>
            </div>

            <div className="online-status">
                {isOnline ? <span style={{color:"green"}}>● Online</span> : <span style={{color:"red"}}>● Offline</span>}
            </div>
        </div>
    )
}
export default Header;