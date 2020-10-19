import { Button } from '@material-ui/core'
import React from 'react'
import "./Mid.css"
import { Link } from "react-router-dom";

function Mid() {
    return (
        <div className="mid">
            <div className="mid_left">
                <div className="mid_text">
                    <h1><span className="mid_text_white">Welcome to </span><span className="mid_colo">Site Name!</span></h1>
                
                <span class="mid_span"><b>#</b>Hey folks</span>
                <div class="mid-animated-info">
                        <span class="animated-item">Thank you for considering us. Over a decade ago we created a business partnership that grew into a friendship that the two of us never could’ve imagined.  I guess we could say the same for the business that has come of it as well. We pinch ourselves every day to be sure it's real, because much of it feels like a dream.</span>
                </div>
                <div className="mid_button">
                        <Button><Link to="/about"><span className="mid_button_color"> More About </span></Link></Button>
                </div>
                </div>
            </div>
            <div className="mid_right">
                <img className="mid_right_pic "src="/images/vector/hero_person.webp" alt=""/>
            </div>
        </div>
    )
}

export default Mid

