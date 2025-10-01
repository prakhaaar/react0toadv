import React, { Suspense, useState } from "react";

// Lazy load the component
const LazyComponent = React.lazy(() => import("./HeavyComponent"));

export default function LazyLoading() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Lazy Loading Example</h2>
      <button onClick={() => setShow(true)}>Load Heavy Component</button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}
