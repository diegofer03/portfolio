import { useState } from "react"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./contact.scss"

export default function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }

    return (
        <div>
            <div className="contact" id='contact'>
                <div className="left">
                    <img src="assets/shake.svg" alt="" />
                </div>
                <div className="right">
                    <h2>Contact</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit" >Send</button>
                        {message && <spam>Thanks, i'll reply :D</spam> }
                    </form>
                    <div>
                        <FaLinkedin/>
                        <FaGithub/>
                    </div>
                </div>
            </div>
            <p>Developed by @diegofer03</p>
        </div>
    )
}