
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
import Footer from "../Footer/Footer";

          export default function Home (){

            const[data,setData]=useState([])
           
            const [items,setItems]=useState()
          
            useEffect(()=>{
              axios.get("https://udemy-backend-t47s.onrender.com/cart/cartfind")
              .then((res)=>setItems(res.data))
              .catch((err)=>console.log(err))
              },[])
              
              // const userid = localStorage.getItem("userId");
                  const handleAddToCart= async(item)=>{
                    console.log(item.id)
                    const cartData= items.find((items)=>items.id === item.id)
                    // console.log(cartData.id)
                    if(cartData){
                      alert("Cart Data Matched")
                    }
          
                    else{
                      await axios.post("https://udemy-backend-t47s.onrender.com/cart/addToCart", item);   
                    }
                    
                  }
            useEffect(()=>{
                axios.get("https://udemy-backend-t47s.onrender.com/api/getdata")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))

            },[])
                return(
                    <div className="home_Parent">
                      
                                
                                <div className="homeImage">
                                    <img src={img1} alt="Not Fond"/>
                                    <div className="homeImage_Sticker">
                                        <h2 style={{color:"#2d2f31"}}>McLaren Racing 101</h2>
                                        <p>Ready to get up to speed on your McLaren <br/>Racing knowledge? Take the NEW course for<br/> free.</p>
                                        <button>Enroll now</button>
                                    </div>
                                </div> 
                                <div className="main_Parent">
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
                                </div>
                                <div className="middleChild">
                                    {
                                        data.filter((item)=>item.type==="home").slice(0,5).map((item,index)=>{
                                            return(
                                                <div  className="homeChild" key={index}> 
                                               
                                                    <div className="homeImg"><img src={item.img} alt="Not Fond"/></div>
                                                    <div className="homChild2">
                                                    <div className="homeTitle">{item.title.slice(0,45)}...</div>
                                                    <div className="homeWriter">{item.writer}</div>
                                                    <div className="homeRating">{item.rating}</div>
                                                    <div className="homePrice">&#8377;&nbsp;{item.price}</div>
                                                    <button onClick={() => handleAddToCart(item)}>Add to cart</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                               </div>
                               <div className="learning">
                                <div className="home_How_Learners">
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
                                        data.filter((item)=>item.type==="home").slice(0,5).map((item,index)=>{
                                            return(
                                                <div  className="homeChild" key={index}> 
                                               
                                                    <div className="homeImg"><img src={item.img} alt="Not Fond"/></div>
                                                    <div className="homChild2">
                                                    <div className="homeTitle">{item.title.slice(0,45)}...</div>
                                                    <div className="homeWriter">{item.writer}</div>
                                                    <div className="homeRating">{item.rating}</div>
                                                    <div className="homePrice">&#8377;&nbsp;{item.price}</div>
                                                    <button onClick={() => handleAddToCart(item)}>Add to cart</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div style={{paddingLeft:"80px",marginTop:"15px"}}>
                                <h2>Top Categories</h2> 
                                </div>
                                                          
                                   <div className="categories_Child">
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
                                    <div className="bottom_Img_First_Parent">
                                      
                                        <div className="udemy_left">
                                            <div className="child_Flex"> 
                                            <img className="udemy_Img" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Not Fond"/>
                                            <span className="business">business</span>
                                            </div>

                                            <div>
                                            <ul   type="disk"><h3 className="home_Down_H1">Upskill your team with Udemy Business</h3>
                                            
                                            <li>Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</li>
                                            <li>International course collection in 14 languages</li>
                                            <li>Top certifications in tech and business</li>
                                            </ul>

                                            </div>
                                            
                                            
                                        </div>
                                        
                                        <div>
                                            <img className="bottom_Img_First" src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg" alt="Not Fond"/>
                                        </div>
                                    </div>
                                </div>


                                <div className="home_SubLast_Parent">
                                    <div className="home_SubLast_SubParent">
                                        <div className="home_SubLast_child1">
                                            <div><img className="home_SubLast_img1" src={img10} alt="Not Fond"/></div>
                                            <p className="home_SubLast_p">Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.</p>
                                            <div className="home_SubLast_Read">Read full story</div>
                                        </div>
                                        <div className="home_SubLast_child2">
                                            <div><img className="home_SubLast_img2" src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg" alt="Not Found" style={{borderRadius:"50%"}}/></div>
                                            <h4>Jim Hemgen</h4>
                                            <p>Principle</p>
                                            <p>Booz Allen Hamilton</p>
                                        </div>
                                    </div>
                                </div> 


                                <div className="home_Last_Parent">
                                    <div className="home_Last_SubParent">

                                    <div className="home_Last_Child1">
                                        <img src="https://s.udemycdn.com/home/non-student-cta/instructor-mobile-v3.jpg" alt="Not Found"/>
                                    </div>

                                    <div className="home_Last_Child2">
                                        <div><h1>Become an instructor</h1></div>
                                        <p className="home_Last_P">Instructors from around the world teach millions of learners on Udemy.We provide the tools and skills to teach what you love.</p>
                                      <div className="home_Last_Start">Start teaching today</div> 
                                    </div>

                                    </div>
                                </div>
                               
                        <Footer/>
                    </div>
                )
            }