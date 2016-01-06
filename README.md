# react-native-routes #

The simplest react native router yet.

`npm install react-native-routes --save`

### Requiring ###
```javascript
let Router = require('react-native-routes');
```

### API ###

```js
class Application extends Component {
    render() {
        return (
            <Router
              firstRoute={ SomeRoute }
            />
        );
    }
}
```

#### `this.props.goForward(Route Object)` ####

Call directly on a **Route Object**.

```js
let SomeComponent = require('./some-component');
var SomeRoute = {
  name: 'SomeComponent',
  component: SomeComponent,
  configureScene() {
    return Navigator.SceneConfigs.FloatFromRight;
  }
};
// ... Inside your Application somewhere ...
  this.props.goForward(SomeRoute);
// ...
```

Call on a registered **Route Object**, used for lazy loading opportunities. See the **example** folder.

```js
let { SomeRoute } = require('./handler');

// ... Inside your Application somewhere ...
  this.props.goForward(SomeRoute());
// ...
```

#### `this.props.goBackwards()` ####
Pop the next from the route stack and render.

### Route Objects ###

| Property | Type | Description |
| -------- | ---- | ----------- |
| name (\*) | String | Name of the route, i.e. 'SomeComponent'. |
| component (\*) | Component | **Component** to be rendered when the Router renders the new route. |
| configureScene | Function | Return the scene configuration for the route. |

(\*) **Required** property

You can attach a **configureScene** function to your route to replace animations and customize them. Do something like this:

```js
{
    name: 'SomeComponent',
    component: SomeComponent,
    configureScene: function() {
        return Navigator.SceneConfigs.FloatFromRight;
    }
}
```

Now, there is little-to-none documentation of this, but check out below on the different options you can choose for transitions and things you can do with them for customization. See the docs for **transitions.md**

### Navigator.SceneConfigs ###
+ **PushFromRight**
+ **FloatFromRight**
+ **FloatFromLeft**
+ **FloatFromBottom**
+ **FloatFromBottomAndroid**
+ **FadeAndroid**
+ **HorizontalSwipeJump**
