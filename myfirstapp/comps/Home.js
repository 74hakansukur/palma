var React = require('react');
var PropTypes = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
  container: {
    backgroundImage: "url('myfirstapp/imgs/dark-textile-background.jpg')",
    justifyContent: 'center',
    alignItems: 'center',
    margin:'0 auto',
    width: '50%',
    textAlign:"center",
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Város neve</h1>
      <GetCityContainer />
    </div>
  )
}

module.exports = Home;
