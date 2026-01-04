import { AppLayout } from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./src/components/About";
import { Profile } from "./src/components/AboutProfile";
import { Team } from "./src/components/AboutTeam";
import { Contact } from "./src/components/Contact";
import { NotFound } from "./src/components/NotFound";
import { ErrorPage } from "./src/components/ErrorPage";
import { Body } from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById('root'));

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // Define child routes here if needed
      {
        path:"/",
        element:<Body/>,  
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "team",
            element: <Team />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <NotFound />
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);