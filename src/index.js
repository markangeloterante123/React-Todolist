import React from 'react'
import ReactDom from 'react-dom'

//to download the react-router-dom   type in cmd the  npm install react-router-dom
//to set up the router dom using BrowserRouter 
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './styles/app.scss'


ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById('root'))