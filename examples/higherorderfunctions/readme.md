# ⚛️ Higher Order Component (HOC) — `MainDataFetch`

## 📖 Overview
A **Higher Order Component (HOC)** in React is a **function that takes a component as an argument and returns a new component** with additional functionality.

In this example, we build a reusable HOC called **`MainDataFetch`** that automatically fetches data from a given API and passes it as props to another component (like `UserList`).

---

## 🧩 What is an HOC?

A **Higher Order Component**:
- Takes another component as input.
- Adds extra behavior or data logic.
- Returns a new component that wraps the original.

It follows the pattern:
```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
Think of it as a wrapper that gives superpowers to ordinary components 💪

⚙️ Implementation
MainDataFetch.js
jsx
Copy code
import React, { useEffect, useState } from "react";

// HOC that handles API fetching and passes data as props
const MainDataFetch = (WrappedComponent, apiUrl) => {
  return function EnhancedComponent(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch(apiUrl);
          if (!res.ok) throw new Error("Network error");
          const json = await res.json();
          setData(json);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }, [apiUrl]);

    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

    // 👇 This is the core of the HOC
    return <WrappedComponent data={data} {...props} />;
  };
};

export default MainDataFetch;
🧠 Explanation
Concept	Description
WrappedComponent	The original component you want to enhance (e.g., UserList)
apiUrl	The API endpoint used for fetching data
EnhancedComponent	The new component returned by the HOC
data, loading, error	Local state variables used to manage API fetch lifecycle
<WrappedComponent data={data} {...props} />	Renders the wrapped component with fetched data and passes down all props

🧩 Example Usage
UserList.js
jsx
Copy code
import React from "react";

export const UserList = ({ data }) => {
  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
App.js
jsx
Copy code
import React from "react";
import MainDataFetch from "./MainDataFetch";
import { UserList } from "./UserList";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Create enhanced component by wrapping UserList
const EnhancedUserList = MainDataFetch(UserList, API_URL);

export default function App() {
  return (
    <div>
      <h1>HOC Example</h1>
      <EnhancedUserList theme="dark" />
    </div>
  );
}
🔍 What Happens Internally
The HOC MainDataFetch takes two arguments: UserList and API_URL.

It fetches data from the API.

When the data is ready, it renders:

jsx
Copy code
<UserList data={data} theme="dark" />
The UserList component now receives:

data → fetched user list

theme → prop passed from the parent

