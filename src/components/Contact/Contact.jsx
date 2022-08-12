import React, { useRef, useState } from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';



export default function Contact() {
    const [nameVal, nameValUpdate] = useState("");
    const [emailVal, emailValUpdate] = useState("");
    const [msgVal, msgValUpdate] = useState("");

    // Functions on Change Val to change value of input tags
    const nameValFun = (e) => {
        nameValUpdate(e.target.value);
    }
    const emailValFun = (e) => {
        emailValUpdate(e.target.value);
    }
    const msgValFun = (e) => {
        msgValUpdate(e.target.value);
    }




    // Contact Form eMail settings
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_r0sv0km', 'template_ndjxqrg', form.current, 'vI6js-G106LZPuu7p')
            .then((result) => {
                console.log(result.text);
                nameValUpdate("");
                emailValUpdate("");
                msgValUpdate("");
                let x = document.getElementById("successMessage");
                x.innerHTML = `<span style="color: green" id="successMessage"> Your Message is Sent, Successfully. <span style="background: green; color: white; padding: 1px; border-radius: 3px"> Thanks! </span> </span>`;

                setTimeout(function () {
                    x.style.visibility = "hidden";
                }, 5000);

            }, (error) => {
                console.log(error.text);

                let x = document.getElementById("successMessage");
                x.innerHTML = `
                <span style="color: red" id="successMessage"> Message is not submitted, please try again later </span>`;

                setTimeout(function () {
                    x.style.visibility = "hidden";
                }, 5000);
            });
    };



    return (
        <div className='Contact-Section'>
            <div className="contact-left">
                <span>
                    Let's Start Your Project...
                </span>
                <span>
                    Contact Me
                </span>


                {/* <div
                    className="blur c-blur1"
                    // style={{ background: "#ABF1FF94" }}
                    style={{ background: "var(--purple)" }}
                ></div> */}
            </div>
            <div className="contact-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Name' name="user_name" className="user" value={nameVal} onChange={nameValFun} required />
                    <input type="email" placeholder='Email' name="user_email" className="user" value={emailVal} onChange={emailValFun} required />
                    <textarea name="user_message" className="user" id="user_message" placeholder='Write your message here...' value={msgVal} onChange={msgValFun} required></textarea>
                    <input type="submit" value="Send Message" className='button' />
                </form>

                <div style={{ position: "absolute", marginLeft: "5rem", marginTop: "1rem" }} id="successMessage"></div>


                <div
                    className="blur c-blur2"
                    style={{ background: "#ABF1FF94" }}
                // style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    )
}
