import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'; //1. import ActivityIndicator : loading GIF
import Weather from "./Weather"; //6. import Weather.js


export default class App extends React.Component {

  /* 2. If is is loaded it's gonna show weather, If not it's gonna show loading view */
  state={
    isLoaded : true //7.to load 'Weather.js'

  }

  render() {

    const {isLoaded} = this.state;

    return (
      <View style={styles.container}>
      {/* 3. Is it loaded? 
      True => we don't have anything to show yet so 'null'
      False => show <view>
      */}
      {/* 7. import <Weather /> when it's loaded, to do that change state as 'true' as well*/}
        {isLoaded ? <Weather /> : (  
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting weather</Text>
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
  //4. Creating 'loading' ,'loadingText'
  loading: {
    backgroundColor:'#FDF6AA',
    justifyContent :"flex-end",
    paddingLeft:25
  },
  loadingText:{
    fontSize:38,
    marginBottom: 100
  }
});
