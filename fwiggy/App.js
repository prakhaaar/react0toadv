import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import appStore from './utils/appStore' // your redux store

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Contacts from "./components/Contacts";
import Loading from './components/Loading';
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from "./utils/UserContext";

// Lazy loaded components
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        setUserName("Prakhar");
    }, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <Header />
            <Outlet />
        </UserContext.Provider>
    );
};

// Wrap the whole app with Redux Provider
const RootApp = () => (
    <Provider store={appStore}>
        <RouterProvider router={appRouter} />
    </Provider>
);

// Router configuration
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Body /> },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<Loading />}>
                        <Grocery />
                    </Suspense>
                ),
            },
            { path: "/contacts", element: <Contacts /> },
            { path: "/restaurant/:resId", element: <RestaurantMenu /> },
        ],
        errorElement: <Error />,
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RootApp />);
