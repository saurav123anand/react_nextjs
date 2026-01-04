import React from "react";
import { Link, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error("Route error:", error);

  const message =
    error?.status || error?.statusText
      ? `${error.status || "Error"} — ${error.statusText || error.message}`
      : error?.message || "An unexpected error occurred.";

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>{message}</p>
      <p>
        <Link to="/">Return to Home</Link>
      </p>
    </div>
  );
};
