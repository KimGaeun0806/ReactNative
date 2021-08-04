// JSX 문법 //
// 1. 반드시 하나의 부모로 감싸진 상태로 반환되어야 함
    export default function App(){
        return (
            <View style={StyleSheet.container}>
                <Text>Hello!</Text>
                <StatusBar style="auto"/>
            </View>
        ); 
    } // 이 경우는 <View></View>로 감싸짐 (View는 div와 비슷한 역할)

    // View처럼 역할을 하는 부모로 감싸지 않고 2개 이상을 반환하고 싶을 때 -> <Fragment></Fragment>
    import React, {Fragment} from "react";
    import {StatusBar, StyleSheet, Text, View} from 'react-native';
    export default function App(){
        return (
            <Fragment>
                <Text>Hello!</Text>
                <StatusBar style="auto"/>
            </Fragment>
        );
    }

// 2. 자바스크립트 변수를 이용할 수 있음
    // 자바스크립트 변수를 사용할 때는 중괄호로 감싸서 사용 
    export default function App(){
        const name = 'Zico';
        return (
            <View style={StyleSheet.container}>
                <Text>Hello, {name}</Text>
                <StatusBar style="auto"/>
            </View>
        );
    }

// 3. 조건문을 통해 상황에 따라 다른 요소를 랜더링할 수 있음
    // if문을 사용한다면 즉시실행함수 형태로 작성해야 함 -> 로직이 복잡한 경우에는 JSX 밖에서 조건문을 처리하고 JSX 코드는 간단하게 작성하는 것이 좋음
    export default function App(){
        const name = 'Onew';
        return (
            <View style={styles.container}>
                <Text>
                    {(()=> {
                        if (name === 'Zico') return 'Hi, Zico!';
                        else if (name === 'Onew') return 'Hi, Onew~';
                        else return 'Hi, Osaka';
                    })()}
                </Text>
                <StatusBar style="auto"/>
            </View>
        );
    }

// 4. 삼항연산자를 이용해서 특정 조건에 따라 다른 값을 랜더링할 수 있음
    export default function App(){
        const name = 'Onew';
        return (
            <View style={styles.container}>
                <Text>Hi, {name === 'Onew' ? 'Zico' : 'TeenTop'}</Text>
                <StatusBar style="auto"/>
            </View>
        );
    }

// 5. AND 연산자나 OR 연산자 이용 가능 
    // AND 연산자 사용 -> 앞 조건이 참인 경우에 뒤 내용이 랜더링됨 
    // OR 연산자 사용 -> 앞 조건이 참이 아닌 경우에 뒤 내용이 랜더링됨 
    export default function App(){
        const name = 'Zico';
        return (
            <View style={styles.container}>
                {name === 'Zico' && <Text style={styles.text}>Hi, Zico</Text>}
                {name !== 'Zico' && <Text style={styles.text}>Hi, Onew</Text>}
                <StatusBar style="auto"/>
            </View>
        );
    }

// 6. null과 undefined
    // JSX에서 null은 아무것도 랜더링하지 않고 문제도 발생하지 않음
    // undefined는 에러 발생 

// JSX 스타일링 //
    export default function App(){
        return (
            <View style={styles.container}>
                <Text
                style={{
                    color: 'black',
                    margin: 10,
                    fontSize: '20px',
                    fontWeight: '600',
                }}
                >
                    Hi, Zico
                </Text>
                <StatusBar style="auto" />
            </View>
        );
    }

// Expo Project 생성하는 법 //
    // npm install --global expo-cli // CLI 설치
    // expo init { 프로젝트 이름 }
    // npm start / expo start

// 함수 컴포넌트 //
    // Class Components
    import React, { Component } from "react";
    import { Text } from 'react-native';
    class MyButton extends Component {
        render(){
            return <Text>Click</Text>;
        }
    }
    export default MyButton;

    // Function Components
    import React from 'react';
    import { Text } from 'react-native';
    const MyButton = () => {
        return <Text>Click</Text>;
    };
    export default MyButton;

// 컴포넌트의 props와 state //
    // props -> 외부 (부모)에서 전달, 수정 불가능
    // state -> 내부에서 생성, 수정 가능

    // state 
        // useState라는 hook를 이용해야 함
        // const[변수, 함수] = useState(초기값)
        // state 변수는 항상 useState에서 반환하는 setter 함수를 이용해서 수정해야 함.
        // 예를 들면 const[count, setCound] = useState(0) 에서 count라는 state 변수가 초기값 0인 상태로 생성되고, 이 count state 변수를 수정하기 위해서는 반드시
        // 함께 반환된 setCount 함수를 이용해서 수정해야 함 -> setCount(++count)

        // Function Component
        import React, { useState } from 'react';
        import { Button } from 'react-native';
        const Counter = () => {
            const [count, setCount] = useState(0);
            return <Button title="count" onPress={() => setCount(count + 1)} />;
        };

        // Class Component
        import React, { Component } from 'react';
        import { Button } from 'react-native';

        class Counter extends Component {
            counstructor(props) {
                super(props);
                this.state = {
                    count: 0,
                };
            }
            render() {
                return (
                    <Button
                    title="count"
                    onPress={() => this.setState({count: this.state.count + 1})}
                    />
                );
            }
        }

        // 여러 개의 state가 필요한 경우 -> useState 여러 번 사용 가능
        const UserInfo = () => {
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
        }

// 이벤트 //
    // Press
        // 기본적으로 사용자가 처음 터치를 했을 때 onPressIn이 호출되고, 손을 떼면 onPressOut이 호출됨
        // 터치를 일정시간 이상 하고 있으면 onLongPress가 호출되고, 손을 떼면 onPressOut이 호출됨 
    // Change -> 사용자가 입력하는 내용의 변화를 감지하고 그에 맞춰 화면에 변화를 주거나 값의 유효성을 체크하는 등으로 이용 


    


















            


