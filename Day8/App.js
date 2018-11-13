import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native'; //1. import ActivityIndicator : loading GIF, //12-1. import StatusBar
import Weather from "./Weather"; //6. import Weather.js


export default class App extends React.Component {

  /* 2. If is is loaded it's gonna show weather, If not it's gonna show loading view */
  state={
    isLoaded : false //8.to load 'Weather.js'
    //15. false
    //15. isLoaded : Ture = Displaying Weather.js (weather information)
    //15. isLoaded : false = Displaying loading page
    //Once it gets the weather information =>  it set it as True and disply the weather information
    ,
    error:null //20. add error:null in state
};
  
  //16. Get current position geolocation
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position =>{
        //17. once it gets the current location information, is Loaded : true = means, it will displaying Weather.js 
        this.setState({
          isLoaded: true
          
        }); 
        //console.log(position);
      },
      //18. If there is error, console log the 'error'
      
      error =>{
        //19. delete console.log(error), add 'error' in state
        //console.log(error);

        this.setState({
         //21. add Error
         //error:error
        //24.set error as "Something went wrong" to check errorText
          error:"Oops, something went wrong"
        })
        
      }
    );
  }

  /*
  16. Original version would be like....
  navigator.geolocation.getCurrentPosition(function(position){console.log(position)})
   */

  render() {

    const {isLoaded, error} = this.state; //22. add Error

    return (
      <View style={styles.container}>
      {/* 3. Is it loaded? 
      True => we don't have anything to show yet so 'null'
      False => show <view>
      */}
      {/* 7. import <Weather /> when it's loaded, to do that change state as 'true' as well*/}
        <StatusBar hidden={true} /> {/* 12-2. import status Bar*/}
        //36. Givg <Weather /> temperature information & //37.Change F to C
        {isLoaded ? <Weather temp={Math.floor(temperature - 273.15)} /> : (  
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting weather</Text>
            //23. If there is an error, i will display {error}, otherwise, null
            {error ? <Text style={styles.errorText}>{error}</Text> : null} 
          </View>  
        )}
      </View>  
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  //24. adding Error style
  errorText:{
    color:"red",
    backgroundColor:"transparent",
    marginBottom:40
  },
  //4. Creating 'loading' ,'loadingText'
  loading: {
    backgroundColor:'#FDF6AA',
    justifyContent :"flex-end",
    paddingLeft:25
  },
  loadingText:{
    fontSize:38,
    marginBottom: 24
  }
});
