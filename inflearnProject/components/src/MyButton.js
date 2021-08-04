// 버튼 컴포넌트 만들기
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const MyButton = () => { // MyButton 함수 만들기 
    return ( 
        <TouchableOpacity 
            onPress = {() => alert ('MyButton')}
            hitSlop = {{bottom: 100, top: 100, left: 100, right: 100}}
            pressRetentionOffset = {{bottom: 10, top: 10, left: 10, right: 10}}
        > 
            <View style = {{backgroundColor: '#C75DE4', padding: 10, margin: 100}}> 
                <Text style = {{fontSize: 20, color: 'white'}}>MyButton</Text> 
            </View> 
        </TouchableOpacity>
        // <TouchableOpacity>는 클릭했을 때 호출되는 onPress 담당 
        // <View>는 버튼에 스타일 적용
        // <Text>는 버튼에 나타나는 텍스트 
        // <View>의 style에서 margin을 100으로 넓게 주면, margin 범위 안에만 터치하면 버튼이 터치된 것과 같은 효과 
        // <TouchableOpacity>에 hitSlop을 설정해주면 margin 값을 주지 않더라도 같은 효과. 하지만 margin은 스타일이기 때문에 실제로 공간차지를 하고, hitSlop은 공간차지 x
        // pressRetentionOffset은 버튼을 눌렀다가 손을 떼지 않은 채로 멀리 이동했을 때 버튼을 누른 것이 취소되는 효과. 
        // <TouchableOpacity> 대신 <Pressable>을 이용해도 버튼을 동일하게 만들 수 있음 
    )
}

export default MyButton; // MyButton export 하기