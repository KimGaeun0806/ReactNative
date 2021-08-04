// press event 
import React from 'react';
import { TouchableOpacity, View, Text, Touchable } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ title, onPress, children}) => {
    return (
        <TouchableOpacity
            onPress = {() => console.log('press')}
            onPressIn = {() => console.log('in')}
            onPressOut = {() => console.log('out')}
            onLongPress = {() => console.log('long')}
            delayLongPress = {3000} // onLongPress가 호출되는 시간을 직접 설정하고 싶을 때 
        >
            <View style = {{ backgroundColor: 'red', padding: 10, margin: 10 }}>
                <Text style = {{ fontSize: 20, color: 'white' }}>
                    {children || title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = {
    title: 'default',
    onPress: () => alert('default'),
};
MyButton.PropTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
};

export default MyButton;

