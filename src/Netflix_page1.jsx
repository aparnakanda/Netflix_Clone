import React from "react";
import './Netflix.css';
function Page1(){
    return(
        <>
        <div className="task4_page1">
            <div className="task4_page1a">
                <div className="task4_page1a_1"><img src="netflixlogo.png" className="task4_page1a_logo"></img></div>
                <div className="task4_page1a_2">
                    <div className="task4_page1_drop">
                        <select className="eng">
                            <option>English</option>
                            <option>Telugu</option>
                            <option>Hindi</option>
                            <option>Tamil</option>
                        </select>
                    </div>
                    <div className="task4_page1_btn1">
                        <button className="signin">Sign In</button>
                    </div>
                </div>
            </div>
            <div className="task4_page1b">
                <div className="task4_page1b_1">
                  <center> <b className="task4_page1_b1">Unlimited movies, TV Shows, and more</b></center> 
                </div>
                <div className="task4_page1b_2">
               <center>Watch anywhere, Cancel anytime</center> 
                </div>
                <div className="task4_page1b_3">
                   <center>Ready to watch? Enter your email to create or restart your membership.</center> 
                </div>
                <center><div className="task4_page1b_4">
                    <div className="task4_page1_email">
                        <input type="email" placeholder="Email address" className="task4_page1_inp1"></input>
                    </div>
                    <div className="task4_page1_btn2">
                        <button className="task4_page1_btn3">Get Started</button>
                    </div>
                    </div></center>
            </div>
        </div>
        </>
    )
}
export default Page1;