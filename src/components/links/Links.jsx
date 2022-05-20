import "./links.scss"

export default function Links({setMenuOpen}) {

    function hide() {
        setMenuOpen(false)
    }

    return (
        <ul>
            <li>
                <a href="#intro" onClick={hide}>Home</a>
            </li>
            <li>
                <a href="#portfolio" onClick={hide}>Portfolio</a>
            </li>
            <li>
                <a href="#works" onClick={hide}>Works</a>
            </li>
            <li>
                <a href="#references" onClick={hide}>References</a>
            </li>
            <li>
                <a href="#contact" onClick={hide}>Contact</a>
            </li>
        </ul>
    )
}