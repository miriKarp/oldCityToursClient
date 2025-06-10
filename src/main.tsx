import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import store from './redux/store';
import './index.css'

import { vintageTheme } from "./theme/vintageTheme";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { AppInitializer } from './components/auth/appInitializer';

import { SignIn } from './components/auth/signIn.component';
import { SignUp } from './components/auth/signUp.component';
import { Home } from './components/layout/home.component';
import { BookATour } from './components/bookATour.component';
import { Admin } from './components/admin/admin.component';
import { BusinessDetails } from "./components/admin/businessDetails.component";
import { ServicesList } from "./components/admin/servicesList.component";
import Layout from './components/layout/layout.component';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "SignIn", element: <SignIn /> },
      { path: "SignUp", element: <SignUp /> },
      { path: "Home", element: <Home /> },
      { path: "BusinessDetails", element: <BusinessDetails /> },
      { path: "ServicesList", element: <ServicesList /> },
      {
        path: "BookATour",
        element: (
          <ProtectedRoute>
            <BookATour />
          </ProtectedRoute>
        )
      },
      {
        path: "Admin",
        element: (
          <ProtectedRoute requireManager={true}>
            <Admin />
          </ProtectedRoute>
        )
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