/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import style from './style.js';

function Header(){

    const navigation = useNavigation();

    return (
        <View style= {style.cardHeader}>
            <Image
                source={require('../../Assets/IMG/logo.png')}
                style= {style.logo}
                onPress={() => navigation.navigate('Home')}
            />
            <TouchableOpacity>
                <Image
                   source={require('../../Assets/IMG/pesquisa.png')}
                   style= {style.pesquisa}
                   onPress={() => navigation.navigate('Home')}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Header;
