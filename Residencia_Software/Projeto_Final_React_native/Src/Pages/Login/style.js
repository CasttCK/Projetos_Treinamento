/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#83B1EC',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        width: 180,
        height: 180,
        borderRadius: 100,
    },

    input:{
        marginTop: 13,
        padding: 10,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#D2DFF0',
        color: '#514F4B',
        fontSize: 16,
        fontWeight: 'bold',
    },

    button:{
        width: 100,
        height: 40,
        marginTop: 30,
        borderRadius: 10,
        backgroundColor: '#1818BD',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default style;
