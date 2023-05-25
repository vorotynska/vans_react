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
import VanDetail, {loader as vanDetailLoader} from './pages/VanDetail';
import Dashboard from "./host/Dashboard";
import Reviews from "./host/Reviews";
import Income from './host/Income';
import Layout from './components/Layout';
import Login from './pages/Login';
import HostLayout from './components/HostLayout';
import HostVans, { loader as hostVansLoader} from './host/HostVans';
import HostVanDetail, { loader as hostVanDetailLoader} from './host/HostVanDetail';
import HostVanInfo from './host/HostVanInfo'
import HostVanPricing from './host/HostVanPricing';
import HostVanPhoto from './host/HostVanPhoto';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import { requireAuth } from './utils';

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
   <Route
    path='vans/:id'
     element={<VanDetail />}
     loader={vanDetailLoader}
     />

   <Route path='host' element={<HostLayout />}>
           <Route
            index
             element={<Dashboard />}
             loader={async () => await requireAuth()}
              />
           <Route
            path='income'
             element={<Income />}
             loader={async () => await requireAuth()}
             />
           <Route 
           path='reviews' 
           element={<Reviews />}
           loader={async () => await requireAuth()}
           />
           <Route
            path='vans' 
            element={<HostVans />}
            loader={hostVansLoader}
            />
           <Route
            path='vans/:id'
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
            >
             <Route 
             index
              element={<HostVanInfo />} 
              loader={async () => await requireAuth()}
              />
             <Route
              path='pricing'
               element={<HostVanPricing />}
               loader={async () => await requireAuth()}
               />
             <Route 
             path='photo' 
             element={<HostVanPhoto />}
             loader={async () => await requireAuth()}
             />
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
