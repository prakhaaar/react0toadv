const parent = React.createElement(
  "div", // type
  { id: "parent" }, // props
  [
    React.createElement("h1", { key: 1 }, "I am Child 1"),
    React.createElement("h2", { key: 2 }, "I am Child 2"),
  ]
);

// Render it to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
