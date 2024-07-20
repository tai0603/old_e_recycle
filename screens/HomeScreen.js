import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Text
} from 'react-native';

import Header from '../components/Header';

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
    }
})

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ImageBackground
                style={styles.imgBackground}
                source={require('../assets/images/background_home.jpg')} 
                resizeMode="cover"
            >
                <Header />
            </ImageBackground>
        </SafeAreaView>
    )
}

export default HomeScreen;