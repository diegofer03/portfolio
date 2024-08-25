import { useEffect, useRef } from "react"
import {init} from 'ityped'
import "./intro.scss"
import { Typography } from "@material-ui/core"

export default function Intro() {

    const textref = useRef();

    useEffect(()=>{
        init(textref.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'Designer' ] })
    },[])

    return (
        <div className="intro" id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profilesbck.png" alt='profile'/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <Typography variant="h2">Hi, I'm</Typography>
                    <Typography variant="h1">Diego Fernandez</Typography>
                    <Typography variant="h3">Web <span ref={textref} ></span> </Typography>
                    {/* <h3></h3> */}
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down-arrow" />
                </a>
            </div>
        </div>
    )
}