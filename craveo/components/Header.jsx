const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container"> 
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrQ7Ly9pqZ6F06bzC5H8hu1Bl7scJF-1IGw&s" 
                alt="App Logo" className="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;