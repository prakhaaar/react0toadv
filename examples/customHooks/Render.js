import useOnlineOffline from "./useOnlineOffline";

//in our render function we call our customohook

const render = () => {
  const onlineStatus = useOnlineOffline(); //gets the boolean value about the onlineStatus.
  onlineStatus === true ? <h1>online</h1> : <h2>offline</h2>; //conditional rendering
};
export default render;
