import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import Transactions from '../pages/Transactions';
import Workshops from '../pages/Workshops';
import Wishlist from '../pages/Wishlist';
import Messages from '../pages/Messages';
import Settings from '../pages/Settings';
import Register from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import  SignUp from '../pages/SignUp';
// import AuthRedirect from '../components/AuthRedirect';
// const Dashboard = lazy(() => import('../pages/MainDashboard'));
const MainDashboard = lazy(() => import('../pages/MainDashboard'));
const EditProfile = lazy(() => import('../pages/EditProfile'));
// const Purchases = lazy(() => import('../pages/Purchases'));
const Purchases = lazy(() => import('../pages/PurchasesAndDownloads'));





const routes = [
    // dashboard
    {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        ),
        layout: "blank",
      },
       {
        path: "/signup",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignUp />
          </Suspense>
        ),
        layout: "blank",
      },
      // {
      //   path: "/auth-redirect",
      //   element:(
      //     <AuthRedirect />
      //   ),
      // },
      {
        path: "/dashboard",
        element: 
         
            <Dashboard /> 
        ,
        children: [
          { path: "", element: <Navigate to="maindashboard" replace /> }, // Redirect to default
          { path: "maindashboard", element: <MainDashboard /> },
          { path: "editProfile", element: <EditProfile /> },
          { path: "purchases", element: <Purchases /> },
          { path: "transactions", element: <Transactions /> },
          { path: "workshops", element: <Workshops /> },
          { path: "messages", element: <Messages /> },
          { path: "settings", element: <Settings /> },
          { path: "wishlist", element: <Wishlist /> },
          // {path:'auth-redirect?token=', element: <AuthRedirect />},
         

        //   { path: "bids", element: <MyBids /> },
        //   { path: "commissions", element: <Commissions /> },
        
        //   { path: "communicationManagement", element: <CommunicationManagement /> },
        //   { path: "auditLog", element: <SecurityAuditLogs /> },
        ],
      },
    // {
    //     path: '/',
    //     element:  <Dashboard />,
    //     layout: 'default',
    // },
    // {
    //     path: '/editProfile',
    //     element:  <EditProfile />,
    //     layout: 'default',
    // },
    // {
    //     path: '/purchases',
    //     element:  <Purchases />,
    //     layout: 'default',
    // },
    // {
    //     path: '/transactions',
    //     element:  <Transactions />,
    //     layout: 'default',
    // },
    // {
    //     path: '/workshops',
    //     element:  <Workshops />,
    //     layout: 'default',
    // },
    // {
    //     path: '/messages',
    //     element:  <Messages />,
    //     layout: 'default',
    // },
    // {
    //     path: '/wishlist',
    //     element:  <Wishlist />,
    //     layout: 'default',
    // },
    // {
    //     path: '/settings',
    //     element:  <Settings />,
    //     layout: 'default',
    // },


];

export { routes };
