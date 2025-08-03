
import ClientLayout from "../layouts/ClientLayout";
import Login from "../pages/shared/Login";
import Home from "../pages/Client/Home";
import Register from "../pages/Client/Register";
import Destinations from "../pages/Client/Destinations";
import Blog from "../pages/Client/Blog";
import TourSearch from "../pages/Client/TourSearch";
import TourList from "../pages/Client/TourList";
import Contact from "../pages/Client/Contact";
import Portfolio from "../pages/Client/Portfolio";
import Gallery from "../pages/Client/Gallery";
import Services from "../pages/Client/Services";
import Team from "../pages/Client/Team";
import AdminLayout from "../layouts/admin";
import Dasboard from "../pages/admin/Dashboard";
import AdminProfile from "../pages/admin/AdminProfile";
import UserManagement from "../pages/admin/UseManagement";


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
        path: 'contact',
        element: <Contact/>
        
    },
    {
        path: 'blog',
        element: <Blog/>
    },
    {
        path: 'toursearch',
        element: <TourSearch/>
    },
    {
        path: 'portfolio',
        element: <Portfolio/>
    },
    {
        path: 'gallery',
        element: <Gallery/>
    },
    {
        path: 'services',
        element: <Services/>
    },
    {
        path: 'team',
        element: <Team/>
    },
    
   
   
   
  ]

    },
    {
        element: <AdminLayout/>,
        path: "/admin/",
        children:[
            {
                index: true,
                element: <Dasboard/>
            },
            {
                path: "adminProfile",
                element: <AdminProfile/>,
            },
            {
                path: "usermanagement",
                element: <UserManagement/>,
            },
        ]

    }

  
];


export default ROUTES;