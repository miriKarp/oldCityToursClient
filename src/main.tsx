import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignIn } from './components/signIn.component';
import { SignUp } from './components/signUp.component';
import { Home } from './components/home.component';
import { BookATour } from './components/bookATour.component';

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/SignIn", Component: SignIn },
  { path: "/SignUp", Component: SignUp },
  { path: "/Home", Component: Home },
  { path: "/BookATour", Component: BookATour }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode >

)
