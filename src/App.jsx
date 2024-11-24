import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/AdminDashboard";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallary from "./Pages/Gallary";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import NotFound from "./Pages/NotFound";
import AddItem from "./Components/AddItem";
import ItemList from "./Components/ItemList";
import UpdateItem from "./Components/UpdateItem";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import UserDashboard from "./Pages/UserDashboard";
import TotalOrder from "./Components/TotalOrder";
import TotalUser from "./Components/TotalUser";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import {ProtectedRouteForAdmin} from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryData from "./Components/CategoryData";
import Footer from "./Components/Footer"
import Queries from "./Components/Queries";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
        <Footer/>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
        <Footer/>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
        <Footer/>
      </div>
    ),
  },
  {
    path: "/gallary",
    element: (
      <div>
        <Navbar />
        <Gallary />
        <Footer/>
      </div>
    ),
  },
  {
    path: "/menu",
    element: (
      <div>
        <Navbar />
        <Menu />
        <Footer/>
      </div>
    ),
    children:[{
      path:'/menu/:category',
      element:<CategoryData/>
    }]
  },
  {
    path: "/services",
    element: (
      <div>
        <Navbar />
        <Services />
        <Footer/>
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Navbar />
        <Login />
      </div>
    ),
  },
  {
    path: "/signUp",
    element: (
      <div>
        <Navbar />
        <SignUp />
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <Navbar />
        <NotFound />
      </div>
    ),
  },
  {
    path: "/cart",
    element: (
      <div>
        <Navbar />
        <ProtectedRouteForUser>
          <Cart/>
        </ProtectedRouteForUser>
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <ProtectedRouteForUser>
          <UserDashboard/>
        </ProtectedRouteForUser>
      </div>
    ),
  },
  //only for Admin..
  {
    path: "/admin-dashboard",
    element: (
      <div>
        <Navbar />
        <ProtectedRouteForAdmin>
          <Dashboard/>
        </ProtectedRouteForAdmin>
      </div>
    ),
    children: [
      {
        path: "/admin-dashboard/addItem",
        element: <AddItem />,
      },
      {
        path: "/admin-dashboard/total-order",
        element: <TotalOrder />,
      },
      {
        path: "/admin-dashboard/total-user",
        element: <TotalUser />,
      },
      {
        path: "/admin-dashboard",
        element: <ItemList />,
      },
      {
        path: "/admin-dashboard/updateItem",
        element: <UpdateItem />,
      },
      {
        path: "/admin-dashboard/queries",
        element: <Queries />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
