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

    userName:{
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },

    userMessage:{
        marginLeft: 8,
        marginBottom: 6,
        fontSize: 16,
        color: '#666',
    },

});

export default styles;
