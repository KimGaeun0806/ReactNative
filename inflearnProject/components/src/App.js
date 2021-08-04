// 기존 App.js에 있는 코드 옮겨온 후 수정 

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; // Button 추가 
import MyButton from './MyButton'; // MyButton.js에서 만든 버튼 사용하기 

export default function App() {
  return ( 
    <View style={styles.container}>
      <Text>Cuttie Onew!</Text>  
      <StatusBar style="auto" />
      <Button title="Button" onPress={() => alert('Click!')} /> 
      <Button title="Handsome Zico" onPress = {() => alert('I agree')} /> 
      <MyButton/> 
    </View>
    // <Button>으로 버튼 추가 
    // <MyButton>으로 MyButton 사용 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});