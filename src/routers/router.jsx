import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App.jsx'
import Home from "../home/Home.jsx";
import Shop from "../shop/Shop.jsx";
import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import SingleBookPage from "../shop/SingleBookPage.jsx";
import DashBoardLayout from "../dashboard/DashBoardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBook from "../dashboard/EditBook.jsx";
import SignUp from "../components/SignUp.jsx";
import Login from "../components/Login.jsx";
import Donate from "../components/Donate.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";
import BuyNow from "../shop/BuyNow.jsx";
import SearchResultsPage from "../components/SearchResultsPage.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },{
        path: "/about",
        element: <About/>
      },{
        path: "/blog",
        element: <Blog/>
      },{
        path: "/book/:id",
        element: <SingleBookPage/>,
        loader: ({params}) => fetch(`https://bookswap-4zmq.onrender.com/book/${params.id}`)
      }

    ]
    },
    {
      path: "/admin/dashboard",
      element: <PrivateRoute><DashBoardLayout/></PrivateRoute>,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard/>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>
        },
          {
          path: "/admin/dashboard/donate",
          element: <Donate/>
        },
        {
          path: "/admin/dashboard/edit-book/:id",
          element: <EditBook/>,
          loader: ({params}) => fetch(`https://bookswap-4zmq.onrender.com/book/${params.id}`)
        }
      ]
    },

    {
      path: "sign-up",
      element: <SignUp/>
    }, 
    
    {
      path: "login",
      element: <Login/>
    }, 
    {
      path: "logout",
      element: <PrivateRoute><Logout/></PrivateRoute>
    },
    {
      path: "checkout",
      element: <BuyNow/>
    },
    {
      path: "search",
      element: <SearchResultsPage/>
    }
  ]);

  export default router; 
