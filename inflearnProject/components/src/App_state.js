// state -> 터치하면 2씩 더해가는 버튼과 2씩 곱해지는 버튼 만들기 
import React, { useState } from 'react'; // useState를 import하기 
import { StyleSheet, View, Text } from 'react-native';
import MyButton from './MyButton_state';

export default function App() { // App 컴포넌트에는 addition이라는 state변수와 multiple이라는 state변수가 있음. 
    const [addition, setAddition] = useState(0); // useState를 이용해 2씩 더해지는 값을 저장할 변수 만들기 
    const [multiple, setMultiple] = useState(1); // 2씩 곱해지는 값을 저장할 변수 만들기 

    return (
        <View style = {styles.container}>
            <Text style = {{ fontSize: 20 }}>{addition}</Text> 
            <Text style = {{ fontSize: 20 }}>{multiple}</Text>
            <MyButton title = "addition" onPress = {() => setAddition(addition + 2)}/>
            <MuButton title = "multiple" onPress = {() => setMultiple(multiple * 2)}/>
        </View>
        // <Text>{addition}</Text>으로 addition 출력, <Text>{multiple}</Text>으로 multiple 출력 
        // <MyButton title = "addition" onPress = {() => setAddition(addition + 2)}/> 버튼을 누르면 2씩 값이 더해짐
        // <MuButton title = "multiple" onPress = {() => setMultiple(multiple * 2)}/> 버튼을 누르면 2씩 값이 곱해짐 
        // addition 버튼을 클릭해서 addition 변수에 2가 더해지면 addition이라는 state가 변경됨. state가 변경되면 컴포넌트가 리랜더링됨. 
        // App 컴포넌트가 리랜더링되는 것이고, 다시 랜더링되면서 변경된 state가 화면에 반영되는 것
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
