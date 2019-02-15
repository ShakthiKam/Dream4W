import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

<ToggleSwitch
    isOn={false}
    onColor='green'
    offColor='red'
    label='Example label'
    labelStyle={{color: 'black', fontWeight: '900'}}
    size='large'
    onToggle={ (isOn) => console.log('changed to : ', isOn) }
/>;