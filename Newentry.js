import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Switch, Image } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

export default class New extends Component {
    state = {
        Title: '',
        Date: '',
        This: '',
        Resulting: '',
        First: '',
        My: '',
        Dream : ''

    }
    handleTitle = (text) => {
        this.setState ({ Title:text })
    }
    handleDate = (text) => {
        this.setState ({ Date:text })
       
    }
    handleDate = (text) => {
        this.setState ({ This:text })
    }
    handleDate = (text) => {
        this.setState ({ Resulting:text })
    }
    handleDate = (text) => {
        this.setState ({ First:text })
    }
    handleDate = (text) => {
        this.setState ({ My:text })
    }
    handleDate = (text) => {
        this.setState ({ This:text })
    }
    
  
    render() {
        return (
            <View style= {styles.container}>
            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="Title"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
            onChangeText={this.handleTitle}/>
           
            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="Date"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
           
            onChangeText={this.handleDate}/>

            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="This was about"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
            onChangeText={this.handleThis}/>

            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="Resulting Feeling"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
            onChangeText={this.handleResulting}/>

            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="First Scene"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
            onChangeText={this.handleFirstScene}/>

<TouchableOpacity
                style = {styles.AddSceneButton}npm start
                
                onPress = { () =>
                 this.addscene(this.state.Title,this.state.Date,this.state.This,this.state.Resulting,this.state.First)
                }>
                <Text style = {styles.AddSceneButtonText}> Add Scene </Text>
                
                
              
                
 
             </TouchableOpacity>

            




            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="My Thoughts"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
            onChangeText={this.handleMyThoughts}/>

            
             <TouchableOpacity
                style = {styles.SaveButton}npm start
                
                onPress = { () =>
                 this.save(this.state.Title,this.state.Date,this.state.This,this.state.Resulting,this.state.First,this.state.My)
                }>
                <Text style = {styles.SaveButtonText}> Save </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style = {styles.DeleteButton}npm start
                
                onPress = { () =>
                 this.delete(this.state.Title,this.state.Date,this.state.This,this.state.Resulting,this.state.First,this.state.My)
                }>
                <Text style = {styles.DeleteButtonText}> Delete </Text>
              </TouchableOpacity>

            <TextInput style= {styles.input}
            underlineColorAndroid="transparent"
            placeholder="This dream is very private. Don't share any details"
            placeholderTextColor = "#DCDCDC"
            autoCapitalize = "none"
            onChangeText={this.handleThis}/>



            </View>
        )}
}


            
        const styles=StyleSheet.create({
            container: {
               paddingTop: 70
               
            },
            input: {
                margin: 5,
                height: 40,
                
                backgroundColor: '#ffffff',
                borderColor:'#DCDCDC',
                
                width: 280,
                paddingLeft: 20,
                borderBottomWidth: 1,
                paddingTop:20
                },
                AddSceneButton: {
                    backgroundColor: '#1E90FF',
                   width: 120,
                   
                    height: 40,
                    borderRadius: 2,
                    paddingRight: 90,
                    position: 'absolute',
                    marginTop: 315,
                   marginLeft: 120
                   
                                      
                    
   
                 },

                 SaveButton: {
                    backgroundColor: '#1E90FF',
                   width: 120,
                   
                    height: 40,
                    borderRadius: 2,
                    paddingRight: 90,
                    position: 'absolute',
                    marginTop: 330,
                   marginLeft: 120,
                   left: -40
                   
                                      
                    
   
                 },
          
                 
                 DeleteButton: {
                    backgroundColor: '#1E90FF',
                    width: 120,
                    
                     height: 40,
                     borderRadius: 2,
                     paddingRight: 80,
                     position: 'absolute',
                     marginTop: 330,
                    marginLeft: 120,
                    
                  right: -10
                   
                 },                 
                    
   
                
          
           
        })