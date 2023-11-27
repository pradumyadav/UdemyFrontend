


//import Home from '../Home/Home'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Business from '../Business/Business'
import Navbar from '../Navbar/Navbar'

            
           const Router = () => {
              return (
               
                <div>
                    
                    <BrowserRouter>
                    <Navbar/>
                    <Routes>
                    <Route path="/first/:category" element ={<Business/>}/>
                    </Routes>
                    </BrowserRouter>
                    
                    </div>
                
                    
                    
                
              )
            }
            export default Router 