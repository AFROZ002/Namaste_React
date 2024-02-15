
const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        React.createElement("h1", {}, "I am in H1 Tag")
    )
);

console.log(parent);



const heading=React.createElement("h1",
{ id: "heading"},"Hello From React!");
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);