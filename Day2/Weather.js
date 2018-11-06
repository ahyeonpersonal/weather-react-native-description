// 5. Create Weather.js
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";

export default class Weather extends Component {
  render(){
    return(
    <LinearGradient colors={["#00C6FB", "#005BEA"]} style={style.container} >
    
    </LinearGradient>
    );
  }
}

const style= StyleSheet.create({
  container:{
    flex:1
  }
})
