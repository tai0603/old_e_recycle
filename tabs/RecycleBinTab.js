import React from 'react';
import {
    SafeAreaView
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ClothingDropScreen, SocialWelfareOrganizationScreen, SecondHandPlatformScreen } from '../screens';

const Tab = createMaterialTopTabNavigator();

const RecycleBinTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"舊衣回收廠"}
        >
            <Tab.Screen name="舊衣回收廠" component={ClothingDropScreen} />
            <Tab.Screen name="社福機構" component={SocialWelfareOrganizationScreen} />
            <Tab.Screen name="二手平台" component={SecondHandPlatformScreen} />
        </Tab.Navigator>
    )
}

export default RecycleBinTab;