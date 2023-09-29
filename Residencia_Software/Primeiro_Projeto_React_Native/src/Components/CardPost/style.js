/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    postHeader:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
    },

    userImage:{
        width: 50,
        height: 50,
        borderRadius: 30,
    },

    userProfile:{
        flexDirection: 'row',
    },

    imageOptions:{
        justifyContent: 'center',
        marginLeft: 80,
    },

    infoUser:{
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },

    infoPlace:{
        marginLeft: 8,
        marginBottom: 6,
        fontSize: 16,
        color: '#666',
    },

    userPicture:{
      width: '100%',
      height: 400,
    },
  
    actions:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    postActions:{
        flexDirection: 'row',
        width: '30%',
        alignItems: 'center',
    },

    likeImage:{
        width: 25,
        height: 25,
        marginLeft: 10,
    },

    commentImage:{
        width: 25,
        height: 25,
        marginLeft: 10,
    },

    sendImage:{
        width: 25,
        height: 25,
        marginLeft: 10,
    },

    postSave:{
        width: '9%',
    },

    saveImage:{
        width: 35,
        height: 35,
        padding: 10,
    },

    pictureInfo:{
        marginLeft: 10,
    },

    pictureLike:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },

    pictureDescricao:{
        marginLeft: 10,
        fontSize: 15,
        color: '#000',
    },

    pictureTags:{
        color: '#053D93',
    },

});

export default styles;