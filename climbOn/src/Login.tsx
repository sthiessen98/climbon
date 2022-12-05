import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { ILoginProps } from './NavigationProps';

const Login = ({navigation}: ILoginProps) => { 
    return (
        <View>
            <Button title='Get Data'
            onPress={()=> {
                console.log('fetching...');

                //Does work
                fetch('http://localhost:5000/api')
                    .then(response => response.json())
                    .then(data => console.log(data));

                //Does not work
                fetch('/api')
                    .then(response => response.json())
                    .then(data => console.log(data));
            }}/>

            <Button 
            title='To Home'
            onPress={()=> {
                navigation.navigate('App');
            }}/>
        </View>
    );
};

export default Login;
