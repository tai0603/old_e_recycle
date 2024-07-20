import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeTab } from '../tabs';
import { ReportSubmitSuccessScreen } from '../screens';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"Home"}
        >
            <Stack.Screen name="Home" component={HomeTab} />
            <Stack.Screen name="SubmitSuccess" component={ReportSubmitSuccessScreen} />
        </Stack.Navigator>
    )
}

export default HomeStack;