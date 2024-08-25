import { Typography } from '@material-ui/core'
import './portfolioList.scss'

export default function PortfolioList ({id, title, active, setSelected}) {
    return (
        <>
            <li className={active ? 'portfolioList active' : 'portfolioList'} onClick={() => setSelected(id)} >
                <Typography variant='body1'>{title}</Typography>
            </li>
        </>
    )
}