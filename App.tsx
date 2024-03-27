import { View, Text, Button } from 'react-native';
import React from 'react';
import Share from 'react-native-share';

export default function App() {
  
  return (
    <View>
      <Text 
        style={{ 
          fontSize: 30, 
          marginVertical:40, 
          color: 'blue', 
          textAlign: 'center'
          }}>
        React Native Share
      </Text>
      <View style={{marginHorizontal: 40}}>
        <Button title='Share' onPress={share}></Button>
      </View>
    </View>
  )
}