import React from "react";
import { Card, Icon, Image, Header, Container } from "semantic-ui-react";

import summerPic from "./images/summer.jpg";
import winterPic from "./images/winter.jpg";
import fallPic from "./images/fall.jpg";
import springPic from "./images/spring.jpg";

//CSS
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach & live in the sunshine.",
    iconName: "sun",
    img: `${summerPic}`,
  },
  winter: {
    text: "No winter lasts forever & no spring skips its turn.",
    iconName: "snowflake",
    img: `${winterPic}`,
  },
  fall: {
    text: " Life starts all over again when it gets crisp in the fall.",
    iconName: "leaf",
    img: `${fallPic}`,
  },
  spring: {
    text: "A lovely reminder of how beautiful 'Change' can truly be.",
    iconName: "heartbeat",
    img: `${springPic}`,
  },
};

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 5) {
    return lat > 0 ? "spring" : "fall";
  } else if (month >= 6 && month <= 8) {
    return lat > 0 ? "summer" : "winter";
  } else if (month >= 9 && month <= 11) {
    return lat > 0 ? "fall" : "spring";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth() + 1);
  const { text, iconName, img } = seasonConfig[season];

  return (
    <div>
      <Container
        className={`season-display ${season} container-main`}
        text
        textAlign="center"
      >
        <Card centered raised>
          <div className="header">
            <Header textAlign="center" as="h2">
              SEASONS
            </Header>
            <Header textAlign="center" as="h4">
              This App will show a season based on User's location.
            </Header>
          </div>
          <Image src={img} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <div>
                Enjoy the
                <span className="season-name">
                  {" "}
                  {season} <Icon name={iconName} />
                </span>
              </div>
            </Card.Header>
            <Card.Meta>{text}</Card.Meta>
            <Card.Description>
              <div>
                Latitude <Icon name="caret right"></Icon> {props.lat}
              </div>
              <div>
                Longitude<Icon name="caret right"></Icon> {props.long}
              </div>
            </Card.Description>
          </Card.Content>
          <Card.Content textAlign="center" extra>
            <div>
              <a
                href="https://sid-chopra.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Header as="h1">
                  <span className="footer-name">Sid </span>
                </Header>
              </a>
              {" © "}
              {"Seasons."} <i>2021-{new Date().getFullYear()}</i>
            </div>
          </Card.Content>
        </Card>
      </Container>
    </div>
  );
};

export default SeasonDisplay;
