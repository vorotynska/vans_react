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
import HostLayout from './components/HostLayout';
import HostVans from './host/HostVans';
import HostVanDetail from './host/HostVanDetail';
import HostVanInfo from './host/HostVanInfo'
import HostVanPricing from './host/HostVanPricing';
import HostVanPhoto from './host/HostVanPhoto';

import "./server"

function App() {
  return (
 
    <BrowserRouter>
 
       <Routes>
        <Route path='/' element={<Layout />}>
           <Route index element={ <Home />} />
           <Route path='about' element={ <About />} />
           <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />

            <Route path='host' element={<HostLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='income' element={<Income />} />
                    <Route path='reviews' element={<Reviews />} />
                    <Route path='vans' element={<HostVans />} />
                    <Route path='vans/:id' element={<HostVanDetail />} >
                      <Route index element={<HostVanInfo />} />
                      <Route path='pricing' element={<HostVanPricing />} />
                      <Route path='photo' element={<HostVanPhoto />} />
                    </Route>
            </Route>
          </Route>
       </Routes>
    </BrowserRouter>
   
  );
}





export default App;
