import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/portfolioList"
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
  } from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState('web')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'ecommerce',
            title: 'E Commerce'
        },
        {
            id: 'php',
            title: 'Php Laravel'
        },
        {
            id: 'responsive',
            title: 'Responsive'
        },
        {
            id: 'petgram',
            title: 'Petgram'
        }
    ]

    useEffect(() => {

        switch(selected){
            case 'web':
                setData(webPortfolio)
                break
            case 'ecommerce':
                setData(featuredPortfolio)
                break
            case 'php':
                setData(contentPortfolio)
                break
            case 'responsive':
                setData(mobilePortfolio)
                break
            case 'petgram':
                setData(designPortfolio)
                break
            default:
                setData(featuredPortfolio)
        }

    },[selected])

    return (
        <div className="portfolio" id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => 
                    <PortfolioList 
                        title = {item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id = {item.id}  
                        key={item.id}                     
                    />
                )}
            </ul>
            <div className="container">
                {data.map(item => (
                    <div className="item" key={item.id}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}