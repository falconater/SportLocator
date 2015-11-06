'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  Image,
  View,
  Component
} = React;

class MapView extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>whatsup</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = MapView;