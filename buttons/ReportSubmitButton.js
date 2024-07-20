import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import insert from '../database/ReportInsert'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        height: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 200,
        //marginTop: 550, // menu
        padding: 10
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    }
})

const ReportSubmitButton = ( {Subject, Content} ) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => insert(Subject, Content)}
            >
                <Text style={styles.buttonText}>確認提交</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ReportSubmitButton;