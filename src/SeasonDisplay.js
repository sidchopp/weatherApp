import './SeasonDisplay.css';
import React from 'react';

// here snowflake and sun are the name of the icons we need from seantic-ui.com
const seasonConfig = {
  summer : {
    text : "Let's hit the beach!",
    iconName : 'sun'
  },
  winter : {
    text : "Burr it's cold!",
    iconName : 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  } else{
    return lat > 0 ? 'winter' : 'summer';
  }

};

const SeasonDisplay = props => {
  // to call getSeason function mentioned above
  const season = getSeason(props.lat, new Date().getMonth());
  const {text,iconName} = seasonConfig[season]; // destructre
  
  return (
    <div className = {`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} /> 
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
    ); // icon here is just a class from seantic-ui.com
};

export default SeasonDisplay;
