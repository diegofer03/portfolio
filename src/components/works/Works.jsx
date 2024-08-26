import { useState } from "react";
import "./works.scss"
import { Box, Button, styled, Typography } from "@material-ui/core";

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  width: '70%',
  padding: '6px 12px',
  border: '3px solid',
  lineHeight: 1.5,
  borderRadius: '20px',
  backgroundColor: 'White',
  borderColor: '#ac4040',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ]
  .join(','),
  '&:hover': {
    backgroundColor: '#f9c1c1',
    boxShadow: 'none',
  },
});

export default function Works() {

    const [currentSlider, setSlide] = useState(0)

    const data = [
        {
          id: "1",
          icon: "./assets/writing.png",
          title: "Threads Clone",
          url: 'https://threads-uwdp.onrender.com/',
          desc:
            "Threads clone project developed in angular for the frontend and nest.js with mongoDB for the backend (Free Host, firts load take time)",
          img:
            "./assets/threadscap.png",
        },
        {
            id: "10",
            icon: "./assets/writing.png",
            title: "Threads API",
            desc:
              "API used in threads clone project, developed in nest.js and mongoDB (Free Host, firts load take time)",
            url: 'https://threads-back-vxwp.onrender.com/api',
            img:
              "./assets/threadsback.png",
        },
        {
          id: "2",
          icon: "./assets/globe.png",
          title: "Trello Clone",
          desc:
            "Trello clone developed in angular",
          url: 'https://trelloclone-angular.vercel.app/',
          img:
            "./assets/trellocap2.png",
        },
        {
          id: "13",
          icon: "./assets/globe.png",
          title: "Roy Manage Store API",
          desc:
            "API used in a project for manage a store supplies and bills, developed in express.js and MySQL. Deployed in container docker container with Digital Ocean",
          url: 'http://167.99.63.132:3000/api/doc/',
          img:
            "./assets/roystore.png",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Ecommerce",
          desc:
            "Ecommerce project using react.js",
          url: 'https://shop-commerce-1.netlify.app/',
          img:
            "./assets/reactcommercecap2.png",
        },
        {
            id: "7",
            icon: "./assets/writing.png",
            title: "Register Crud",
            desc:
              "Project in vue.js for frontend crud and express.js with postgress for the backend",
            url: 'https://lets-do-it-project.vercel.app/#/',
            img:
              "./assets/vuecrud.png",
        },
        {
            id: "11",
            icon: "./assets/writing.png",
            title: "TODO App",
            desc:
              "TODO project using angular",
            url: 'https://angular-lab-todoapp.vercel.app/todoapp',
            img:
              "./assets/todoangular.png",
        },
        {
            id: "4",
            icon: "./assets/writing.png",
            title: "TODO App",
            desc:
              "TODO project using react.js",
            url: 'https://todo-machine-blush.vercel.app/',
            img:
              "./assets/todoreact.png",
        },
        {
            id: "12",
            icon: "./assets/writing.png",
            title: "Commercebite",
            desc:
              "Ecommerce project using angular",
            url: 'https://angular-lab-todoapp.vercel.app/',
            img:
              "./assets/angularcommerce.png",
        },
        {
            id: "9",
            icon: "./assets/writing.png",
            title: "Metrics Charts",
            desc:
              "Project in next.js consuming products API showing metrics charts",
            url: 'https://nextjs-admin-ashy.vercel.app/',
            img:
              "./assets/nextjs.png",
        },
        {
            id: "8",
            icon: "./assets/writing.png",
            title: "Dessign Patterns Project",
            desc:
              "Simple project in react.js appling dessign patterns",
            url: 'https://react-typescript-practice-seven.vercel.app/',
            img:
              "./assets/typescriptpatterns.png",
        },
        {
            id: "5",
            icon: "./assets/writing.png",
            title: "Landing Page",
            desc:
              "Landing page project using angular and improving metrics and seo",
            url: 'https://angular-tecnical-fix.vercel.app/',
            img:
              "./assets/angularmetrics.png",
        },
        {
            id: "6",
            icon: "./assets/writing.png",
            title: "Pokedux",
            desc:
              "Project in react.js consuming pokemon API",
            url: 'https://pokedux-ashy.vercel.app/',
            img:
              "./assets/pokedux.png",
        }
      ];

    const handleClick = (way) => {
        way === 'left' 
            ? setSlide(currentSlider > 0 ? currentSlider-1 : data.length - 1)
            : setSlide(currentSlider < data.length -1 ? currentSlider + 1 : 0)
    }

    const handleLink = (url) => {
      window.open(url, "_blank");
      console.log(url)
    }

    return (
        <>
            <div className="works" id='works'>
                <div className="slider" style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
                    {data.map(item => (
                        <div className="container" key={item.id}>
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <Typography variant="h2">{item.title}</Typography>
                                        <Typography variant="body1">{item.desc}.</Typography>
                                        <Box display='flex' justifyContent='center'>
                                          <BootstrapButton size="small" variant="outlined" onClick={() => handleLink(item.url)}> View</BootstrapButton>
                                        </Box>
                                        {/* <Typography variant="body1"><a href={item.url} rel="noreferrer" target="_blank"></a></Typography> */}
                                    </div>
                                </div>
                                <div className="right" onClick={() => handleLink(item.url)}>
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick('left')}/>
                <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick('right')}/>
            </div>
        </>
    )
}