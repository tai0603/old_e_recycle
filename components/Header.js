import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 10
    },
    text: {
        color: 'black',
        fontSize: 30,
        textAlign: 'left'
    }
})

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>舊e回收</Text>
        </View>
    )
}

export default Header;