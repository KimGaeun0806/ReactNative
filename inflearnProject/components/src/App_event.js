// change event 
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native'; // TextInput import
import MyButton from './MyButton_event';

export default function App() {
    return (
        <View style = {styles.container}>
            <TextInput
                onChange = {event => console.log(event.nativeEvent)} // Object { "eventCount": 1, "target": 383, "text": "a" } 가 넘어옴. 
                onChangeText = {text =>  console.log(text)} // textInput 컴포넌트에 이용되는 text만 필요하다면 onChange가 아니라 onChangeText를 이용할 수도 있음. onChangeText는 호출되는 함수의 파라미터로 사용자가 입력하는 텍스트를 전달해 줌.
                style = {{ borderWidth: 1, padding: 10, fontSize: 20}}
                />
        </View>
        // 오직 입력한 데이터만 필요하다면 onChange = {event => console.log(event.nativeEvent.text)}를 이용할 수 있음
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