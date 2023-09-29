/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Header from '../../Components/Header/Header.js';
import * as Produtos from '../../Api/DB/Produtos.json';

import style from './style.js';

function Home(){

    return (
        <View style= {style.container}>
            <Header/>
            <View style= {style.body}>
                <FlatList
                    data={Produtos}
                    renderItem={({item}) => (
                        <Image>{item.fotoLink}</Image>)}
                    numColumns={3}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

export default Home;
