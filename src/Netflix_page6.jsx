import React from "react";
import './Netflix.css';
import { GoPlus } from "react-icons/go";
function Page6(){
    return(
        <>
         <div className="task4page6">
            <div className="task4page6a">
                <b className="task4_page6_b1">Frequently asked questions</b>
            </div>
            <div className="task4page6b">
                <div className="task4ques"><b>What is Netflix?</b></div>
                <div className="task4plus">< GoPlus/></div>
            </div>
            <div className="task4page6b">
            <div className="task4ques"><b>How much does Netflix cost?</b></div>
            <div className="task4plus">< GoPlus/></div>
            </div>
            <div className="task4page6b">
            <div className="task4ques"><b>Where can I watch?</b></div>
            <div className="task4plus">< GoPlus/></div>
            </div>
            <div className="task4page6b">
            <div className="task4ques"><b>How do I cancel?</b></div>
            <div className="task4plus">< GoPlus/></div>
            </div>
            <div className="task4page6b">
            <div className="task4ques"><b>What can I watch on Netflix?</b></div>
            <div className="task4plus">< GoPlus/></div>
            </div>
            <div className="task4page6b">
            <div className="task4ques"><b>Is Netflix good for kids?</b></div>
            <div className="task4plus">< GoPlus/></div>
            </div>
            <div className="task4page6h"><br></br>
            <div className="task4_page6b_3">
                   <center>Ready to watch? Enter your email to create or restart your membership.</center> 
                   <center><div className="task4_page6b_4">
                    <div className="task4_page6_email">
                        <input type="email" placeholder="Email address" className="task4_page6_inp1"></input>
                    </div>
                    <div className="task4_page6_btn2">
                        <button className="task4_page6_btn3">Get Started</button>
                    </div>
                    </div></center>
                </div>
            </div>
         </div>
        </>
    )
}
export default Page6;