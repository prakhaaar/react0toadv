import React from "react";

function App() {
  const name = "React Learner";

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a basic example of JSX usage in React.</p>

      {/* JSX is syntactic sugar for React.createElement */}
      <p>JSX is not HTML; it's something like HTML.</p>
      <p>JSX allows you to write HTML-like syntax in your JavaScript code.</p>
    </div>
  );
}

export default App;
