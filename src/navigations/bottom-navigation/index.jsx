import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'

/** Library */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/home-screen'
import ProfileScreen from '../../screens/profile.screen'
import MyTabBar from './custom-bottom-nav'


const Tab = createBottomTabNavigator()
const BottomNav = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "android" ? 'height' : undefined}
            keyboardVerticalOffset={Platform.OS === 'android' ? -50 : 0}
        >
            <Tab.Navigator
                tabBar={(props) => <MyTabBar {...props} />}
                screenOptions={{
                    headerShown: false,
                    keyboardHidesTabBar: true,
                }}
            >
                <Tab.Screen name="HomeScreen" component={HomeScreen} />
                <Tab.Screen name="ProfileScreen" component={ProfileScreen} />

            </Tab.Navigator>
        </KeyboardAvoidingView>
    )
}

export default BottomNav