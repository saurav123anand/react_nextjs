import { Link, Outlet } from "react-router-dom";

export const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>
                This is a food delivery application where you can find various restaurants and
                order your favorite food online.
            </p>

            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="team">Team</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};