import React from 'react';
import {
    Image
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, LocationScreen } from '../screens';
import { RecycleBinTab } from '../tabs';
import { ReportKeyboard } from '../keyboards';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen
                name="主頁"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="其他回收管道"
                component={RecycleBinTab}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/recyclebins.png')}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="地圖"
                component={LocationScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/map.png')}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="問題回報"
                component={ReportKeyboard}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require('../assets/icons/report.png')}
                            resizeMode="contain"
                            style={{
                                width: 40,
                                height: 40,
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTab;