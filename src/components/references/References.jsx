import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import "./references.scss"
import { Typography } from '@mui/material';

const TimelineCard = ({ time, activity, place, details }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator sx={{flex:'none'}}>
        <TimelineConnector />
        <TimelineDot>
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5">{activity}</Typography>
        <Typography variant="h6">{place}</Typography>
        <Typography color="text.secondary">{details}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default function References() {
    
    // const data = [
    //     {
    //       id: 1,
    //       name: "Tom Durden",
    //       title: "Senior Developer",
    //       img:
    //         "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //       icon: "assets/twitter.png",
    //       desc:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    //     },
    //     {
    //       id: 2,
    //       name: "Alex Kalinski",
    //       title: "Co-Founder of DELKA",
    //       img:
    //         "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //       icon: "assets/youtube.png",
    //       desc:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    //       featured: true,
    //     },
    //     {
    //       id: 3,
    //       name: "Martin Harold",
    //       title: "CEO of ALBI",
    //       img:
    //         "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //       icon: "assets/linkedin.png",
    //       desc:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    //     },
    //   ];

    return (
        <div className="references" id='references'>
          <Typography variant='h4' >About</Typography>
          <Typography width='70%' variant="body1" textAlign='left'>
            I am a front-end web developer with 3+ years of experience creating user interfaces for over 10+ projects, used by
            more than 1,000 users across several companies. I specialize in HTML, CSS, JavaScript, TypeScript, and have
            expertise in React.js, jQuery, Angular, and Vue. Skilled in building responsive, accessible web applications, I also
            have experience with back-end technologies like Express.js and Laravel. My focus is on performance optimization,
            unit testing, microservices, version management, SPA, and debugging.
            </Typography>
          <div className="container">
            <Timeline position="alternate" color='black'sx={{color:'black', width: 'fit-content'}} >
              <TimelineCard
                time="November 2021 - present"
                activity="Frontend Developer"
                place="Emqu Technologies"
              />
              <TimelineCard
                time="April 2021 – November 2021"
                activity="Frontend Developer"
                place="Freelance"

              />
            </Timeline>
          </div>
        </div>
    )
}