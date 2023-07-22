import React, { useState, useEffect } from 'react';
import {Text, View, StatusBar, Image} from 'react-native'

const App = () => {
  return (
    <View style={{flex: 2}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#212121'}/>
      <View style={{flex: 1, backgroundColor:'#21212121'}}></View>
      <View style={{ backgroundColor:'#FAFAFAFA'}}></View>
      <View style={{flex: 1,justifyContent: 'center', alignContent: 'center',flexDirection: 'row',}}>
      <Image source={require('./src/Images/IMG-20220501-WA0203.jpg') } 
      style={{width: 120, height: 120, 
        borderRadius: 120 / 2,
        borderWidth: 3,
        borderColor: '#21212121',
        marginTop: 10
        
      }}
      />
    </View>
    <View style={{marginTop: 20, paddingVertical:80,}}>
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <Text style={{fontWeight: 'bold', 
        fontSize: 18, 
        textAlign: 'center', 
        flexDirection: 'row' }}>Robert Al Khuzairi </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'center'}}>
        <Text style={{ 
        fontSize: 18, 
        textAlign: 'center', 
        flexDirection: 'row' }}>IST2104066 </Text>
      </View>
    </View>
    
      
      
    </View>
    
  );
}

export default App;

