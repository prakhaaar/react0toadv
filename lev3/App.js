// 👇 1. Import React (needed for JSX to work)
import React from "react";
import ReactDOM from "react-dom/client";

// 👇 2. Write JSX AFTER imports
const jsxHeading = <h1>html using jsx</h1>;

// 👇 3. Mount it to the root div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
