'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;



var styles = React.StyleSheet.create({
    text: {
        color:'black',
        backgroundColor:'yellow',
        marginTop:100
    }
});


var MoviesApp = React.createClass({
  render: function() {
    return (
      <React.NavigatorIOS
        initialRoute={{
          title: 'Movies1',
          component: SampleApp
        }}/>
    )
  }
});

var SampleApp = React.createClass({
  render: function() {
    return (
 
      <View style={styles.text}>
        <Text style={styles.text}>
          Welcome to React Native!
        </Text>
        <Text style={styles.text}>
          To get started, edit index.ios.js{'\n'}
          Press Cmd+R to reload
        </Text>
      </View>
    );
  }
});


React.AppRegistry.registerComponent('PropertyFinderApp', function() { return MoviesApp });