
import "./Footer.css"
import { PiGlobeBold } from "react-icons/pi";
     export default  function Footer (){
            return(
                <nav>
                     <div className="F_1_Parent">
                        <div className="F_1_Child1">Top companies choose <span style={{color:"#cec0fc"}}>Udemy Business</span> to build in-demand career skills.</div>
                        <div className="F_1_Child2">
                            <img  src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="Not Found"/>
                            <img  src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="Not Found"/>
                            <img  src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="Not Found"/>
                           <img  src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="Not Found"/>
                            <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="Not Found"/>
                            
                        </div>
                    </div>  
                    <div className="F_2_Parent">
                        {/* <div className="F_2_Sub_Parent"> */}
                        <div className="F_2_Child1">
                        <div>
                        <div>Udemy Business</div>
                        <div>Tech on Udemy</div>
                        <div> Get the app</div>
                        <div>About us</div>
                        <div>Contact us</div>
                        </div> 
                        <div>
                        <div>Careers</div>
                        <div>Blog</div>
                        <div>Help and Support</div>
                        <div>Affiliate</div>
                        <div>Investors</div>
                        </div> 
                        <div>
                        <div>Terms</div>
                        <div>Privcy policy</div>
                        <div>Cookie settings</div>
                        <div>Sitemap</div>
                        <div>Accessibility statement</div>
                        </div> 

                        </div>
                      
                    <div className="F_2_Child2">
                        <PiGlobeBold style={{height:"20px",width:"20px"}}/>
                        <div>English</div>
                    </div> 
                    {/* </div> */}
                    </div> 
                    <div className="F_3_Parent">
                        <div className="F_3_Child1"><img className="Footer_logo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="Not Found"/></div>
                        <div className="F_3_Child2">© 2023 Udemy, Inc.</div>
                    </div>
                </nav>
            )
        }