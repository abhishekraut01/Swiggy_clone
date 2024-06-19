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
import Offers from './components/Offers';
import Myaccount from './components/Myaccount';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Outlet
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
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/my-account',
                element: <Myaccount />,
                errorElement: <ErrorPage />
            },
            {
                path: '/support',
                element: <Support />,
                errorElement: <ErrorPage />
            },
            {
                path: '/search',
                element: <Search />,
                errorElement: <ErrorPage />
            },
        ]
    },

    {
        path: '/offers-near-me',
        element: <Offers />,
        errorElement: <ErrorPage />
    },

    {
        path: '/checkout',
        element: <Checkout />,
        errorElement: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={AppRouter} />)
