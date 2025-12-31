// creating multiple child using array
const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "children"},
        [React.createElement("h1", {id: "child1"}, "first child"),
            React.createElement("h3", {id: "child2"}, "second child"),]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);