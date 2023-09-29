import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Carrinho from '../Pages/Carrinho';


const Tab = createBottomTabNavigator();


const AppRoute = () => {
    return(
      <Tab.Navigator initialRouteName= "Login">
        <Tab.Screen 
          options={{ headerShown: false }}
          name="Home" 
          component={Home} 
        />
        <Tab.Screen 
          options={{ headerShown: false }}
          name="Carrinho" 
          component={Carrinho} 
        />
      </Tab.Navigator>
    );
}

export default AppRoute;