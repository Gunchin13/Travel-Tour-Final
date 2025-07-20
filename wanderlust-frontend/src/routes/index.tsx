
import ClientLayout from "../layouts/ClientLayout";
import About from "../pages/Client/TourList";
import Login from "../pages/shared/Login";
import Home from "../pages/Client/Home";
import Register from "../pages/Client/Register";
import Destinations from "../pages/Client/Destinations";
import Pages from "../pages/Client/Pages";
import Blog from "../pages/Client/Blog";
import ToursCard from "../companents/ToursCard/indext";
import TourSearch from "../pages/Client/TourSearch";
import TourList from "../pages/Client/TourList";


const ROUTES = [
    {
    path: '/',
    element: <ClientLayout/>,
    children:[{
         index: true,
         element: <Home/>
    },
    {
        path: 'tourlist',
        element: <TourList/>
    },
    {
        path: 'login',
        element: <Login/>
    },
    {
        path: 'register',
        element: <Register/>
    },
    {
        path: 'destinations',
        element: <Destinations/>
    },
    {
        path: 'pages',
        element: <Pages/>
    },
    {
        path: 'blog',
        element: <Blog/>
    },
    {
        path: 'toursearch',
        element: <TourSearch/>
    },
   
   
   
  ]

    }

  
]


export default ROUTES;