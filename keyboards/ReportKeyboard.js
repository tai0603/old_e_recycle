import React from 'react';
import {
    View,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native';

import { ReportScreen } from '../screens';

const ReportKeyboard = () => {
    return (  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
                <KeyboardAvoidingView>
                    <ReportScreen />
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>   
    )
}

export default ReportKeyboard;