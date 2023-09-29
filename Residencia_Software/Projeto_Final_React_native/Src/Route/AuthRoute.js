import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../Pages/Login";
import Home from "../Pages/Home";

const AuthStack = createNativeStackNavigator();

const AuthRoute = () => {
    return(
    <AuthStack.Navigator
    screenOptions = {{
        headerShown: false,
    }}>
    <AuthStack.Screen name ="Login" component={Login}/>
    </AuthStack.Navigator>
    );
}

export default AuthRoute;