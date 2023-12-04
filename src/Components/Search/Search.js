import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";



export default function Search() {
  const location= useLocation()
  const data= location.state


  return (
    <div>
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
         {data.map((item) => {
             return (
               <div className="lower_Middle">
                 <div className="lower_Middle_Img_Des">
                   <div className="lower_Middle_Child1">
                     <img
                       style={{ border: "1px solid gray" }}
                       src={item.img}
                       alt="Not Fond"
                     />
                   </div>
                   <div className="lower_Middle_Child2">
                     <div className="businessTitle">
                       {item.title.slice(0, 45)}...
                     </div>
                     <div style={{ width: "98%" }}>
                       {item.des.slice(0, 75)}..
                     </div>
                     <div className="homeWriter">{item.writer}</div>
                     <div className="homePrice">{item.rating}</div>
                   </div>
                 </div>
                 <div className="lower_Middle_Child3_Parent">
                   <div className="lower_Middle_Child3">
                     &#8377;{item.price}
                   </div>
                 </div>
               </div>
             );
           })}
       </div>
     </div>
   </div>
   <Footer/>
    </div>

  );
}
