/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, Text } from 'react-native';

import styles from './style';

const HeaderDirect = () => {

    return (
        <>
        <View style={styles.header}>
            <Text style={styles.text}>Bate-papo</Text>
            <Text style={styles.text}>Ligações</Text>
            <Text style={styles.text}>Solicitações</Text>
        </View>
        <TextInput
        style={styles.pesquisa}
        placeholder="Pesquisar"
    />
    </>
    );
};

export default HeaderDirect;