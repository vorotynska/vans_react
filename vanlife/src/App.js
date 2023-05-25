import React from 'react';
import './App.css';
import {
   RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
   Route,
   Link 
  } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About';
import Vans, {loader as vansLoader} from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Dashboard from "./host/Dashboard";
import Reviews from "./host/Reviews";
import Income from './host/Income';
import Layout from './components/Layout';
import Login from './pages/Login';
import HostLayout from './components/HostLayout';
import HostVans from './host/HostVans';
import HostVanDetail from './host/HostVanDetail';
import HostVanInfo from './host/HostVanInfo'
import HostVanPricing from './host/HostVanPricing';
import HostVanPhoto from './host/HostVanPhoto';
import NotFound from './pages/NotFound';
import Error from './components/Error';

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
  <Route index element={ <Home />} />
  <Route path='about' element={ <About />} />
  <Route
   path='login'
  element={<Login />}
  />
  <Route
      path='vans' 
      element={<Vans />} 
      errorElement={<Error />}
      loader={vansLoader} 
      />
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
      <Route path='*' element={<NotFound />} />
 </Route>
))

function App() {
  return (
       <RouterProvider router={router} />
  );
}

export default App;
