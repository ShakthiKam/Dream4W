import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Switch, Image } from 'react-native';
export default class Inputs extends Component {
    state = {
        Email: '',
        Password: ''
    }
    handleEmail = (text) => {
        this.setState ({ email:text })
    }
    handlePassword = (text) => {
        this.setState ({ password:text })
    }
  //    login=(email,pass) => {
  //        alert('email:' + email + 'password:'+ pass)
  //    }
    render() {
        return (
            
            <View style= {styles.container}>
            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email Address"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
            onChangeText={this.handleEmail}/>
           
            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
            onChangeText={this.handlePassword}/>
     
<Switch style= {styles.switch1}></Switch>
  <Text style = {styles.switchText1}> Remember me </Text>
  <Switch style= {styles.switch2}></Switch>
  <Text style = {styles.switchText2}> Touch ID </Text>

  
        {/* //  onValueChange = {props.toggleSwitch1}
        //  value = {props.switch1Value}/> */}

        
     
  
            <TouchableOpacity
                style = {styles.loginButton}npm start
                
                onPress = { () =>
                 this.login(this.state.email,this.state.password)
                }>
                <Text style = {styles.loginButtonText}> Login </Text>
                
                
                <Text style={styles.ortext}> ──── or  ───</Text>
                
 
             </TouchableOpacity>
             <TouchableOpacity
                style = {styles.registerButton}
                onPress = { () =>
                 this.login(this.state.email,this.state.password)
                }>
                <Text style = {styles.registerButtonText}> Register </Text>
                
             </TouchableOpacity>
             <Image style={{width: 90, height: 40, position:'absolute',marginTop: 500,margin: 50}} source = {require('./assets/images/Google.png')} />
           
             <Image style={{width: 103, height: 10, position:'absolute',marginTop: 500,margin: 150}} source = {require('./assets/images/Facebook.png')} />
             <Text style={{color:'#0000FF', position:'absolute',marginTop: 564,margin: 110,backgroundColor: '#F8F8F8'}}>Forgot password?</Text>
             
             
          </View>
       )
    }
  }
  
  
  
  
         const styles=StyleSheet.create({
             container: {
                paddingTop: 100
                
             },
             input: {
                 margin: 15,
                 height: 40,
                 borderWidth: 20,
                 backgroundColor: '#ffffff',
                 borderColor:'#DCDCDC',
                 borderWidth: 2,
                 borderRadius: 10,
                 width: 280,
                 paddingLeft: 20,
                 
                 
                 
                 },

             loginButton: {
                //  backgroundColor: '#1E90FF',
                backgroundColor: '#1E90FF',
                width: 180,
                 
                 height: 40,
                 borderRadius: 7,
                 paddingRight: 120,
                 position: 'absolute',
                 marginTop: 310,
                marginLeft: 90,
                
                
                 

              },
              loginButtonText:{
                 color: 'white',
                //  paddingTop: 5,
                
              
                marginTop: 10,
                marginLeft: 20,
               paddingLeft: '-40%'
              },
              
           
  
             registerButton: {
                 backgroundColor: '#45DA19',
                 padding: 10,
                 
                 height: 40,
                 borderRadius: 5,
                 paddingRight: 120,
                 marginLeft: 90,
                 textAlign: 'center',
                 position: 'absolute',
                 marginTop: 430
                 
              },
              registerButtonText:{
                 color: 'white',
                 alignItems: 'center'
              },
           switchText1: {
               
               backgroundColor: '#F8F8F8',
               margin: 130,
               marginTop: 10,
               left: -42
               
           },
           switchText2: {
               
            backgroundColor: '#F8F8F8',
            margin: 148,
            marginTop: -148,
            right: -108
            
        },
           switch1: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            left: 43,
            position: 'absolute',
            paddingBottom: 498
            
           },
           switch2: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            left: 215,
            top: -1,
            position: 'absolute',
            paddingBottom: 498
           },

           ortext: {
            position: 'absolute',
            paddingBottom: 0,
           
               
           },
         })
  