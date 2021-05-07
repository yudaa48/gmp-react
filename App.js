/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
 import MapView from 'react-native-maps';

export default class App extends Component{
  render(){
    return(
      <view>
        <MapView
        style={StyleSheet.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        />
      </view>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  map: {
    flex: 1
  }
});