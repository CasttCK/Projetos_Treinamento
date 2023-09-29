/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './style';

function CardPost() {

  const direct = [
    {
      id: '1',
      user: 'Dolores Fuertes de Barriga',
      userImage: 'https://www.accessorize.com.br/wp-content/uploads/2021/08/fotos-para-perfil-whastapp-1.jpg',
      mensagem: 'Cadê minha dipirona ???',
    },
    {
      id: '2',
      user: 'Renato Pordeus Furtado',
      userImage: 'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg',
      mensagem: 'Tu acredita que eu perdi meu celular?',
    },
    {
      id: '3',
      user: 'Amin Amou Amado',
      userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNND6dDsSddDuCycNkXf2H5DwXpgfyNVsMUw&usqp=CAU',
      mensagem: 'Desisti da morena !! kkkkk',
    },
    {
      id: '4',
      user: 'Colápso Cardíaco da Silva',
      userImage: 'https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/06/01/860172/20200601234913362909e.jpg',
      mensagem: 'Hackei a NASA',
    },
  ];

  function renderItem({item: direct}){
      return (
        <View style={styles.postHeader}>
            <View >
                <Image
                    source= {{uri: direct.userImage}}
                    style= {styles.userImage}
                />
            </View>
            <View style={styles.userProfile}>
                <View>
                    <Text style={styles.userName}>{direct.user}</Text>
                    <Text style={styles.userMessage}>{direct.mensagem}</Text>
                </View>
            </View>
        </View>
      );
  }

  return (
    <View>
      <FlatList
        data= {direct}
        keyExtractor= {(item) => item.id}
        renderItem= {renderItem}
      />
    </View>
  );
}

export default CardPost;
