import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Seller from "./Pages/Seller.jsx"
import Client from "./Pages/Client.jsx"
import Layout from "./component/layout.jsx"
import Home from "./Pages/Home.jsx"
import "./App.less"


const App = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route index element = {<Home />}/>
      <Route path="/client" element={<Client/>}/>
      <Route path="/seller" element={<Seller/>}/>
      </Route>
      
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App