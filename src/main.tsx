import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/store';
import './index.css'
import { SignIn } from './components/auth/signIn.component';
import { SignUp } from './components/auth/signUp.component';
import { Home } from './components/home.component';
import { BookATour } from './components/bookATour.component';
import { Admin } from './components/admin/admin.component';
import { OrderTour } from "./components/orderTour.component";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { AppInitializer } from './components/auth/appInitializer';

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/SignIn", Component: SignIn },
  { path: "/SignUp", Component: SignUp },
  { path: "/Home", Component: Home },
  {
    path: "/BookATour",
    element: (
      <ProtectedRoute>
        <BookATour />
      </ProtectedRoute>
    )
  },
  {
    path: "/OrderTour",
    element: (
      <ProtectedRoute>
        <OrderTour />
      </ProtectedRoute>
    )
  },
  {
    path: "/Admin", element: (
      <ProtectedRoute requireManager={true}>
        <Admin />
      </ProtectedRoute>
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store={store}>
      <AppInitializer />
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode >

)