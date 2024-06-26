import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Octicons'
import Home from "../view/Home";
import Perfil from "../view/Perfil";

const Tab = createBottomTabNavigator();

export default props => {
    return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Perfil' component={Perfil} />
    </Tab.Navigator>
    )
}