var React = require('react');
var utils = require('../helpers/utils');
var DayItem = require('./DayItem');
var convertTemp = utils.convertTemp;

var styles = {
  descriptionContainer: {
    fontSize: 18,
    fontWeight: 100,
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'center',
  }
}

function Detail (props) {
  return (
    <div style={styles.container}>
      <DayItem day={props.weather} />
      <div style={styles.descriptionContainer}>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>minimum hőmérséklet: {convertTemp(props.weather.temp.min)} Celsius fok</p>
        <p>maximum hőmérséklet: {convertTemp(props.weather.temp.max)} Celsius fok</p>
        <p>relatív páratartalom: {props.weather.humidity} %</p>
      </div>
    </div>
  )
}

module.exports = Detail;
