
import "./Home.css"
import axios from "axios";
import img1 from "../../Assest/1c1f8809-69ec-43d7-8770-a145a714df9e.jpg"
import img2 from "../../Assest/att.svg"
import img3 from "../../Assest/cisco.svg"
import img4 from "../../Assest/citi.svg"
import img5 from "../../Assest/ericsson.svg"
import img6 from "../../Assest/hewlett_packard_enterprise.svg"
import img7 from "../../Assest/procter_gamble.svg"
import img8 from "../../Assest/samsung.svg"
import img9 from "../../Assest/volkswagen.svg"
import img10 from "../../Assest/quote.svg"
import img11 from "../../Assest/play-button.png"
import { useEffect, useState } from "react";

          export default function Home (){

            const[data,setData]=useState([])

            useEffect(()=>{
                axios.get("https://udemy-backend-t47s.onrender.com/api/postdata")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))

            },[])
                return(
                    <div className="home_Parent">
                      
                                
                                <div className="homeImage">
                                    <img src={img1} alt="Not Fond"/>
                                </div> 
                                <div className="partners">
                                    <h2>Trusted by over 15,000 companies and millions of learners around the world</h2>
                                    <div className="imgParent">
                                    <div><img src={img2} alt="Not Fond"/></div>
                                    <div><img src={img3} alt="Not Fond"/></div>
                                    <div><img src={img4} alt="Not Fond"/></div>
                                    <div><img src={img5} alt="Not Fond"/></div>
                                    <div><img src={img6} alt="Not Fond"/></div>
                                    <div><img src={img7} alt="Not Fond"/></div>
                                    <div><img src={img8} alt="Not Fond"/></div>
                                    <div><img src={img9} alt="Not Fond"/></div>
                                    
                                    </div>
                                </div>
                                    <div className="partners_Parent">
                                    <div className="belowPartners">
                                    <h1 className="h1">A broad selection of courses</h1>
                                    <p className="p">Choose from over 210,000 online video courses with new additions published every month</p>
                                    <span>Python</span>
                                    <span>Excel</span>
                                    <span>Web Development</span>
                                    <span>JavaScript</span>
                                    <span>Data Science</span>
                                    <span>Amazon AWS</span>
                                    <span>Drawing</span>
                                </div>
                                    </div>
                               <div className="middleParent">
                                <div className="data_Driven_Parent"> 
                                <div className="data_Driven">
                                    <h2>Lead data-driven decisions with Data Science</h2>
                                    <div>Data science application is an in-demand skill in many industries worldwide — including
                                   finance, transportation, education, manufacturing, human resources, and banking.
                                    Explore data science courses with Python, statistics, machine learning, and more to grow...
                                    </div>
                                    <button className="home_Button">Explore python</button>
                                </div>
                                </div>
                                <div className="middleChild">
                                    {
                                        data.filter((item)=>item.type==="home").map((item,index)=>{
                                            return(
                                                <div  className="homeChild" key={index}> 
                                               
                                                    <div className="homeImg"><img src={item.img} alt="Not Fond"/></div>
                                                    <div className="homChild2">
                                                    <div className="homeTitle">{item.title.slice(0,45)}...</div>
                                                    <div className="homeWriter">{item.writer}</div>
                                                    <div className="homeRating">{item.rating}</div>
                                                    <div className="homePrice">&#8377;&nbsp;{item.price}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                               </div>
                               <div className="learning">
                                <div>
                                    <h1>How learners like you are achieving their goals</h1>
                                </div>
                                <div className="learningChild">
                                <div className="learningSubchild">
                                <div className="learningMargin">
                                   <div className="quote"><img src={img10} alt="Not Fond"/></div>
                                    <div>I am proud to say that after a few months of
                                    taking this course...<span className="middleSpan">I passed my exam and am</span>
                                    <span style={{fontSize:"14px",fontWeight:"800"}}>now an AWS Certified Cloud Practitioner!</span>
                                   This content was exactly what the CCP exam
                                    covered.
                                    </div>
                                    <div className="waASpan">
                                        <span className="waSpan">WA</span><span className="aSpan">A</span>
                                        </div>
                                    </div>
                                    <div className="playFlexs">
                                    <img className="playButton" src={img11} alt="Not Fond"/>
                                    <span >[NEW] Ultimate AWS Certified Cloud Practitioner</span>
                                    </div>
                                </div>
                               <div className="learningSubchild">
                                <div className="learningMargin">
                                   <div className="quote"><img src={img10} alt="Not Fond"/></div>
                                    <div>I am proud to say that after a few months of
                                    taking this course...<span className="middleSpan">I passed my exam and am</span>
                                    <span style={{fontSize:"14px",fontWeight:"800"}}>now an AWS Certified Cloud Practitioner!</span>
                                   This content was exactly what the CCP exam
                                    covered.
                                    </div>
                                    <div className="waASpan">
                                        <span className="waSpan">WA</span><span className="aSpan">A</span>
                                        </div>
                                    </div>
                                    <div className="playFlexs">
                                    <img className="playButton" src={img11} alt="Not Fond" />
                                    <span >[NEW] Ultimate AWS Certified Cloud Practitioner</span>
                                    </div>
                                </div>
                                <div className="learningSubchild">
                                <div className="learningMargin">
                                   <div className="quote"><img src={img10} alt="Not Fond"/></div>
                                    <div>I am proud to say that after a few months of
                                    taking this course...<span className="middleSpan">I passed my exam and am</span>
                                    <span style={{fontSize:"14px",fontWeight:"800"}}>now an AWS Certified Cloud Practitioner!</span>
                                   This content was exactly what the CCP exam
                                    covered.
                                    </div>
                                    <div className="waASpan">
                                        <span className="waSpan">WA</span><span className="aSpan">A</span>
                                        </div>
                                    </div>
                                    <div className="playFlexs">
                                    <img className="playButton" src={img11} alt="Not Fond"/>
                                    <span >[NEW] Ultimate AWS Certified Cloud Practitioner</span>
                                    </div>
                                </div>
                                </div>
                               
                                
                                </div>
                                <div className="middleChild">
                                    {
                                        data.filter((item)=>item.type==="home").map((item,index)=>{
                                            return(
                                                <div  className="homeChild" key={index}> 
                                               
                                                    <div className="homeImg"><img src={item.img} alt="Not Fond"/></div>
                                                    <div className="homChild2">
                                                    <div className="homeTitle">{item.title.slice(0,45)}...</div>
                                                    <div className="homeWriter">{item.writer}</div>
                                                    <div className="homeRating">{item.rating}</div>
                                                    <div className="homePrice">&#8377;&nbsp;{item.price}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <h2>Top Categories</h2>                               <div className="categories_Child">
                                <div className="categories">
                                    {
                                       data.filter((item)=>item.type==="categories") 
                                       .map((item,index)=>{
                                        return(
                                            <div key={index}>
                                            
                                             <img src={item.img} alt="Not Fond"/> 
                                             <div>{item.title}</div>
                                             </div>
                                           
                                        )
                                       })
                                    }
                                </div>   
                               
                                </div>
                                <div className="table">
                                 <div className="table_Child">
                                    <table>
                                        <tr>
                                         <th>Development</th>
                                            <th> Business</th>
                                            <th>IT and Software</th>
                                            <th>Design</th>
                                        </tr>
                                        <tr>
                                            <td>Python</td>
                                            <td>Finacial Analysis</td>
                                            <td>Amazon AWS</td>
                                            <td>Photoshop</td>
                                        </tr>
                                        <tr>
                                            <td>Web Development</td>
                                            <td>SQL</td>
                                            <td>Ethiical Hacking</td>
                                            <td> Graphic Design</td>
                                        </tr>
                                        <tr>
                                            <td>Machine</td>
                                            <td>PMP</td>
                                            <td>Cyber Security</td>
                                            <td>Drawing</td>
                                        </tr>
                                        <tr>
                                            <td className="tableButton" >Explore more topics</td>
                                        </tr>
                                    </table>
                                    </div>
                                    {/* <div className="button_Div">
                                    <button className="tableButton">Explore more topics</button>
                                    </div> */}
                                    <div className="bottom_Img_First_Parent">
                                        <div className="udemy_left">
                                            <div className="child_Flex"> 
                                            <img className="udemy_Img" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Not Fond"/>
                                            <span>business</span>
                                            </div>
                                            <ul type="disk"> Upskill your team with Udemy
                                            Business
                                            <li>Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
                                            <li>International course collection in 14 languages</li>
                                            <li>Top certifications in tech and business</li>
                                            </ul>
                                            
                                        </div>
                                        <div>
                                            <img className="bottom_Img_First" src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" alt="Not Fond"/>
                                        </div>
                                    </div>
                                </div> 
                               
                        
                    </div>
                )
            }