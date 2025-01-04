import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Submission from "../pages/Submission";
import ImportantDates from "../pages/ImportantDates";
import Committee from "../pages/Committee";
import CallForPapers from "../pages/CallForPapers";
import StudentGrant from "../pages/StudentGrant";
import Awards from "../pages/Awards";
import Registration from "../pages/Registration";
import Layout from "../components/common/Layout";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home /></Layout>,
    },
    {
      path: '/submission',
      element: <Layout><Submission /></Layout>,
    },
    {
      path: '/important-dates',
      element: <Layout><ImportantDates /></Layout>,
    },
    {
      path: '/call-for-papers',
      element: <Layout><CallForPapers /></Layout>,
    },
    {
      path: '/committee',
      element: <Layout><Committee /></Layout>,
    },
    {
      path: '/registration',
      element: <Layout><Registration /></Layout>,
    },
    {
      path: '/student-grant',
      element: <Layout><StudentGrant /></Layout>,
    },
    {
      path: '/awards',
      element: <Layout><Awards /></Layout>,
    },
  ]);