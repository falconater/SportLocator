/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MapView = require('./MapView');

var {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  NavigatorIOS,
  AlertIOS,
  TouchableHighlight,
  Component
} = React;

var menuIcon = "data:image/png;base64,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";

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class Envisioners extends Component {

  render(){
    return(
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title : 'Envisioners',
          component : MapView
        }}/>
    );
  }

}

AppRegistry.registerComponent('Envisioners', () => Envisioners);
