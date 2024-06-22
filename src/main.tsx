import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { Header } from './components/header.components'
import { SignUp } from './components/signUp.component'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <SignUp />
  </React.StrictMode>,
)
