'use strict';
var React = require('react-native');
var { Navigator, View } = React;

var Router = React.createClass({
  getInitialState() {
    return {
      route: {
        name: null,
        index: 0
      }
    };
  },
  _handleBack(route,navigator) {
    if (this.state.route.index > 0) {
      if (route.configureScene) {
        this.setState({ sceneConfig: route.configureScene() });
      }
      navigator.pop();
    }
  },
  _handleForward(route, navigator) {
    route.index = this.state.route.index + 1;
    this.state.route.index = route.index;
    this.state.route.index = this.state.route.index + 1;
    if (route.configureScene) {
      this.setState({ sceneConfig: route.configureScene() });
    }
    navigator.push(route);
  },
  renderScene(route, navigator) {
    var Yield = route.component;
    var goBackwards = function() {
      this._handleBack(route, navigator);
    }.bind(this);
    var goForward = function(route) {
      this._handleForward(route, navigator);
    }.bind(this);
    var goToFirstRoute = function() {
      navigator.popToTop();
    };
    return (
      <View
        style={ { flex: 1 } }
        onResponderTerminationRequest={() => {
          return true;
        }}>
        <Yield
          name={ route.name }
          index={ route.index }
          goForward={ goForward }
          goBackwards={ goBackwards }
          goToFirstRoute={ goToFirstRoute }/>
      </View>
    );
  },
  render() {
    return (
      <Navigator
        initialRoute={ this.props.firstRoute }
        renderScene={ this.renderScene }
        configureScene={() => {
          var scene = this.state.sceneConfig;
          scene.gestures = null;
          return scene;
      }}/>
    );
  }
});

module.exports = Router;
