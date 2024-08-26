import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/portfolioList"
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    contentPortfolio,
  } from "../../data";
import { Typography } from "@material-ui/core";

export default function Portfolio() {

    const [selected, setSelected] = useState('front')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'front',
            title: 'Frontend'
        },
        {
            id: 'back',
            title: 'Backend'
        },
        {
            id: 'utils',
            title: 'Implementation'
        },
        {
            id: 'practices',
            title: 'Best Practices'
        }  
    ]

    useEffect(() => {

        switch(selected){
            case 'front':
                setData(webPortfolio)
                break
            case 'back':
                setData(featuredPortfolio)
                break
            case 'utils':
                setData(contentPortfolio)
                break
            case 'practices':
                setData(mobilePortfolio)
                break
            default:
                setData(webPortfolio)
        }

    },[selected])

    return (
        <div className="portfolio" id='portfolio'>
            <Typography variant="h4">Skills</Typography>
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