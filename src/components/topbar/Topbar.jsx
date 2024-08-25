import { Typography } from "@material-ui/core"
import "./topbar.scss"
// import {Mail} from '@material-ui/icons'


export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <span className="logo-1">DAFA</span>
                        <span className="logo-2">DEV</span>    
                    </a>                
                </div>
                <div className="middle">
                    <ul className="links_list">
                        <li>
                            <a href="#portfolio"> <Typography variant="body1">Skills</Typography> </a>
                        </li>
                        <li>
                            <a href="#works"> <Typography variant="body1">Portfolio</Typography></a>
                        </li>
                        <li>
                            <a href="#references"> <Typography variant="body1">About</Typography></a>
                        </li>
                        <li>
                            <a href="#contact"><Typography variant="body1">Contact</Typography> </a>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}