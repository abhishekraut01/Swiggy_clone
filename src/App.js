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
import RestorentMenu from './components/RestorentMenu';

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
            
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)
