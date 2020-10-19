import { Button } from '@material-ui/core'
import React from 'react'
import "./Contact.css"

function Contact() {

   
    return (
        <div className="contact">
            <div className="contact_image">
                <img class="contact_image_inside" src="/images/vector/Laptop.svg" alt=""/>
            </div>
            <div className="contact_text">
                <h1>Interested to work together?<span className="animated-lets-talk"> Let's talk</span></h1>
                <div className="contact_text_inputtext1">
                    <input type="text" placeholder="Your Name"/>
                    <input className="contact_text_inputext2"type="text" placeholder="Email" />
                    </div>
                <div className="contactcontact">
                    <input className="contact_text_inputtext3" placeholder="Message" type="text" />
                </div>
                <div className="contact_form">
                <Button >Send Button</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
