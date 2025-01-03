import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Submission from "../pages/Submission";
import ImportantDates from "../pages/ImportantDates";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/submission',
      element: <Submission />,
    },
    {
      path: '/important-dates',
      element: <ImportantDates />,
    },
    
  ]);