# Lazy Loading in React

Lazy loading is a technique to optimize React applications by loading components only when they are needed. This reduces the initial bundle size and improves performance, especially for large apps.

## Benefits

- Faster initial load times
- Reduced bandwidth usage
- Improved user experience

## How It Works

React provides the `React.lazy()` function to dynamically import components. Combined with `Suspense`, you can display a fallback UI while the component loads.

### Example

```jsx
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

## Use Cases

- Large components or pages
- Route-based code splitting
- Third-party libraries

## Resources

- [React Docs: Code-Splitting](https://react.dev/reference/react/lazy)
- [React Docs: Suspense](https://react.dev/reference/react/Suspense)
