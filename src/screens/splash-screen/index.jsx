import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { SplashStyles as styles } from './styles'
import { Color } from '../../utils/constant'
import { ms } from '../../utils/helpers/metrics'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

    const Navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            Navigation.replace('ButtomNav'); // Replace so user can't go back to splash
        }, 2000);

        return () => clearTimeout(timer); // Clean up timer on unmount
    }, [Navigation]);

    return (
        <View style={styles.ut_container}>
            <View style={styles.ut_logo_box}>
                <Image source={require('../../../assets/images/logo.png')} style={{ width: '100%', height: '100%' }} />
            </View>
            <ActivityIndicator size={ms(20)} color={Color.ut_primary} />
        </View>
    )
}

export default SplashScreen