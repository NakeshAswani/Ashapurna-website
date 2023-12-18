import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Home from "./pages/Home"
import About from "./pages/About"
import OurJourney from "./pages/OurJourney"
import ManagementSpeaks from "./pages/ManagementSpeaks"
import OurTeam from "./pages/OurTeam"
import CsrSocialResponsibility from "./pages/CsrSocialResponsibility"
import Newsletter from "./pages/Newsletter"
import NriCorner from "./pages/NriCorner"
import WhyInvest from "./pages/WhyInvest"
import Residential from "./pages/Residential"
import MediaAndEvents from "./pages/MediaAndEvents"
import Blogs from "./pages/Blogs"
import ContactUs from "./pages/ContactUs"
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/About",
        element: <About />
    },
    {
        path: "/OurJourney",
        element: <OurJourney />
    },
    {
        path: "/ManagementSpeaks",
        element: <ManagementSpeaks />
    },
    {
        path: "/OurTeam",
        element: <OurTeam />
    },
    {
        path: "/CsrSocialResponsibility",
        element: <CsrSocialResponsibility />
    },
    {
        path: "/Newsletter",
        element: <Newsletter />
    },
    {
        path: "/NriCorner",
        element: <NriCorner />
    },
    {
        path: "/WhyInvest",
        element: <WhyInvest />
    },
    {
        path: "/Residential",
        element: <Residential />
    },
    {
        path: "/MediaAndEvents",
        element: <MediaAndEvents />
    },
    {
        path: "/Blogs",
        element: <Blogs />
    },
    {
        path: "/ContactUs",
        element: <ContactUs />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
