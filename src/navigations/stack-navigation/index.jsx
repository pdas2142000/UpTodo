/**Libraries */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home-screen';
import SplashScreen from '../../screens/splash-screen';
import BottomNav from '../bottom-navigation';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='ButtomNav' component={BottomNav} />
        </Stack.Navigator>
    );
};

export const AppNavigation = () => {
    return <MainStack />
};