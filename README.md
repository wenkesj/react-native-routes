#react-native-routes

The simplest react native router yet.

#Install
`npm install react-native-routes --save`

This comes with a __routeHandler__ to help you register routes and optimize your application.

#Require
```javascript
var Router = require('react-native-routes').Router;
var routeHandler = require('react-native-routes').routeHandler;
```

#Example
```js
/* Bring in a component of some kind. */
var Home = require('./components/home');
var HomeRoute = {
    /* A unique name and a component to go with it. */
    name: 'Home',
    component: Home,
    /**
     * Add an optional scene object, see below!
     */
    configureScene: function() {
        var transition = Navigator.SceneConfigs.FloatFromRight;
        /* Prevent any swipe gestures? Sure! */
        transition.gestures = null;
        return transition;
    }
};

/**
 * Register the route with the route handler so you can
 * access routes from anywhere on your application
 */
routeHandler.registerRoute(HomeRoute);

var Application = React.createClass({
    render() {
        return (
            <Router firstRoute={HomeRoute}/>
        );
    }
});
```
#API
`this.props.goForward([Object])`
Takes a route object that must have a `name` and a `component` property.
```js
var route = {
    name: 'name-of-your-route',
    component: AReactComponent
}
```
You can then call
```js
this.props.goForward(route);
```
or register the route (basically like lazy loading!)
```js
routeHandler.registerRoute(route);
```
and accesses it where ever
```js
this.props.goForward(routeHandler.getRoute('name-of-your-route'));
```
#`this.props.goBackwards()`
This is very straight forward, tell your application to go back to it's previously rendered route. I mean, straight backward.

#`[function] configureScene`
You can attach a configureScene function to your route to replace animations and customize them. Do something like this
```js
var route = {
    name: 'name-of-your-route',
    component: AReactComponent,
    configureScene: function() {
        return Navigator.SceneConfigs.FloatFromRight;
    }
}
```
Now, there is little-to-none documentation of this, but check out below on the different options you can choose for transitions and things you can do with them for customization.

#Navigator.SceneConfigs
`PushFromRight`
`FloatFromRight`
`FloatFromLeft`
`FloatFromBottom`
`FloatFromBottomAndroid`
`FadeAndroid`
`HorizontalSwipeJump`

#In the works...
+ Adding a `routeHandler.go()` to enable flexible routing.

#Author
@wenkesj feel free to contact me. Fork it!
