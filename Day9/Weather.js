import React, {Component} from 'react'; 
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
//13-1. import ion icons : expo.github.io/vector
//50 instead Ionicons, change it to MaterialCommunityIcons : coz of Error
//import {Ionicons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";

//42. Create weatherCases
//52. Change Icon name ios-rainy->weather-rainy
const weatherCases = {
    Rain :{
        colors:["#00C6FB", "#005BEA"], //Gradient color
        title:"Raining",
        subtitle : "For more info look outside",
        icon : 'weather-rainy'
    },
    Clear :{
        colors:["#00C6FB", "#005BEA"],
        title:"Sunny",
        subtitle :" Let's get tanned",
        icon : 'weather-sunny'
    },
    Thunderstorm:{
        colors:["#00C6FB", "#005BEA"],
        title:"Thunderstorm",
        subtitle:"OMG, It's raining hard with thunder",
        icon : 'weather-lightning'
    },
    Clouds:{
        colors:["#00C6FB", "#005BEA"],
        title:"Clouds",
        subtitle : "Typical Auckland...",
        icon : 'weather-cloudy'
    },
    Snow:{
        colors:["#00C6FB", "#005BEA"],
        title:"Snowy",
        subtitle : "Let's build a snow man",
        icon :'weather-snowy'
    },
    Drizzle:{
        colors:["#00C6FB", "#005BEA"],
        title:"Drizzle",
        subtitle : "Kinda foggy?!",
        icon : 'weather-hail'
    },
    Haze:{
        colors:["#00C6FB", "#005BEA"],
        title:"Haze",
        subtitle : "Kinda foggy?!",
        icon : 'weather-windy'
    },
    Mist:{
        colors:["#00C6FB", "#005BEA"],
        title:"Mist",
        subtitle : "Like you have no glasses",
        icon : 'weather-cloudy'
    }
}


//33. Refactoring :change the code structure
// Now we have a data in our state,
// make component as stateless component : not gonna hold state, not gonna make it from class instead get it from function
// Delete Weather.js #11 ~ #34
//export default class Weather extends Component {
//  render(){
//    return(
//    <LinearGradient colors={["#00C6FB", "#005BEA"]} style={style.container} >
//     {/*//9. Create Weather structure*/}
     
//     {/*//10. Upper - Icon , Temperature*/}
//     <View style={style.upper}> 
//     {/* 13-2: import Ionicons*/}
//      <Ionicons color="white" size={144} name="ios-rainy" /> 
//      //<Text>Icon here!</Text>
//      <Text style={style.temp}>Temperature here</Text>
//     </View>
//
//     {/*//11. Lower - Title , Subtitle */} 
//     <View style={style.lower}>
//      <Text style={style.title}>Raining like S**T</Text>
//      <Text style={style.subtitle}>For more info look outside</Text>
//     </View>
//      
//    </LinearGradient>
//    );
//  }
//}

// 34. Refactoring start
function Weather({temp, weatherName}){ //37. Add {temp} and replace 35 to {temp} //47. add weatherName
    //48. Check if weatherName is correctly loaded or not, using console.log
    console.log(weatherName);
    return( //43.Update icon, colors, title, subtitle : {weatherCases["Clear"].icon / .title / .subtitle }
        <LinearGradient /*colors={weatherCases["Clear"].colors}*/ colors={weatherCases[weatherName].colors} style={style.container} > //49-1. update "clear" to weatherName
            <View style={styles.upper}>
                //51. Change Ionicons to MaterialCommunityIcons
                </*Ionicons*/ MaterialCommunityIcons color="white" size={144} /*name={weatherCases["Clear"].icon} */  /*49-2*/ name={weatherCases[weatherName].icon} /> 
                <Text style={styles.temp}>{temp}</Text> 
                // 38. import {temp} instead of number
            </View>
            
            <View style={styles.lower}>
                <Text style={styles.title}> /* {weatherCases["Clear"].title} */ /*49-3*/ {weatherCases[weatherName].title}</Text> 
                <Text style={styles.subtitle}> /*{weatherCases["Clear"].subtitle}*/ /*49-4*/ {weatherCases[weatherName].subtitle} </Text>
            </View>
        </LinearGradient> 
    );
}
//44. Now instead of input single 'cloud', 'clear' ...etc, we need to get those information from Name
//44. go to App.js

export default Weather;
//34. Refactoring end

//35. There are 3 things we need to change
//1. Icon
//2. Temperature
//3. Title & Subtitle
//means we need 'props'

const style= StyleSheet.create({
  container:{
    flex:1
  },
  upper:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    //14. change backgroundColor to transparent => icon is able to see
    backgroundColor:"transparent"
  },
  temp:{
    fontSize:48,
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
