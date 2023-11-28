

import "./Tech.css"
     export default  function TechOnUdemy (){
            return(
              <div>
                <div className="techOnUdemy_Parent">    
                       <img src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg" alt="Not Fond"/>
                </div>

                <div className="tech_Second_Parent">
                    <div className="tech_Second_Parent_First">
                        <div className="tech_Second_Parent_First_Child"><h1>So many reasons to start</h1></div>
                    </div>
                    <div className="tech_Second_Parent_Second">
                        <div className="tech_Second_Parent_Second_Child">
                                <img src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" alt="Not Found"/>
                                <h2>Teach your way</h2>
                                <p className="Tech_Description">Publish the course you want, in the way you want, and always have control of your own content.</p>
                        </div>
                        <div  className="tech_Second_Parent_Second_Child">
                                 <img src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" alt="Not Found"/>
                                <h2>Inspire learners</h2>
                                <p className="Tech_Description">Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                        </div>
                        <div  className="tech_Second_Parent_Second_Child">
                                <img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" alt="Not Found"/>
                                <h2>Get rewarded</h2>
                                <p className="Tech_Description">Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                        </div>
                    </div>
                </div>
                <div className="about_Parent">
                    <div className="about_Child">
                        <span className="about_Span1">62M</span>
                        <span className="about_Span2">students</span>
                    </div>
                    <div className="about_Child">
                    <span className="about_Span1">75+</span>
                    <span className="about_Span2">languages</span>
                    </div>
                    <div className="about_Child">
                    <span className="about_Span1">830M</span>
                    <span className="about_Span2">Enrollments</span>
                    </div>
                    <div className="about_Child">
                    <span className="about_Span1">180+</span>
                    <span className="about_Span2">Countries</span>
                    </div>
                    <div className="about_Child">
                    <span className="about_Span1">15,000+</span>
                    <span className="about_Span2">Enterprise customers</span>
                    </div>
                </div>
             
                <div className="begin_Parent">
                    <div className="begin_Left">
                        <div><h1 className="begine_h1">How to begin</h1></div>
                        <div>
                            <span className="begin_Span">Plan your curriculum</span>
                            <span className="begin_Span">Record your video</span>
                            <span className="begin_Span">Launch your course</span>
                        </div>
                        </div>
                    <div className="begin_Right">
                        <div className="begin_Right_Child1">
                            <div  className="begine_Left_Childsss">
                            <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.The way that you teach — what you bring to it — is up to you.
                            </p>
                            <h4>How we help you</h4>
                            <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
                            </div>
                        </div>
                        <div className="begin_Right_Child2">
                            <img src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg" alt="Not Fond"/>
                        </div>
                    </div>
                </div>
                <div className="launch_ParentOf_Parent">
                    <div className="launch_Parent">
                    <div className="launch_Img"><img src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg" alt="Not Fond"/></div>
                    <div className="launch_Des">
                        <div className="launch_Des_Child">
                        <p>“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”</p>
                        <h5 style={{lineHeight:"1px"}}>Frank Kane</h5>
                        <p style={{fontSize:"17px",lineHeight:"1px"}}>Data Science & IT Certifications</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="second_Last_Parent">
                   <img src="https://s.udemycdn.com/teaching/support-1-v3.jpg" alt="Not Fond"/>
                   
                        <div className="second_Last_Middle">
                            <h1>You won’t have to do it alone</h1>
                            <p className="second_Last_des">Our <span>Instructor Support Team</span> is here to answer your questions<br/> and review your test video, while our <span>Teaching Center </span>gives you plenty <br/>of resources to help you through the process. Plus, get the support of experienced instructors in our online <span>community.</span></p>
                                <p>Need more details you start? Learn more</p>
                        </div>
                   
                    <div> <img src="https://s.udemycdn.com/teaching/support-2-v3.jpg" alt="Not Fond"/></div>
                </div>
                <div className="Last_Parent">
                    <div  className="Last_Parent_Child">
                        <h1 className="Last_Parent_h1">Become an instructor today</h1>
                        <p style={{fontSize:"20px"}}>Join one of the world’s largest online learning <br/>marketplaces.</p>
                        <button className="Last_Parent_Button">Get started</button>
                    </div>
                </div>
              </div>
            )
        }