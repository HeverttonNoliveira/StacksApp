// Importando dependências
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigaion from "./TabNavigaion";

//Paginas
import Login from '../view/Login';
import InicialLogin from '../view/InicialLogin';
import Splash from '../view/Splash';
import DefinirSenha from '../view/DefinirSenha';
import CreateAccountScrenn from "../view/CreateAccountScrenn";

export default props => {
    const Stack = createNativeStackNavigator()
    return (
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="InicialLogin" component={InicialLogin}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Cadastro" component={CreateAccountScrenn}/>
                <Stack.Screen name="DefinirSenha" component={DefinirSenha}/>

                <Stack.Screen name="Tab" component={TabNavigaion}/>
            </Stack.Navigator>
    )
}