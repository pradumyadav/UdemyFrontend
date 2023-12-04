import axios from "axios"
import { useEffect, useState } from "react"
import "./Learn.css"


       export default function Learn (){
            const[data,setData]=useState()
            useEffect(()=>{
               axios.get("https://udemy-backend-t47s.onrender.com/api/getlearn")
                .then((res)=>setData(res.data))
                .catch((err)=>console.log(err))
            },[])
            console.log(data)
            return(
                <div>
                    <div className="Learn_data">
                        <div className="Learn_data_Child">
                    {
                        data && data.map((item)=>{
                            return(
                                <div className="middle">
                      <img src={item.img} alt="Not Fond" />
                      <div className="homeTitle">
                        {item.title.slice(0, 45)}...
                      </div>
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
            )
        }