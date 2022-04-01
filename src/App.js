import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routes'
import Header from './components/Header'
import store from './store'


export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                < ToastContainer autoClose="3000"/>
                <Header />
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}
