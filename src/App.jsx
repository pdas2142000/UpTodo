import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigation } from './navigations/stack-navigation'
import { TodoProvider } from './utils/context/TodoProvider'
import { ProfileProvider } from './utils/context/ProfileProvider'
import Toast from 'react-native-toast-message'

const App = () => {
    return (
        <TodoProvider>
            <ProfileProvider>
                <NavigationContainer>
                    <AppNavigation />
                </NavigationContainer>
            </ProfileProvider>
            <Toast />
        </TodoProvider>
    )
}

export default App