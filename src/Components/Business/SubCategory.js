

import axios from "axios";
import React, { useEffect, useState } from "react"
import "./All.css"
import { IoMdPlay } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { IoInfiniteOutline } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa6";



import { useParams } from "react-router-dom";


               function SubCategory (){
                    const params =useParams()
                    console.log(params)
                    const[data,setData]=useState([])

                    useEffect(()=>{
                        axios.get("http://localhost:4005/api/getdata")
                        .then((res)=>setData(res.data))
                       
                        .catch((err)=>console.log(err))
        
                    },[])
                   
//                     const filter=data && data.filter((item)=>
//                     {if(item.category===params.category){
//                         return (
//                             item
//                         )
//                     }
//                 })
//                 console.log(data)
//  console.log(filter)
                    return(
                        <>
                        <div>
                        <div className="T_1">
                              <div className="T_2">
                            <h1 className="main_h1">{params.category} Course</h1>
                            <h3 className="main_h3">Courses to get you started</h3>
                            <div className="all_Span">
                            <span>Most Populer</span>
                            <span>New</span>
                            <span>Trending</span>
                            </div>
                           
                            <div className="show_data_1">
                            {
                               data.filter((item)=>item.type===params.category).slice(0,5).map((item)=>{
                                return(
                                    <div className="middle">
                                                    <img src={item.img} alt="Not Fond"/>
                                                    <div className="homeTitle">{item.title.slice(0,45)}...</div>
                                                    <div className="homeWriter">{item.writer}</div>
                                                    <div className="homeRating">{item.rating}</div>
                                                    <div className="homePrice">&#8377;&nbsp;{item.price}</div>
                                    </div>
                                )
                               })

                            }
                            </div>
                            </div>
                        </div>
                        <div className="m_1">
                            <div className="m_2">
                                <div className="m_Icons"><IoMdPlay /></div>
                                <div className="m_description">Learn in-demand skills with over 210,000 video courses</div>
                            </div>

                            <div className="m_2">
                            <div className="m_Icons"><MdStarRate /></div>
                            <div className="m_description">Choose courses taught by real-world experts</div>
                            </div>

                            <div className="m_2">
                            <div className="m_Icons"><IoInfiniteOutline /></div>
                            <div className="m_description">Learn at your own pace, with lifetime access on mobile and desktop</div>
                           </div>

                        </div>

                    {/* Populer Topics................ */}

                        <div>
                            {/* {
                            filter[0].populerTopics.map((item)=>{
                                console.log(item)
                                return(
                                    <div className="populer_Topics_Child">
                                     <p>{item}</p>
                                    </div>
                                )
                            })

                            } */}
                        </div>

                        <div className="all_Courses_Parent">
                            <div className="all_Courses_subParent">
                                <h2>All {params.category} course</h2>
                                <div className="all_courses_Child1">
                                    <div style={{backgroundColor:"#252525",borderRadius:"50%",fontSize:"25px",width:"1.8rem"}}><FaExclamation  style={{color:"white"}}/></div>
                                    <div className="all_courses_Child1_Description">Not sure? All courses have a 30-day money-back guarantee</div>
                                </div>
                                <div className="all_courses_Child2">
                                    <div className="all_courses_subChild1">
                                        <div>--</div>
                                        <div>Filter</div>
                                    </div>
                                    <div className="all_courses_subChild2">
                                    <div style={{fontSize:"12px",fontWeight:"700",color:"#252525"}}>Sort by</div>
                                    <div>Most Populer</div>
                                    </div>
                                </div>
                            </div>
                        </div>



                            <div className="lower_Parent">
                                <div className="lower_Parent_child">
                                <div className="lower_Parent_left">
                                    <div className="lower_Parent_left_Child">
                                        <h2>Ratings</h2>
                                        <div>
                                        <input type="radio"></input>
                                        <lable>⭐⭐⭐⭐⭐ 4.5 & up (8,021)</lable>
                                      </div>
                                        <div>
                                        <input type="radio"></input>
                                        <lable>⭐⭐⭐⭐⭐ 4.0 & up (10,000)</lable>
                                        </div>
                                        <div>
                                        <input type="radio"></input>
                                        <lable>⭐⭐⭐⭐⭐ 4.7 & up (10,000)</lable>
                                        </div>
                                        <div>
                                        <input type="radio"></input>
                                        <lable>⭐⭐⭐⭐⭐ 4.3 & up (9,873)</lable>
                                        </div>
                                        <div>
                                        <input type="radio"></input>
                                        <lable>⭐⭐⭐⭐⭐ 3.9 & up (8,650)</lable>
                                        </div>
                                        

                                    </div>
                                   
                                </div>

                                <div className="lower_Parent_Right">
                            {
                               data.filter((item)=>item.type===params.category).slice(5,13).map((item)=>{
                                return(
                                    <div className="lower_Middle">
                                        <div className="lower_Middle_Img_Des">
                                        <div className="lower_Middle_Child1">
                                       <img style={{border:"1px solid gray"}}src={item.img} alt="Not Fond"/>
                                       </div>
                                       <div className="lower_Middle_Child2">
                                        <div className="businessTitle">{item.title.slice(0,45)}...</div>   
                                        <div style={{width:"98%"}}>{item.des.slice(0,75)}..</div>                                   
                                        <div className="homeWriter">{item.writer}</div>
                                        <div className="homePrice">{item.rating}</div>
                                        </div>
                                        </div>
                                        <div className="lower_Middle_Child3_Parent">
                                        <div className="lower_Middle_Child3">&#8377;{item.price}</div>
                                        </div>
                                    </div>
                                )
                               })

                            }
                            </div>
                            </div>
                            </div>
                            </div>
                        </>
                    )
                }
                export default SubCategory ;