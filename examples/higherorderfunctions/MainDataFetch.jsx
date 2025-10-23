// so basically this is going to be our HOC
// HOC is a function that takes a component as an argument and returns a new component
// It can return a function or accept a function as an argument
// function1 = (function2) => {}

import React, { useEffect, useState } from "react";

// my HOC which will handle data fetching using API and pass data as props
const MainDataFetch = (WrappedComponent, apiUrl) => {
  // Here, it is accepting a component and an API URL as arguments

  return function EnhancedComponent(props) {
    // Local state for data, loading, and error
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect ==> runs once when component mounts, great for side effects like fetching
    useEffect(() => {
      async function fetchData() {
        try {
          const res = await fetch(apiUrl);
          if (!res.ok) throw new Error("Network error");

          const json = await res.json();
          setData(json); // save data
        } catch (err) {
          setError(err.message); // <-- use setError(),
        } finally {
          setLoading(false); // stop the loader
        }
      }

      fetchData(); // <--- you missed actually calling it here
    }, [apiUrl]);

    // conditional rendering
    if (loading) return <h3>Loading...</h3>;
    if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

    // pass fetched data to the wrapped component
    return <WrappedComponent data={data} {...props} />;
  };
};

export default MainDataFetch;
