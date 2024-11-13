import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css'


import { Header } from './components/header.components'
import { SignUp } from './components/signUp.component'

ReactDOM.createRoot(document.getElementById('root')!).render(

  // <React.StrictMode>
  //   <Header />
  //   <SignUp />
  // </React.StrictMode>,
  
  <Provider store={store}>
    <React.StrictMode>
      <Header />
      <SignUp />
    </React.StrictMode>,
  </Provider>
)
