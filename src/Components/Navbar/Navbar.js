import React, { useState } from "react";
import "./Navbar.css";
import { IoMdCart } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink ,useNavigate} from "react-router-dom";
import { PiGlobeBold } from "react-icons/pi";
import { logout } from "../../Store/Features/UserSlice";
import { useSelector,useDispatch} from "react-redux";

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [handleHover,setHandleHover]=useState(false)
  const [logOut,setLogOut]=useState(false);
  const user =useSelector((state)=>state.user) ;
  const nav =useNavigate()
  //  console.log(user)
  const dispatch =useDispatch()

  const handleDropDownOpen =()=>{
    setHandleHover(true)
  }

  const handleDropDownClose =()=>{
    setHandleHover(false)
  }

  const handleLogOut=()=>{
      if(user){
        setLogOut(true)
        dispatch(logout())
      nav("/")
      
      }
      else{
        setLogOut(false)
      }
  }
  const categories = [
    "Business",
    "Finance and Accounting",
    "IT & Software",
    "Design",
    "Marketing",
    "Life Style",
    "Photography & Video",
    "Music & Arts",
    "Health & Fitness",
    "Teaching & Academic",
  ];

  const subcategories = {
  
    Business: [
        "Communication",
        "Managements",
        "Business Strategy",
        "Operations",
        "Human Resources.",
      ],
      "Finance and Accounting": [
        "Accounting & Bookkeeping",
        "Compliance",
        "Economic",
        "Finance",
        "Taxes",
      ],
      "IT & Software": [
        "IT Certification",
        "Network & Security",
        "Hardware",
        "Operating system & Servers",
        "Other IT & Software",
      ],
      Design: [
        "Web Design",
      "Game Design",
      "3D & Animation",
       "Fashion Design" ,
        "Other Design",
      ],
      Marketing: [
        "Digital Marketing",
        "Social Media Marketing",
        "Content Marketing",
        "Public Relationship",
        "Product Marketing",
      ],
      "Life Style": [
        "Arts & Crafts",
        "Beauty & Makeup",
        "Food & Beverage",
        "Pet Care & Training",
        "Travel",
      ],
      "Photography & Video": [
        "Digital Photography",
        "Photography",
        "Video Design",
        "Commercial Photography",
        "Photography Tools",
      ],
      "Music & Arts": [
        "Instruments",
        "Music Production",
        "Vocal",
        "Music Software",
        "Music Techniques",
      ],
      "Health & Fitness": [
        "Fitness",
        "Sport",
        "Yoga",
        "Mental Health",
        "Dance",
      ],
      "Teaching & Academic": [
        "Engineering",
        "Math",
        "Science",
        "Social Science",
        "Teacher Training",
      ],
  

    
  };

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="headerPrimary">
      <div className="left part">
        <Link to="/">
        <div className="udemyLogo">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            className="logo"
            alt="Not Fond"
          />
        </div>
        </Link>
        
        <div className="categoriesDiv">
          <span className="categories">Categories</span>
          <div className="sub_Parent">
            {categories.map((category,index) => (
              <div
                key={index}
                onMouseEnter={() => handleCategoryHover(category)}
              >
                <p className="category"><NavLink to={`/first/${category}`}>{category}</NavLink></p>
                {activeCategory === category && (
                  <div className="subcategories">
                    {subcategories[category]?.map((subCategory) => (
                      <p className="subCategory" key={subCategory}><NavLink to={`/second/${subCategory}`}>{subCategory}</NavLink></p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <IoSearchOutline className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for anything" />
      </div>
      <div className="right part">
        <div className="nav_Both">
         
         <Link to="/techonudemy"><span className="teach">Teach Udemy</span></Link> 
        </div>
        <Link to="/cart">
        <IoMdCart className="icon" /></Link> <span></span>

    { !user &&  (
    <>
    <NavLink to="/login"><div className="login button">Log In</div></NavLink>
       <NavLink to="/register"><div className="signup button">Sign up</div></NavLink>
    </>) }
        <div onMouseOver={handleDropDownOpen} style={{border:"2px solid black",height:"30px",width:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}><PiGlobeBold style={{height:"20px",width:"20px"}}/></div>

        {user && handleHover && (
  <button onMouseLeave={handleDropDownClose} onClick={handleLogOut}>
    LogOut
  </button>
)}


      </div>
    </div>
  );
}
