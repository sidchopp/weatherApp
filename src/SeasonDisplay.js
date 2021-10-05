import React from 'react';
import { Card, Icon, Image, Header } from 'semantic-ui-react'

import summerPic from './images/summer.jpg'
import winterPic from './images/winter.jpg'

//CSS
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!!",
    iconName: 'sun'
  },
  winter: {
    text: "Burrr.. it's cold!!",
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // console.log(season);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <Card centered raised>
        {/* <i className={`icon-left large  ${iconName} icon`} /> */}
        {/* <i className={`icon-right large  ${iconName} icon`} /> */}

        {/* Conditional rendering of images acc to season */}
        {season === 'winter'
          ? <Image src={winterPic} wrapped ui={false} />
          : <Image src={summerPic} wrapped ui={false} />}
        {/*  */}

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
