/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './style';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import options from '../../../Assets/IMG/options.png';
import like from '../../../Assets/IMG/like.png';
import comment from '../../../Assets/IMG/comment.png';
import send from '../../../Assets/IMG/send.png';
import save from '../../../Assets/IMG/save.png';

function CardPost() {

  const posts = [
    {
      id: '1',
      user: 'Dolores Fuertes de Barriga',
      userImage: 'https://www.accessorize.com.br/wp-content/uploads/2021/08/fotos-para-perfil-whastapp-1.jpg',
      place: 'Disney',
      pictureUrl: 'https://maladeaventuras.com/wp-content/uploads/2019/03/IMG_5801-1.jpg',
      likesCount: '5.354 likes',
      descricao: 'Rolé na disney',
      hashtags: '#USA #Rolezeira #Vacation',
    },
    {
      id: '2',
      user: 'Renato Pordeus Furtado',
      userImage: 'https://wl-incrivel.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg',
      place: 'Cinemaxx',
      pictureUrl: 'https://img.elo7.com.br/product/zoom/2A1A4B7/big-poster-filme-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg',
      likesCount: '257.368 likes',
      descricao: 'Melhor filme !!!',
      hashtags: '#Joker #DC #JoaquinPhoenix',
    },
    {
      id: '3',
      user: 'Amin Amou Amado',
      userImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNND6dDsSddDuCycNkXf2H5DwXpgfyNVsMUw&usqp=CAU',
      place: 'Nárnia',
      pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y6eJFAnT6y9v5M664QuuHQlRa57m2KqiEw&usqp=CAU',
      likesCount: '368 likes',
      descricao: 'Brincadeira de FDS.',
      hashtags: '#Narnia #FDS #Batalha',
    },
    {
      id: '4',
      user: 'Colápso Cardíaco da Silva',
      userImage: 'https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/06/01/860172/20200601234913362909e.jpg',
      place: 'Na Net',
      pictureUrl: 'https://files.nsctotal.com.br/s3fs-public/2019-08/MTX01_0.jpg?nk1pZS3h9LJZOqvkHvlwINcM1Jqe8TzQ',
      likesCount: '1.257.368 likes',
      descricao: 'Hackei VOCÊ. kkkkkkkkkk',
      hashtags: '#Chora #Anonymous #Script',
    },
  ];

  function renderItem({item: post}){
      return (
        <View>
          <View style={styles.postHeader}>
            <View >
                <Image
                    source= {{uri: post.userImage}}
                    style= {styles.userImage}
                />
            </View>
            <View style={styles.userProfile}>
                <View>
                    <Text style={styles.infoUser}>{post.user}</Text>
                    <Text style={styles.infoPlace}>{post.place}</Text>
                </View>
                <View style={styles.imageOptions}>
                    <TouchableOpacity>
                        <Image
                            source= {options}
                        />
                    </TouchableOpacity>
                </View>
            </View>
          </View>
          <View>
            <Image 
              source= {{uri: post.pictureUrl}}
              style= {styles.userPicture}
            />
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.postActions}>
              <Image
                source= {like}
                style= {styles.likeImage}
              />
              <Image
                source= {comment}
                style= {styles.commentImage}
              />
              <Image
                source= {send}
                style= {styles.sendImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postSave}>
              <Image
                source= {save}
                style= {styles.saveImage}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.pictureInfo}>
            <Text style={styles.pictureLike}>{post.likesCount}</Text>
            <Text style={styles.pictureTags}>{post.hashtags}</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.pictureDescricao}>{post.descricao}</Text>
          </TouchableOpacity>
        </View>
      );
  }

  return (
    <View>
      <FlatList
        data= {posts}
        keyExtractor= {(item) => item.id}
        renderItem= {renderItem}
      />
    </View>
  );
}

export default CardPost;
