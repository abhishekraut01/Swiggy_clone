import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';

import Header from './components/Header';
import { Search } from './components/Search';
import { ErrorPage } from './components/ErrorPage';
import Offers from './components/Offers';
import Support from './components/Support';
import Myaccount from './components/Myaccount';
import Checkout from './components/Checkout';
import RestorentMenu from './components/RestorentMenu';

import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Link,
    Route
} from "react-router-dom";


const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path:'/',
                element:<Body/>
            },
            {
                path: '/offers-near-me',
                element: <Offers />
            },
            {
                path: '/Support',
                element: <Support />
            },
            {
                path: '/Myaccount',
                element: <Myaccount />
            },
            {
                path: '/Checkout',
                element: <Checkout />
            },
            {
                path: '/Search',
                element: <Search />
            },
            {
                path: '/Restorentmenu/:resId',
                element: <RestorentMenu />
            },
        ],
        errorElement: <ErrorPage />
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={AppRouter} />)
