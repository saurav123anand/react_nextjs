
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 — Page Not Found</h1>
      <p>Sorry, we couldn't find that page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};
