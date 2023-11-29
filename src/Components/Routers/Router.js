


//import Home from '../Home/Home'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Business from '../Business/Business'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import TechOnUdemy from '../TechOnUdemy/TechOnUdemy'

            
           const Router = () => {
              return (
               
                <div>
                    
                    <BrowserRouter>
                    <Navbar/>
                    <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path ="/techonudemy" element={<TechOnUdemy/>}/>
                    <Route path="/first/:category" element ={<Business/>}/>
                    </Routes>
                    </BrowserRouter>
                    
                    </div>
                
                    
                    
                
              )
            }
            export default Router 