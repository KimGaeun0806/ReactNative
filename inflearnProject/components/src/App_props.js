// props 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
import MyButton from './MyButton_props'; 

export default function App() {
  return ( 
    <View style={styles.container}>
      <MyButton title="MyButton title"/> 
      <MyButton/>
      <MyButton title="MyButton 1" onPress={() => alert('1')}/> 
      <MyButton title="MyButton 2" onPress={() => alert('2')}/>
      <MyButton>children</MyButton> 
    </View>
    // MyButton_props에 아무것도 하지 않았을 때 title="MyButton title"을 지정해도 변하지 않음. MyButton 컴포넌트에서 전달된 title이라는 값을 전혀 받고있지 않기 때문. 
    // 부모 컴포넌트에서 전달된 데이터는 함수의 파라미터로 전달됨.
    // <MyButton>childeren</MyButton>은 title이 전달되지 않았기 때문에 버튼 텍스트에는 아무것도 나타나지 않음. 태그 사이에 있는 값을 출력하기 위해서는 props에 있는 childern을 이용해야 함.
    // MyButton title="MyButton 1" onPress={() => alert('1)}/>MyButton3</MyButton>을 하면 childeren이 우선시되기 때문에 버튼의 텍스트가 MyButton 3으로 나타남.
    // <MyButton/>은 아무 데이터도 없고 텍스트도 뜨지 않지만, props의 기본값을 설정해놓으면 설정해놓은 텍스트가 뜸. 
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