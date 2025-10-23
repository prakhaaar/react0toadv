import React from "react";

// ✅ Component name should start with a capital letter (UserList)
// ✅ Use arrow function syntax correctly
// ✅ Make sure to return JSX properly inside .map()

export const UserList = ({ data }) => {
  return (
    <div>
      <h2>Users:</h2>

      <ul>
        {data.map((user) => (
          // ✅ Use parentheses instead of curly braces in map
          // to return the <li> directly
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
