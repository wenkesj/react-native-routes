var React = require('react-native');
var { Navigator, View } = React;

/**
Router is used to navigate the application, change views when needed.
*/
var _routes = {};
var routeHandler = {
    registerRoute: function(route) {
        if (_routes[route.name]) {
            return;
        }
        _routes[route.name] = route;
    },
    getRoute: function(routeName) {
        if (!_routes[routeName]) {
            return;
        }
        return _routes[routeName];
    }
};
var Router = React.createClass({
    getInitialState: function() {
        return {
            route: {
                name: null,
                index: 0
            }
        };
    },
    _handleBack: function(route,navigator) {
        if (this.state.route.index > 0) {
            if (route.configureScene) {
                navigator.props.configureScene = route.configureScene;
            }
            navigator.pop();
        }
    },
    _handleForward: function(route, navigator) {
        route.index = this.state.route.index + 1;
        this.state.route.index = route.index;
        if (route.configureScene) {
            navigator.props.configureScene = route.configureScene;
        }
        navigator.push(route);
    },
    renderScene: function(route, navigator) {
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
            <View style={{flex: 1, paddingTop: 20}} onResponderTerminationRequest={()=>{return true;}}>
                <Yield
                    name={route.name}
                    index={route.index}
                    data={route.data}
                    goForward={goForward}
                    goBackwards={goBackwards}
                    goToFirstRoute={goToFirstRoute}/>
            </View>
        )
    },
    render: function() {
        return (
            <Navigator
                initialRoute={this.props.firstRoute}
                renderScene={this.renderScene}
                configureScene={this.props.configureScene ? this.props.configureScene : () => {return Navigator.SceneConfigs.FloatFromBottom;}}/>
        )
    }
});
module.exports = {Router, routeHandler};