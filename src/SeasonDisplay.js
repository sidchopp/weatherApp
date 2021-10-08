import React from 'react';
import { Card, Icon, Image, Header } from 'semantic-ui-react'

import summerPic from './images/summer.jpg';
import winterPic from './images/winter.jpg';
import fallPic from './images/fall.jpg';
import springPic from './images/spring.jpg';

//CSS
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach & live in the sunshine.",
    iconName: 'sun',
    img: `${summerPic}`
  },
  winter: {
    text: "No winter lasts forever & no spring skips its turn.",
    iconName: 'snowflake',
    img: `${winterPic}`
  },
  fall: {
    text: " Life starts all over again when it gets crisp in the fall.",
    iconName: 'leaf',
    img: `${fallPic}`
  },
  spring: {
    text: "A lovely reminder of how beautiful 'Change' can truly be.",
    iconName: 'heartbeat ',
    img: `${springPic}`
  },
};

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 5) {
    return lat > 0 ? 'spring' : 'fall';
  } else if (month >= 6 && month <= 8) {
    return lat > 0 ? 'summer' : 'winter';
  } else if (month >= 9 && month <= 11) {
    return lat > 0 ? 'fall' : 'spring';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // console.log(season);
  const { text, iconName, img } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <Card centered raised>
        {/* <i className={`icon-left large  ${iconName} icon`} /> */}
        {/* <i className={`icon-right large  ${iconName} icon`} /> */}

        {/* Conditional rendering of images acc to season */}
        {/* {season === 'winter'
          ? <Image src={winterPic} wrapped ui={false} />
          : <Image src={summerPic} wrapped ui={false} />} */}
        {/*  */}

        <Image src={img} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <span className='season-name'><Icon name={iconName} />{season} </span>
          </Card.Header>
          <Card.Meta>
            {text}
          </Card.Meta>
          <Card.Description>
            <div>Latitude <Icon name="caret right"></Icon> {props.lat}</div>
            <div>Longitude<Icon name="caret right"></Icon> {props.long}</div>
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign='center' extra>
          <div>
            <Header as='h1'  >
              <a style={{ color: 'black' }} href='https://sid-projects.netlify.app/' target='_blank' rel="noreferrer" >
                <span className="footer-name">Sid{" "}</span>
              </a>
            </Header>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SeasonDisplay;
