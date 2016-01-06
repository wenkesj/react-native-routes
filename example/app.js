let { Component } = require('react-native');
let Router = require('react-native-routes');
let { SomeRoute } = require('./handler');

class Application extends Component {
  render() {
    return (
      <Router
        firstRoute={ SomeRoute() }
        />
    );
  }
}

module.exports = Application;
