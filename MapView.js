'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  Image,
  View,
  Component,
  TextInput,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white',
    marginTop : 65
  },
  searchBar : {
    height: 40,
    paddingLeft : 10,
    borderColor: 'gray', 
    borderWidth: 7
  },
});

class MapView extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
            style={styles.searchBar}
            placeholder='Search City...'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
      </View>
    );
  }

}

module.exports = MapView;