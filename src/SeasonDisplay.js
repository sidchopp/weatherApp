import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

//CSS
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr it is cold!',
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
  console.log(season);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <Card centered raised>
        {/* <i className={`icon-left large  ${iconName} icon`} /> */}
        <i className={`icon-right large  ${iconName} icon`} />

        {/* Conditional rendering of images acc to season */}
        {season === 'winter' ? <Image src='https://images.unsplash.com/photo-1529973625058-a665431328fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' wrapped ui={false} /> : <Image src='https://images.unsplash.com/photo-1614717668397-5252f17ee5b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
          wrapped ui={false} />}
        {/*  */}

        <Card.Content>
          <Card.Header>
            <span className='season-name'>{season} </span>
          </Card.Header>
          <Card.Meta>
            {text}
          </Card.Meta>
          <Card.Description>
            <div>Latitude: {props.lat}</div>
            <div>Longitude: {props.long}</div>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button primary size='small' as='a' href='https://sid-projects.netlify.app/' target='_blank' rel="noreferrer" >
            About Me
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SeasonDisplay;
