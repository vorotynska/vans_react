import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Dashboard from "./host/Dashboard";
import Reviews from "./host/Reviews";
import Income from './host/Income';
import Layout from './components/Layout';

import "./server"

function App() {
  return (
 
    <BrowserRouter>
 
       <Routes>
        <Route element={<Layout />}>
           <Route path='/' element={ <Home />} />
           <Route path='/about' element={ <About />} />
           <Route path='/vans' element={<Vans />} />
            <Route path='/vans/:id' element={<VanDetail />} />
            <Route path='/host' element={<Dashboard />}>
                    <Route path='/host/income' element={<Income />} />
                    <Route path='/host/reviews' element={<Reviews />} />
            </Route>
            
        </Route>
       </Routes>
    </BrowserRouter>
   
  );
}





export default App;
