import React from "react";
import PropTypes from "prop-types";
import { weather } from "cli-spinners";
import {View, Text, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Weather({temp}){
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons size={70} name="weather-lightning-rainy"/>
            <Text>{temp}</Text>
        </View>

    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "clouds", "Atmosphere", "Clear", "Haze", "Dust", "Mist"]).isRequired

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
})