import { Typography } from "@material-ui/core"
import "./links.scss"

export default function Links({setMenuOpen}) {

    function hide() {
        setMenuOpen(false)
    }

    return (
        <ul>
            <li>
                <a href="#intro" onClick={hide}> <Typography variant="h4">Home</Typography></a>
            </li>
            <li>
                <a href="#portfolio" onClick={hide}><Typography variant="h4">Skills</Typography></a>
            </li>
            <li>
                <a href="#works" onClick={hide}><Typography variant="h4">Portfolio</Typography></a>
            </li>
            <li>
                <a href="#references" onClick={hide}><Typography variant="h4">About</Typography></a>
            </li>
            <li>
                <a href="#contact" onClick={hide}><Typography variant="h4">Contact</Typography></a>
            </li>
        </ul>
    )
}