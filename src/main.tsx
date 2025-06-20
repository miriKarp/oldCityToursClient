import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import store from './redux/store';
import './index.css'

import { vintageTheme } from "./theme/vintageTheme";
import { ProtectedRoute } from "./components/auth/ProtectedRoute.component";
import { AppInitializer } from './components/auth/appInitializer.component';
import { SignIn } from './components/auth/signIn.component';
import { SignUp } from './components/auth/signUp.component';
import { Home } from './components/layout/home.component';
import { BookATour } from './components/bookATour.component';
import { Admin } from './components/admin/admin.component';
import { BusinessDetails } from "./components/admin/businessDetails.component";
import { ServicesList } from "./components/admin/servicesList.component";
import Layout from './components/layout/layout.component';
import { ToursList } from './components/admin/toursList.component';
import { CustomersList } from './components/admin/customersList.component';
import { InvitedTours } from './components/invitedTours.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "SignIn", element: <SignIn /> },
      { path: "SignUp", element: <SignUp /> },
      { path: "Home", element: <Home /> },
      { path: "TourList", element: <ToursList /> },
      { path: "ServicesList", element: <ServicesList /> },
      { path: "CustomersList", element: <CustomersList /> },
      { path: "BusinessDetails", element: <BusinessDetails /> },
      {
        path: "BookATour",
        element: (
          <ProtectedRoute>
            <BookATour />
          </ProtectedRoute>
        )
      },
      {
        path: "BookATour/:serviceId",
        element: (
          <ProtectedRoute>
            <BookATour />
          </ProtectedRoute>
        )
      },
      {
        path: "InvitedTours",
        element: (
          <ProtectedRoute>
            <InvitedTours />
          </ProtectedRoute>
        )
      },
      {
        path: "Admin",
        element: (
          <ProtectedRoute requireManager={true}>
            <Admin />
          </ProtectedRoute>
        ), children: [{ path: "TourList", element: <ToursList /> },
        { path: "ServicesList", element: <ServicesList /> },
        { path: "CustomersList", element: <CustomersList /> },
        { path: "BusinessDetails", element: <BusinessDetails /> },],
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={vintageTheme}>
        <CssBaseline />
        <AppInitializer />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode >

)