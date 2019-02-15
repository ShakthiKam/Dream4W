import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
// import test from "./sample.mp4";

export default class Home extends React.Component {
    render() {
        return (
           <View>
               <Text style = {styles.hometxt}> Why are we doing this? </Text>
              
              
             <Text style ={{ position:'absolute',marginTop: 130,margin: 30}}>This page lists more detailed information about the hex color code #a4a4a4. In a RGB color space, hex #a4a4a4 is composed of 164(64.31%) red, 164(64.31%) green and 164(64.31%) blue. Its decimal value is 10790052. In a CMYK color space, it is consist of 0% cyan, 0% magenta, 0% yellow and 35.69% black. It has a hue angle of 0.</Text>
              
            <Text style = {{ position:'absolute',marginTop: 300,margin: 50,color:'#1E90FF',fontSize: 22}}> From the Founder </Text>
            {/* <Video source = {require('./assets/videos/sample.mp4')} />  */}

            {/* <Video Source = {{uri:'https://vimeo.com/user64795139/review/312340090/802e518dd4'}} />   */}
       
              <TouchableOpacity
                style = {styles.startButton}npm start
                
                onPress = { () =>
                 this.yes(this.state.start)
                }>
                <Text style = {styles.startButtonText}> Start your Journal! </Text>
                </TouchableOpacity>
                
          </View>





           
        );
     }
  }
  const styles = StyleSheet.create({
    hometxt: {
       flex: 1,
       
       fontSize: 22,
       position:'absolute',
       marginTop: 70,
       margin: 30,
       alignItems: 'center', 
       justifyContent: 'center',
       color:'#1E90FF'
    },
    startButton: {
        backgroundColor: '#45DA19',
       width: 180,
        
        height: 40,
        borderRadius: 5,
        paddingRight: 120,
        position: 'absolute',
        marginTop: 440,
       marginLeft: 85
    },
    startButtonText:{
        color: 'white',
       //  paddingTop: 5,
       
     
       marginTop: 10,
       marginLeft: 20,
       fontSize: 10
      
     },

     
 });
 
 
  
  
