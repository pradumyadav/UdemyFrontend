

import axios from "axios";
import React, { useEffect, useState } from "react"
import "./All.css"
import { IoMdPlay } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { IoInfiniteOutline } from "react-icons/io5";



import { useParams } from "react-router-dom";


               function Business (){
                    const params =useParams()
                    console.log(params)
                    const[data,setData]=useState([])
                    useEffect(()=>{
                        axios.get("http://localhost:4005/api/postdata")
                        .then((res)=>setData(res.data))
                        .catch((err)=>console.log(err))
        
                    },[])
                   
                   

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
                                        <img src={item.img}/>
                                        <div className="homeTitle">{item.title.slice(0,45)}...</div>                                      
                                        <div className="homeWriter">{item.writer}</div>
                                        <div className="homeRating">{item.rating}</div>
                                        <div className="homePrice">&#8377;{item.price}</div>
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

                        <div className="populer_Topics_Parent">
                            {data.filter((item)=>
                                {if(item.category===params.category){
                                    return (
                                        item.populerTopics
                                    )
                                }
                            }
                            ).map((item)=>{
                                return(
                                    <div className="populer_Topics_Child">
                                       <div className="populer_Topics_p"> <p>{item.populerTopics}</p></div>
                                    </div>
                                )
                            })

                            }
                        </div>

                        <h1>Second data</h1>
                            {
                               data.filter((item)=>item.type===params.category).slice(5,13).map((item)=>{
                                return(
                                    <div>
                                        <img src={item.img}/>

                                    </div>
                                )
                               })

                            }
                            </div>
                        </>
                    )
                }
                export default Business ;