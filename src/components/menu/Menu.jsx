import "./menu.scss"
import Links from "../links/Links"

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <Links setMenuOpen={setMenuOpen}/>
        </div>
    )
}