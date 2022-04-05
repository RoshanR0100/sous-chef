import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const color = "#5EC87C";

const Header = ({title}) => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text> 
        </View> 
    );
}
 
export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    icon: {
        position: 'absolute',
        left: 16,
        color: 'white',
    },
});