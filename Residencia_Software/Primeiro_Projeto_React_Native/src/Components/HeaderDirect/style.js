/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    pesquisa:{
        marginLeft: '5%',
        marginTop: 8,
        width: '90%',
        height: 40,
        borderRadius: 30,
        backgroundColor: '#DEDEDE',
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '400',
    },

    text:{
        color: '#000',
        fontSize: 18,
        fontWeight: '400',
    },
});

export default styles;
