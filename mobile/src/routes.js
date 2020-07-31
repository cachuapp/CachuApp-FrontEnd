import React from 'react';
import { View, Text } from 'react-native';
import Login from './pages/Login/';
import Register from './pages/Register/'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Routes() {

    const AppStack = createStackNavigator();
    
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />

            <AppStack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerShown: false
                    }}
                />  
            </AppStack.Navigator>

        </NavigationContainer>
    );
}