import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default class Welcome extends React.Component {
    render() {
        return (
           <View>
               <Text style = {styles.welcometxt}> Welcome! </Text>
              
               <Image style={{width: 260, height: 200, position:'absolute',marginTop: 160,margin: 44}}  source = {require('./assets/images/placeholder.png')} />
             <Text style ={{ position:'absolute',marginTop: 380,margin: 44}}>I found your JOURNAL on Eyes2c.org</Text>
              <Text style ={{ position:'absolute',marginTop: 400,margin: 44}}>  Would you like to transfer to mobile?</Text>  


              <TouchableOpacity
                style = {styles.yesButton}npm start
                
                onPress = { () =>
                 this.yes(this.state.yes)
                }>
                <Text style = {styles.yesButtonText}> YES! </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.noButton}npm start
                
                onPress = { () =>
                 this.no(this.state.no)
                }>
                <Text style = {styles.noButtonText}> No, start from scratch </Text>
                </TouchableOpacity>
             
          </View>





           
        );
     }
  }
  const styles = StyleSheet.create({
    welcometxt: {
       flex: 1,
       
       fontSize: 26,
       position:'absolute',
       marginTop: 50,
       margin: 120,
       alignItems: 'center', 
       justifyContent: 'center',
       color:'#1E90FF'
    },
    yesButton: {
        backgroundColor: '#45DA19',
       width: 180,
        
        height: 40,
        borderRadius: 5,
        paddingRight: 120,
        position: 'absolute',
        marginTop: 440,
       marginLeft: 85
    },
    yesButtonText:{
        color: 'white',
       //  paddingTop: 5,
       
     
       marginTop: 10,
       marginLeft: 20,
      paddingLeft: '-40%'
     },

     noButton: {
        backgroundColor: '#a4a4a4',
       width: 180,
        
        height: 40,
        borderRadius: 5,
        paddingRight: 120,
        position: 'absolute',
        marginTop: 500,
       marginLeft: 85
    },
    noButtonText:{
        color: 'white',
       //  paddingTop: 5,
       fontSize: 8,
       
     
       marginTop: 10,
       marginLeft: 20,
      paddingLeft: '-40%'
     },
 });
 
 
  
  
