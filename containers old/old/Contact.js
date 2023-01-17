import React from 'react';
//import { useState } from 'react';
//import { useEffect } from 'react';

const Contact = () => {
  return (
    <div className="container">
        
        <form>
            <div className="input-group" >
                <label> Name  </label>  
                <input  type="text" placeholder ="Your full name.." id="contact-name" onkeyup="validateName()" />
                <span id="name-error"></span>
            </div>

            <div className="input-group" >
                <label >email</label>
                <input type="text"  placeholder="Your email.." id="contact-email" onkeyup="validatemail()"/>
                <span id="email-error"></span>
            </div>

            <div className="input-group" >
                <label>Subject</label>
                <textarea rows="10" placeholder="Write me.." id="messsage" style="height:200px" onkeyup="validatMessage()"></textarea>
                <span id="message-error"></span>
            </div>

            <button>Submit</button> 
            <span id="submit-error"> </span>
        </form>
    </div>
  );
}

export default Contact;