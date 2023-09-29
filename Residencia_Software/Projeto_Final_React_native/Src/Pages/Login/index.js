/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { AuthContext } from '../../Context/AuthProvider.js';

import style from './style.js';

function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const {login} = React.useContext(AuthContext);

    const logIn = async () => {
        await login({email , senha});
    }

    return (
        <View style= {style.container}>
            <Image
                source={require('../../Assets/IMG/logo.png')}
                style= {style.logo}
            />
            <TextInput
                style= {style.input}
                placeholder= "Digite seu E-mail"
                onChangeText={text => setEmail(text)}
                defaultValue={email}
            />
            <TextInput
                style= {style.input}
                secureTextEntry= {true}
                placeholder= "Digite sua senha"
                onChangeText={text => setSenha(text)}
                defaultValue={senha}
            />
            <TouchableOpacity
                style= {style.button}
                onPress={() => logIn()}
            >
                <Text style= {style.buttonText}>
                    Entrar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
