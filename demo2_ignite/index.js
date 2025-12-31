import React from 'react';
import {createRoot} from "react-dom/client";

// const parent = React.createElement("div", {id: "parent"},
//     React.createElement("div", {id: "children"},
//         [React.createElement("h1", {id: "child1"}, "first child"),
//             React.createElement("h3", {id: "child2"}, "second child"),]));

// JSX
// const jsxHeading=<h1 className="heading">this is jsx heading1</h1>

const Heading=()=><h1>this is functional component heading</h1>
// console.log(jsxHeading)
const root = createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<Heading/>)