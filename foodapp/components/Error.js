import React from "react";
import { useRouteError } from "react-dom";

function Error() {
  const er = useRouteError();
  console.log(er);
  return (
    <div>
      <h1>oops</h1>
      <h3>something went wrong</h3>
      <h3>{er.status}</h3>
      <h3>{er.statusText}</h3>
    </div>
  );
}

export default Error;
