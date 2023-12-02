import axios from "axios";
import React, { useEffect, useState } from "react";
import "./All.css";
import { IoMdPlay } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { IoInfiniteOutline } from "react-icons/io5";
import { FaExclamation } from "react-icons/fa6";

import { useParams } from "react-router-dom";

const userid = localStorage.getItem("userId");
    const handleAddToCart= async(item)=>{
        await axios.post("http://localhost:4005/cart/addToCart", {item, userid});   
    }

function Business() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4005/api/getdata")
      .then((res) => setData(res.data))

      .catch((err) => console.log(err));
  }, []);
  const allPopulertopics = [
    {
        category:"Business",
        content:["PMI Project Management Professional(PMP)",
        "Project Management",
        "Data Modeling",
        "Business Analysis",
        "Real Estate Investing",
        "Microsoft Power BI",
        "SQl",
        "PMI PMBOK",
        "Data Analysis",
        "Product Management"],
    },
    {
        category:"Finance and Accounting",
        content:["Stock Trading",
        "Financial Analysis",
        "Accounting"
        ,"Investing",
        "Forex Trading",
        "Technical Analysis (finance)",
        "Cryptocurrency",
        "Financial Modeling",
        "Algorithmic Trading",
        "Options Trading"],
    },
    {
        category:"IT & Software",
        content:["AWS Certified Cloud Practitioner",
        "Ethical Hackin",
        "CompTIA A+",
        "AWS Certified Solutions Architect - Associate",
        "Amazon AWS",
        "CompTIA Security+",
        "Linux",
        "Kubernetes",
        "ChatGPT",
        "Information Security"],
    },
    {
        category:"Design",
        content:["Blender",
        "Graphic Design",
        "User Experience Design",
        "Adobe Photoshop",
        "3D Modeling",
        "Figma",
        "Adobe Illustrator",
        "Drawing",
        "AutoCAD",
        "Canva"],
    },
    {
        category:"Marketing",
        content:["Digital Marketing",
        "Social Media Marketing",
        "Facebook Ads",
        "Marketing Strategy",
        "Search Engine Optimization (SEO)",
        "Google Ads (Adwords)",
        "Instagram Marketing",
        "Copywriting",
        "ChatGPT",
        "Facebook Marketing"],
    },
    {
        category:"Life Style",
        content:["Reiki",
        "Energy Healing",
        "Chess",
        "Watercolor Painting",
        "Watercolor Painting",
        "Watercolor Painting",
        "Hypnotherapy","Spiritual Healing","Astrology","Painting"],
    },
    {
        category:"Photography & Video",
        content:["Photography",
        "Adobe Premiere",
        "DaVinci Resolve",
        "iPhone Photography",
        "Video Editing",
        "Video Production",
        "Adobe Lightroom",
        "Adobe After Effects",
        "Adobe Photoshop",
        "Filmmaking"],
    },
    {
        category:"Music & Arts",
        content:["Guitar",
        "Music Production",
        "Singing",
        "Piano",
        "Music Theory",
        "Music Composition",
        "FL Studio",
        "DJ",
        "Logic Pro",
        "Songwriting"],
    },
    {
        category:"Health & Fitness",
        content:["Yoga",
        "Nutrition",
        "CBT Cognitive Behavioral Therapy",
        "Meditation",
        "Massage",
        "Fitness",
        "Herbalism",
        "Qi Gong",
        "Pilates",
        "Holistic Medicine"],
    },
    {
        category:"Teaching & Academic",
        content:["Holistic Medicine",
        "Math",
        "Spanish Language",
        "French Language",
        "German Language",
        "English Grammar",
        "IELTS",
        "Calculus",
        "Statistics",
        "Algebra"],
    },
];
      const filterData= allPopulertopics.filter((item)=>item.category===params.category)
      const teachers = [
        
        {
            img:"https://img-c.udemycdn.com/user/75x75/8280056_7887_3.jpg",
            title:"365 Careers",
            des:"Data Analysis, Agile",
            rating:4.7,
            totalStudent:"2,623,082",
            courseNumber:108,
            category:"Finance and Accounting"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/33900490_19da_2.jpg",
            title:"Mohsen Hassan",
            des:"Stock Trading, Financial Trading",
            rating:4.6,
            totalStudent:"373,818",
            courseNumber:11,
            category:"Finance and Accounting"
        },
        {
            img:"ttps://img-c.udemycdn.com/user/75x75/10634862_fb77.jpg",
            title:"Steve Ballinger, MBA",
            des:"Stock Trading, Investing",
            rating:4.5,
            totalStudent:"605,848",
            courseNumber:68,
            category:"Finance and Accounting"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/14942868_3ed6_38.jpg",
            title:"Chris Haroun | 1.4 Million Students",
            des:"Investing, Finance Fundamentals",
            rating:4.6,
            totalStudent:"1,406,078",
            courseNumber:76,
            category:"Finance and Accounting"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/16122994_284f_18.jpg",
            title:"Stephane Maarek | AWS Certified Cloud Practitioner",
            des:"Amazon AWS, AWS Certified Cloud Practitioner",
            rating:4.7,
            totalStudent:"2,276,158",
            courseNumber:64,
            category:"IT & Software"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/27592028_e3fb_6.jpg",
            title:"Jason Dion • 1 Million+ Enrollments Worldwide",
            des:"CompTIA Security+, CompTIA A+",
            rating:4.6,
            totalStudent:"938,858",
            courseNumber:60,
            category:"IT & Software"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/31303958_8529_3.jpg",
            title:"Mumshad Mannambeth",
            des:"Kubernetes, Certified Kubernetes Administrator (CKA)",
            rating:4.6,
            totalStudent:"929,236",
            courseNumber:18,
            category:"IT & Software"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/58935_f800_5.jpg",
            title:"Scott Duffy  • 1.000.000+ Students",
            des:"Microsoft Azure, AZ-900: Microsoft Azure Fundamentals",
            rating:4.6,
            totalStudent:"1,055,033",
            courseNumber:60,
            category:"IT & Software"
        },
        {
          img:"https://img-c.udemycdn.com/user/75x75/4897424_a25c_11.jpg",
          title:"TIA Education, Andrew Ramdayal",
          des:"PMI Project Management Professional (PMP), PMI PMBOK",
          rating:4.7,
          totalStudent:"310,635",
          courseNumber:18,
          category:"Business"
      },
      {
          img:"https://img-c.udemycdn.com/user/75x75/75004102_f8b0_2.jpg",
          title:"Maven Analytics",
          des:"Business Intelligence, Microsoft Power BI",
          rating:4.7,
          totalStudent:"1,121,614",
          courseNumber:38,
          category:"Business"
      },
      {
        img:"ttps://img-c.udemycdn.com/user/75x75/10634862_fb77.jpg",
        title:"Steve Ballinger, MBA",
        des:"Stock Trading, Investing",
        rating:4.5,
        totalStudent:"605,848",
        courseNumber:68,
        category:"Business"
    },
    {
      img:"https://img-c.udemycdn.com/user/75x75/11614232_b0fc.jpg",
      title:"Daniel Walter Scott",
      des:"User Experience Design, Figma",
      rating:4.7,
      totalStudent:"696,429",
      courseNumber:34,
      category:"Business"
  },
        {
            img:"https://img-c.udemycdn.com/user/75x75/11614232_b0fc.jpg",
            title:"Daniel Walter Scott",
            des:"User Experience Design, Figma",
            rating:4.7,
            totalStudent:"696,429",
            courseNumber:34,
            category:"Design"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/16146540_ef4c_15.jpg",
            title:"Lindsay Marsh",
            des:"Graphic Design, Adobe Illustrator",
            rating:4.6,
            totalStudent:"367,114",
            courseNumber:13,
            category:"Design"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/38516954_b11c_3.jpg",
            title:"Andrei Neagoie",
            des:"User Experience Design, Mobile App Design",
            rating:4.6,
            totalStudent:"1,123,305",
            courseNumber:25,
            category:"Design"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/33027212_4271_10.jpg",
            title:"GameDev.tv Team",
            des:"Blender, Game Development Fundamentals",
            rating:4.7,
            totalStudent:"1,090,600",
            courseNumber:52,
            category:"Design"
        },
       
        {
            img:"https://img-c.udemycdn.com/user/75x75/34229724_ec2e_3.jpg",
            title:"Graham Nicholls",
            des:"Neuro-Linguistic Programming, EFT (Emotional Freedom Techniques)",
            rating:4.7,
            totalStudent:"136,812",
            courseNumber:37,
            category:"Life Style"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/27988174_e5c2.jpg",
            title:"Brent Eviston",
            des:"Drawing, Sketching",
            rating:4.8,
            totalStudent:"110,700",
            courseNumber:12,
            category:"Life Style"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/779778_4469_3.jpg",
            title:"Lisa Powers",
            des:"Reiki, Teacher Training",
            rating:4.8,
            totalStudent:"226,687",
            courseNumber:5,
            category:"Life Style"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/23121946_3025_4.jpg",
            title:"Melissa Crowhurst",
            des:"Energy Healing, Spiritual Healing",
            rating:4.8,
            totalStudent:"199,278",
            courseNumber:21,
            category:"Life Style"
        },
        {
          img:"https://img-c.udemycdn.com/user/75x75/36921905_7a32_6.jpg",
          title:"Robin & Jesper",
          des:"Digital Marketing, Social Media Marketing",
          rating:4.6,
          totalStudent:"320,368",
          courseNumber:24,
          category:"Marketing"
      },
      {
          img:"https://img-c.udemycdn.com/user/75x75/37939456_be61_5.jpg",
          title:"Joshua George",
          des:"Search Engine Optimization (SEO), Link Building",
          rating:4.7,
          totalStudent:"137,081",
          courseNumber:22,
          category:"Marketing"
      },
      {
          img:"https://img-c.udemycdn.com/user/75x75/4116740_b790_2.jpg",
          title:"Alex Genadinik",
          des:"Search Engine Optimization (SEO), SEO Audit",
          rating:4.5,
          totalStudent:"759,588",
          courseNumber:197,
          category:"Marketing"
      },
      {
          img:"https://img-c.udemycdn.com/user/75x75/10508972_337e_4.jpg",
          title:"COURSE ENVY",
          des:"Marketing Strategy, Facebook Marketing",
          rating:4.4,
          totalStudent:"522,970",
          courseNumber:29,
          category:"Marketing"
      },
       
        {
            img:"https://img-c.udemycdn.com/user/75x75/913001_767b_4.jpg",
            title:"Jason Allen",
            des:"Music Theory, Ableton Live",
            rating:4.6,
            totalStudent:"283,539",
            courseNumber:117,
            category:"Music & Arts"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/23566298_e66f_4.jpg",
            title:"Tomas George",
            des:"Music Production, Music Mixing",
            rating:4.6,
            totalStudent:"327,888",
            courseNumber:40,
            category:"Music & Arts"
        },
        {
            img:"ttps://img-c.udemycdn.com/user/75x75/5753906_1b3f_4.jpg",
            title:"Robin Hall",
            des:"Piano, Keyboard Instrument",
            rating:4.7,
            totalStudent:"413,402",
            courseNumber:5,
            category:"Music & Arts"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/603974_a5c2_4.jpg",
            title:"Erich Andreas",
            des:"Guitar, Acoustic Guitar",
            rating:4.7,
            totalStudent:"405,813",
            courseNumber:20,
            category:"Music & Arts"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/7240640_bf4c_2.jpg",
            title:"Mark Perren-Jones",
            des:"Massage, Sports Massage",
            rating:4.7,
            totalStudent:"221,529",
            courseNumber:77,
            category:"Health & Fitness"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/21674826_0b4e_2.jpg",
            title:"Bodsphere - Health and Wellness",
            des:"Yoga, Pranayama",
            rating:4.8,
            totalStudent:"28,840",
            courseNumber:9,
            category:"Health & Fitness"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/61192080_163c_4.jpg",
            title:"Michael Eric Everson",
            des:"Massage, Sports Massage",
            rating:4.7,
            totalStudent:"20,556",
            courseNumber:28,
            category:"Health & Fitness"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/26801218_cefd_3.jpg",
            title:"Felix Harder",
            des:"Fitness, Nutrition",
            rating:4.6,
            totalStudent:"212,337",
            courseNumber:37,
            category:"Health & Fitness"
        },
        {
          img:"https://img-c.udemycdn.com/user/75x75/317821_3cb5_10.jpg",
          title:"Phil Ebiner",
          des:"Photography, Digital Photography",
          rating:4.6,
          totalStudent:"2,862,770",
          courseNumber:222,
          category:"Photography & Video"
      },
      {
          img:"https://img-c.udemycdn.com/user/75x75/15601054_5545_28.jpg",
          title:"Louay Zambarakji",
          des:"Video Editing, Color Grading",
          rating:4.7,
          totalStudent:"420,091",
          courseNumber:18,
          category:"Photography & Video"
      },
      {
          img:"https://img-c.udemycdn.com/user/75x75/130091392_74a0_2.jpg",
          title:"Dan Britain",
          des:"Video Editing, ChatGPT",
          rating:4.5,
          totalStudent:"165,755",
          courseNumber:10,
          category:"Photography & Video"
      },
      {
          img:"https://img-c.udemycdn.com/user/75x75/37232048_8e49.jpg",
          title:"Dale McManus",
          des:"Photography, Landscape Photography",
          rating:4.6,
          totalStudent:"136,039",
          courseNumber:5,
          category:"Photography & Video"
      },
        {
            img:"https://img-c.udemycdn.com/user/75x75/133884918_c87f.jpg",
            title:"Linguae Learning",
            des:"Spanish Language, French Language",
            rating:4.6,
            totalStudent:"402,978",
            courseNumber:32,
            category:"Teaching & Academic"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/633228_a6b9_12.jpg",
            title:"Krista King",
            des:"Calculus, Probability",
            rating:4.7,
            totalStudent:"241,048",
            courseNumber:20,
            category:"Teaching & Academic"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/403134_2c7a_5.jpg",
            title:"Keino Campbell, Esq.",
            des:"IELTS, TOEFL",
            rating:4.6,
            totalStudent:"398,752",
            courseNumber:12,
            category:"Teaching & Academic"
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/16912784_49c6_3.jpg",
            title:"Sandra 11Percent",
            des:"German Language, Presentation Skills",
            rating:4.7,
            totalStudent:"110,054",
            courseNumber:7,
            category:"Teaching & Academic"
        },
    ]
    const teachersFilter= teachers.filter((item)=>item.category===params.category)
       
  return (
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
              {data
                .filter((item) => item.type === params.category)
                .slice(0, 5)
                .map((item) => {
                  return (
                    <div className="middle">
                      <img src={item.img} alt="Not Fond" />
                      <div className="homeTitle">
                        {item.title.slice(0, 45)}...
                      </div>
                      <div className="homeWriter">{item.writer}</div>
                      <div className="homeRating">{item.rating}</div>
                      <div className="homePrice">&#8377;&nbsp;{item.price}</div>
                      <button onClick={() => handleAddToCart(item)}>Add to cart</button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="m_1">
          <div className="m_2">
            <div className="m_Icons">
              <IoMdPlay />
            </div>
            <div className="m_description">
              Learn in-demand skills with over 210,000 video courses
            </div>
          </div>

          <div className="m_2">
            <div className="m_Icons">
              <MdStarRate />
            </div>
            <div className="m_description">
              Choose courses taught by real-world experts
            </div>
          </div>

          <div className="m_2">
            <div className="m_Icons">
              <IoInfiniteOutline />
            </div>
            <div className="m_description">
              Learn at your own pace, with lifetime access on mobile and desktop
            </div>
          </div>
        </div>
                <div style={{paddingLeft:"80px",marginTop:"3rem",marginBottom:"1rem"}}>
                 <h2>Populer Topics</h2>
                </div>


        {/* Populer Topics................ */}

                <div className="populerTopics_Parent">
                  <div className="populerTopics_Subparent">
                  {
                    filterData[0].content.map((item)=>{
                      return(
                        <div className="populerTopics_Child">{item}</div>
                      )
                    })
                  }
                  </div>
                </div>
                  <div style={{paddingLeft:"80px",marginTop:"3rem",marginBottom:"1rem"}}>
                    <h2>
                    Popular Instructors
                    </h2>
                  </div>

                {/* Teachers............. */}

                <div className="teachers_Parent">
                  <div className="teachers_SubParent">
                    {
                      teachersFilter.map((item)=>{
                        return(
                          <div className="teachers_Child">
                            <div>
                              <img style={{borderRadius:"50%"}} src={item.img} alt="Not Found"/>
                            </div>
                            <div>
                            <div style={{fontWeight:"800"}}>{item.title}</div>
                            <div className="teachers_Des">{item.des}</div>
                            <span style={{fontWeight:"800"}}>{item.rating}⭐ </span><span>Instructor Rating</span>
                            <div>{item.totalStudent} students</div>
                            <div>{item.courseNumber} courses</div>
                            </div>                          
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                {/* {
            img:"https://img-c.udemycdn.com/user/75x75/16912784_49c6_3.jpg",
            title:"Sandra 11Percent",
            des:"German Language, Presentation Skills",
            rating:4.7,
            totalStudent:"110,054",
            courseNumber:7,
            category:"Teaching & Academic"
        }, */}

        <div className="all_Courses_Parent">
          <div className="all_Courses_subParent">
            <h2>All {params.category} course</h2>
            <div className="all_courses_Child1">
              <div
                style={{
                  backgroundColor: "#252525",
                  borderRadius: "50%",
                  fontSize: "25px",
                  width: "1.8rem",
                }}
              >
                <FaExclamation style={{ color: "white" }} />
              </div>
              <div className="all_courses_Child1_Description">
                Not sure? All courses have a 30-day money-back guarantee
              </div>
            </div>
            <div className="all_courses_Child2">
              <div className="all_courses_subChild1">
                <div>--</div>
                <div>Filter</div>
              </div>
              <div className="all_courses_subChild2">
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#252525",
                  }}
                >
                  Sort by
                </div>
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
              {data
                .filter((item) => item.type === params.category)
                .slice(5, 13)
                .map((item) => {
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
      </div>
    </>
  );
}
export default Business;
