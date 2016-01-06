let { Component, View, Text } = require('react-native');

class SomeComponent extends Component {
  render() {
    return (
      <View>
        <Text>{ `Hello from the ${this.props.name} route.` }</Text>
      </View>
    );
  }
}

module.exports = SomeComponent;
