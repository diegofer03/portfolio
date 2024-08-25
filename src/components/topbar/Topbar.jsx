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
                            <a href="#portfolio">Skills</a>
                        </li>
                        <li>
                            <a href="#works">Portfolio</a>
                        </li>
                        <li>
                            <a href="#references">References</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
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