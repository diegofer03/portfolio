import { useState } from "react"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./contact.scss"

export default function Contact() {
    const [message,setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        window.location.href = `mailto:diegoafanador10@gmail.com?subject=Contact&body=${message}`;
    }

    return (
        <div className="container_contact">
            <div className="contact" id='contact'>
                <div className="left">
                    <img src="assets/shake.svg" alt="" />
                </div>
                <div className="right">
                    <h2>Contact</h2>
                    <form onSubmit={handleSubmit}>
                        {/* <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/> */}
                        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type="submit" >Contact</button>
                    </form>
                    <div className="contact_links">
                        <a href='https://github.com/diegofer03' rel="noreferrer" target="_blank">
                            <FaLinkedin/>
                        </a>
                        <a href='https://www.linkedin.com/in/diego-fernandez-b27077157/' rel="noreferrer" target="_blank">
                            <FaGithub/>
                        </a>
                    </div>
                </div>
            </div>
            <p >Developed by <a className="develop" href='https://github.com/diegofer03' rel="noreferrer" target="_blank">@diegofer03</a></p>
        </div>
    )
}