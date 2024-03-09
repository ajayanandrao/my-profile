import React, { useEffect, useState } from 'react'
import "./SectionThree.scss";
import whatsapp from "./../img/whatsapp.png"
import mail from "./../img/mail.png"
import v from "./../img/Skype.png"

import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';
import { motion } from "framer-motion"

import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);


const SectionThree = () => {
    const tl = gsap.timeline();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const messageRef = collection(db, "MyProfile");

    const handleSubmit = async () => {
        if (!name || !email || !message) {
            return
        }
        try {
            await addDoc(messageRef, {
                name: name,
                email: email,
                message: message,
                timestamp: serverTimestamp()
            });
            setShowSuccessMessage(true);
            console.log("message added");
            setName("");
            setEmail("");
            setMessage("");
        } catch (e) {
        }
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    }


    useGSAP(
        () => {
            // const boxes = gsap.utils.toArray('.box');
            // const boxes = boxRef.current;

            gsap.to(".contact-option", {
                x: "0px",
                opacity: 1,

                scrollTrigger: {
                    trigger: ".contact-option",
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: 1.5,
                    // markers: true,

                },
            });

            gsap.to(".Form-div", {
                x: 0,
                opacity: 1,

                scrollTrigger: {
                    trigger: ".Form-div",
                    start: 'top bottom',
                    end: 'top 20%',
                    scrub: 1.5,
                    // markers: true,

                },
            });
        },

        // { scope: main }
    );

    const one = () => {
        tl.to(".")
    }


    return (
        <>
            {showSuccessMessage &&
                <motion.div
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    className="toast-div">
                    <div className="toast-inner-div">
                        Successfully send, Thank You!
                    </div>
                </motion.div>
            }

            <div className="Contact-div-wrapper">
                <div className='tile-div'><h1 className='title'>GET IN TOUCH</h1></div>
                {/* https://ajayanandrao.github.io/VChat/qHIcUV2VcxQ11kasusyE5kFZ1713 */}
                <div className="contact-div">
                    <div className="contact-option">

                        <a href='mailto:ajayanandrao@outlook.com' className='contact-card-link'>
                            <motion.div
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -15, scale: 1.1 }}
                                className='card-main'>
                                <div className='card-bg btn'>
                                    <div className='text-icon-div'>
                                        <img src={mail} alt="" className='contact-icons' />
                                        Email
                                    </div>
                                    <div className='text-icon-div' style={{ textTransform: "lowercase" }}>ajayanandrao@outlook.com</div>
                                </div>
                            </motion.div>
                        </a>

                        <a href='https://web.whatsapp.com/' target='blank'>
                            <div className='mt-3 card-main'>
                                <div className='card-bg btn'>
                                    <div className='text-icon-div'>
                                        <img src={whatsapp} alt="" className='contact-icons' />
                                        WhatsApp
                                    </div>
                                    <div className='text-icon-div'>7385734759</div>
                                </div>
                            </div>
                        </a>

                        <a href='https://ajayanandrao.github.io/VChat/qHIcUV2VcxQ11kasusyE5kFZ1713' target='blank'>
                            <motion.div
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: 15, scale: 1.1 }}

                                className='mt-3 card-main'>
                                <div className='card-bg btn'>
                                    <div className='text-icon-div'>
                                        <img src={v} alt="" className='contact-icons' />
                                        live:ajayanandrao02
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    </div>

                    <div className="Form-div">
                        <div>
                            <input type="text" placeholder='Your Name' className='input'
                                onChange={(e) => setName(e.target.value)} value={name}
                            />
                            <div className="input-line" ></div>
                        </div>

                        <div className='my-5'>
                            <input type="text" placeholder='Your Email' className='input'
                                onChange={(e) => setEmail(e.target.value)} value={email}
                            />
                            <div className="input-line"></div>
                        </div>

                        <div>
                            <input type="text" placeholder='Message' className='input'
                                onChange={(e) => setMessage(e.target.value)} value={message}
                            />
                            <div className="input-line" ></div>
                        </div>
                        <div className="submit" onClick={handleSubmit}>Send Message </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionThree