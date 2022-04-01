import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routes'
import Header from './components/Header'
import history from './services/history'
import store from './store'



export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                < ToastContainer autoClose="3000"/>
                <Header />
                <Routes />
            </Router>
        </Provider>
    )
}
