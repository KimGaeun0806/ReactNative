import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading(){
    return <View style={styles.container}>
        <Text style={styles.text}>Getting the weather</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 40, //paddingHorizontal과 paddingVertical은 일반적인 css에는 없지만 react native에만 있는 것
        paddingVertical: 120,
        backgroundColor: "#EDEEF7"
    },
    text: {
        color: "black",
        fontSize: 25
    }

})