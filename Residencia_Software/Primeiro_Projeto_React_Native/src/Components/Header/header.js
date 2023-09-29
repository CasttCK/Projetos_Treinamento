/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/core';

import logo from '../../../Assets/IMG/logo.png';
import camera from '../../../Assets/IMG/camera.png';
import send from '../../../Assets/IMG/send.png';

import styles from './style';

const Header = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={styles.camera}>
                <Image
                    source= {camera}
                    style= {styles.cameraImage}
                />
           </View>
           <View style={styles.logo}>
                <Image
                    source= {logo}
                    style= {styles.logoImage}
                />
           </View>
           <TouchableOpacity
           onPress={() => navigation.navigate('Direct')}
           >
            <View style={styles.actions}>
                    <Image
                        source= {send}
                        style= {styles.sendImage}
                    />
            </View>
           </TouchableOpacity>
        </View>
    );
};

export default Header;