import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/register/Register';
import SignIn from '../pages/signIn/SignIn';
import LawyerDetails from '../pages/lawyerDetails/LawyerDetails';
import PrivateRoute from '../context/AuthContext/PrivateRoute';
import ClientApply from '../jobApply/clientApply';
import AddJob from '../jobApply/AddJob/AddJob';
import MyApplication from '../jobApply/myApplications/MyApplication';
import HotService from '../pages/Home/HotService';
import ServiceCard from '../Shared/ServiceCard';
import ErrorPage from '../ErrorPage/ErrorPage';
import Manage from '../Dashbord/Manage';
import BookService from '../Dashbord/BookService';
import ServiceToDo from '../Dashbord/ServiceToDo';




const router = createBrowserRouter([
  {
    path: "/",
   Component: RootLayout,
   errorElement: <ErrorPage></ErrorPage>,
   children: [
    {index: true,
        Component: Home
    },
    
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/signIn',
        Component: SignIn
    },
    {
      path: '/manage',
      Component: Manage
    },
    {path: '/booksService',
      Component: BookService
    },
    {
      path: '/serviceToDo',
      Component: ServiceToDo
    },
    {
      path: '/lawers/:id',
      Component: LawyerDetails,
      loader: ({params}) => fetch(`https://service-sharing-server-lovat.vercel.app/lawers/${params.id}`)
    },
    {
      path: 'clientApply/:id',
      element: <PrivateRoute><ClientApply></ClientApply></PrivateRoute>
    },
    {
      path:'myApplications',
      element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
    },
    {
      path: '/addJobs',
      element: <AddJob></AddJob>

    }

   ]
  },
]);

export default router;