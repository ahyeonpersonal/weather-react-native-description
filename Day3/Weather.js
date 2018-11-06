// 5. Create Weather.js
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";

export default class Weather extends Component {
  render(){
    return(
    <LinearGradient colors={["#00C6FB", "#005BEA"]} style={style.container} >
     {/*//9. Create Weather structure*/}
     
     {/*//10. Upper - Icon , Temperature*/}
     <View style={style.upper}> 
      <Text>Icon here!</Text>
      <Text style={style.temp}>Temperature here</Text>
     </View>

     {/*//11. Lower - Title , Subtitle */} 
     <View style={style.lower}>
      <Text style={style.title}>Raining like S**T</Text>
      <Text style={style.subtitle}>For more info look outside</Text>
     </View>
      
    </LinearGradient>
    );
  }
}

const style= StyleSheet.create({
  container:{
    flex:1
  },
  upper:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  temp:{
    fontSize:38,
    backgroundColor:"transparent",
    color:'white',
    marginTop:"10"
  },
  lower:{
    flex:1,
    alignItems:"flex-start",
    justifyContent:"flex-end",
    paddingLeft:25
  },
  title:{
    fontSize:38,
    backgroundColor:"transparent",
    color:'white',
    marginBottom :10,
    fontWeight:"300"
  },
  subtitle:{
    fontSize:24,
    backgroundColor:"transparent",
    color:'white',
    marginBottom:24
  }
})
