import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../components/home/Contact";
import Blog from "../components/home/Blog";
import Benefits from "../components/home/Benefits";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import CarDetails from "../pages/CarDetails";
import AllCars from "../pages/AllCars";
import AddCars from "../pages/AddCars";
import EditCars from "../pages/EditCars";
import EditProfile from "../pages/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          fetch("https://automotive-artistry-server.vercel.app/cars"),
      },
      {
        path: "/cars/:id",
        element: <CarDetails></CarDetails>,
        loader: ({ params }) =>
          fetch(
            `https://automotive-artistry-server.vercel.app/cars/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/benefits",
        element: <Benefits></Benefits>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "home",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },
      {
        path: "profile/edit/:id",
        element: (
          <PrivateRoutes>
            <EditProfile></EditProfile>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-artistry-server.vercel.app/user/get/${params.id}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          ),
      },
      {
        path: "all-cars",
        element: (
          <PrivateRoutes>
            <AllCars></AllCars>
          </PrivateRoutes>
        ),
      },
      {
        path: "add-cars",
        element: (
          <PrivateRoutes>
            <AddCars></AddCars>
          </PrivateRoutes>
        ),
      },
      {
        path: "edit-cars/:id",
        element: (
          <PrivateRoutes>
            <EditCars></EditCars>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-artistry-server.vercel.app/cars/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
