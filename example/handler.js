'use strict';
let { Navigator } = require('react-native');

module.exports = {
  SomeRoute() {
    let SomeComponent = require('./some-component');
    return {
      name: 'Component',
      component: SomeComponent,
      configureScene() {
        return Navigator.SceneConfigs.FloatFromRight;
      }
    };
  }
};
