import React, { useEffect, useState } from 'react'
import "./Contact.scss";
import whatsapp from "./../img/whatsapp.png"
import mail from "./../img/mail.png"
import v from "./../img/Skype.png"
import { motion } from "framer-motion"
import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';
import Canvas from '../Canvas/Canvas';
import "./../index.css"
import { useSelector } from 'react-redux';


const Contact = () => {

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

    const [api, setApiData] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(messageRef, (snapshot) => {
            const newApi = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setApiData(newApi);
        });

        return unsubscribe;
    }, []);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);


    return (
        <>

            <motion.div
                animate={{
                    x: mousePosition.x - 100 / 2, // Adjust according to the size of your circle
                    y: mousePosition.y - 100 / 2, // Adjust according to the size of your circle
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                className="circle"
            ></motion.div>

            <Canvas />
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
                <div className="contact-div-contact">
                    <div className="contact-option">
                        <a href='mailto:ajayanandrao@outlook.com' className='contact-card-link'>
                            <motion.div
                                initial={{ x: 200 }}
                                transition={{ duration: 1.9, delay: 2 }}
                                animate={{ x: 0 }}
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
                            <motion.div
                                transition={{ duration: 1.6, delay: 1.5 }}
                                initial={{ x: 200 }}
                                animate={{ x: 0 }}
                                className='mt-3 card-main'>
                                <div className='card-bg btn'>
                                    <div className='text-icon-div'>
                                        <img src={whatsapp} alt="" className='contact-icons' />
                                        WhatsApp
                                    </div>
                                    <div className='text-icon-div'>7385734759</div>
                                </div>
                            </motion.div>
                        </a>

                        <a href='https://web.skype.com/' target='blank'>
                            <motion.div
                                transition={{ duration: 1.3, delay: 1 }}
                                initial={{ x: 200, }}
                                animate={{ x: 0 }}
                                className='mt-3 card-main'>
                                <div className='card-bg btn'>
                                    <div className='text-icon-div'>
                                        <img src={v} alt="" className='contact-icons' />
                                        Skype
                                    </div>
                                    <div className='text-icon-div'>live:ajayanandrao02</div>
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
                        <div className="submit" onClick={handleSubmit}>Send Message</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact