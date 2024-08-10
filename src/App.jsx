import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import JobDetails from "./Pages/JobDetails";
import Jobs from "./Pages/Jobs";
import JopFavourite from "./Pages/JopFavourite";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import Faq from "./Pages/Faq";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import UserDashboard from "./Pages/UserDashboard";
import { useDispatch } from "react-redux";
import { getAuth, ShowAllPosts } from "./firebase/mainfunction";
import { useEffect } from "react";
import AdminDashBoard from "./Pages/AdminDashBoard";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuth());
    ShowAllPosts();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Jops",
      element: <Jobs />,
    },
    {
      element: <JobDetails />,
      path: "/JobDetails",
    },
    {
      element: <JobDetails />,
      path: "/JobDetails/:JopId",
    },
    {
      element: <JopFavourite />,
      path: "/SavedJops",
    },
    {
      element: <About />,
      path: "/About",
    },
    {
      element: <Pricing />,
      path: "/Pricing",
    },
    {
      element: <Faq />,
      path: "/faq",
    },
    {
      element: <Register />,
      path: "/Register",
    },
    {
      element: <Contact />,
      path: "/Contact",
    },
    {
      element: <Blog />,
      path: "/Blog",
    },
    {
      element: <UserDashboard />,
      path: "/User_Dashboard",
    },
    {
      element: <AdminDashBoard />,
      path: "/AdminDashBoard",
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
