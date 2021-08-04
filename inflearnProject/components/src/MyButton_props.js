// props
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types'; // PropTypes 가져오기 

const MyButton = props => { 
    console.log(props); // Object { "title": "MyButton title" }이라는 객체 형태로 전달됨. 이렇게 전달된 데이터를 props라고 함. 
                        // Object { "onPress": [Function onPress], "title": "MyButton 1"}과 Object { "onPress": [Function onPress], "title": "MyButton 2"}가 전달됨.
    return ( 
        <TouchableOpacity onPress = {props.onPress}> 
            <View style = {{backgroundColor: '#C75DE4', padding: 10, margin: 10}}> 
                <Text style = {{fontSize: 20, color: 'white'}}>{props.title}</Text> 
                <Text style = {{fontSize: 20, color: 'white'}}>{props.children || props.title}</Text> 
            </View> 
        </TouchableOpacity>
        // onPress에는 전달되는 props의 onPress를 설정, 출력하는 텍스트는 props에 있는 title로 지정
        // MyButton 1과 MyButton 2가 생성됨. MyButton 1을 누르면 1이, MyButton 2를 누르면 2가 뜸 
        // 이렇게 부모 컴포넌트에서 데이터를 전달하고 자식 컴포넌트는 전달받은 데이터를 이용해서 랜더링. 이렇게 컴포넌트 재사용 가능.
        // props는 childeren이라는 key가 항상 들어가 있음. 
        // props.children || props.title -> children이 있으면 childeren을 출력하고, childeren이 없으면 title을 출력 -> Button의 text가 children으로 출력 
    );
};


// props에 기본값을 설정할 수 있음. 
const MyButton = ({title = "title", onPress = () => {}, children, title2}) => { // 함수의 파라미터에 기본값 설정 
    return ( 
        <TouchableOpacity onPress = {onPress}> 
            <View style = {{backgroundColor: '#C75DE4', padding: 10, margin: 10}}> 
                <Text style = {{fontSize: 20, color: 'white'}}>{children || title}</Text> 
            </View> 
        </TouchableOpacity>
    );
};

MyButton.defaultProps = { // 위 방법 외에도 defaultProps를 사용하는 방법이 있음. 객체 형태로 props의 기본 값들을 설정. 
    title: 'default',
    onPress: () => alert('default'),
};

MyButton.PropTypes = { // PropTypes를 이용하면 타입을 지정하거나 반드시 넘어와야 하는 데이터를 지정할 수 있음. 컴포넌트의 PropTypes의 객체 형태로 값 지정.
    title: PropTypes.string, // title은 반드시 string이 넘어와야 함 -> App_props에서 <MyButton title={123}/>가 있다면 warning. 
    onPress: PropTypes.func, // onPress는 반드시 함수가 넘어와야 함
    title2: PropTypes.string.isRequired, // 뒤에 isRequired를 붙이면 반드시 넘어와야 하는 필수 항목으로 지정할 수 있음 
};

export default MyButton; 