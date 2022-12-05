import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import Login from './Login';

const Stack = createNativeStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='App'
             screenOptions={{
                headerShown: false
              }}
            >
                <Stack.Screen
                name="Login"
                component={Login}
                />
                <Stack.Screen 
                name="App"
                component={App}
                />
            </Stack.Navigator>
    
        </NavigationContainer>
    );
}

export default Navigation;