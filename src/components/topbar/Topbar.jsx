import "./topbar.scss"
import {Mail} from '@material-ui/icons'


export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <span className="logo-1">Dafa</span>
                        <span className="logo-2">Dev</span>    
                    </a> 
                    <div className="itemcontainer">
                        <Mail className="icon"/> 
                        <a className="contactBar" href="#contact">Contact</a>
                    </div>                  
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