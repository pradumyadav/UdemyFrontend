


//import Home from '../Home/Home'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Business from '../Business/Business'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import TechOnUdemy from '../TechOnUdemy/TechOnUdemy'
import Register from '../UserLoginRegister/Register'
import Login from '../UserLoginRegister/Login'
import SubCategory from '../Business/SubCategory'
import { useSelector } from 'react-redux'

import CartCheckout from '../Cart/BootstrapCart'
import Learn from '../Learn/Learn'
            
           const Router = () => {
            const user =useSelector((state)=>state.user)
              return (
               
                <div>
                    
                    <BrowserRouter>
                    <Navbar/>
                    <Routes>
                      <Route path="/" element={<Home/>}/>

                  {!user && 
                  (
                  <>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/register" element={<Register/>}></Route>
                  </>) }
                   

                    <Route path ="/techonudemy" element={<TechOnUdemy/>}/>
                    <Route path="/first/:category" element ={<Business/>}/>
                    <Route path="/second/:category" element={<SubCategory/>}></Route>
                    <Route path ="/cart" element={<CartCheckout/>}/>
                    <Route path="/learn" element={<Learn/>}></Route>
                   
                    </Routes>
                    
                    </BrowserRouter>
                    
                    </div>
                
                    
                    
                
              )
            }
            export default Router 