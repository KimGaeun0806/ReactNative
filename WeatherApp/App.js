import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = "e176cfa9e4862aca726af345e7f8ffcf";

export default class extends React.Component {
  state = {
    isLoading:  true,
  };
  getWeather = async(latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading:false,condition: weather[0].main, temp});
  };
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync(); 
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      this.setState({isLoading: false});
    } catch (error){ //사용자가 permission을 주지 않는다면 
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}

