//=====>>>our custom hook page<<<<<<<<<;
import { useState, useEffect } from "react";

import React from "react";

function useOnlineOffline() {
  const [onlineStatus, setOnlineStatus] = useState(false);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus = false;
    });

    window.addEventListener("online", () => {
      setOnlineStatus = true;
    });
  }, []);
  return onlineStatus;
}

export default useOnlineOffline;

//our customhook is created and is ready to check the online status of our render.js
