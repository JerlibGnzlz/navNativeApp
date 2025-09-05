import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingScreen } from '../screens/setting/SettingScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerTitle: 'Nav App',
            headerStyle: {
                backgroundColor: 'green',
                shadowColor: 'transparent',
                elevation: 0
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center'

        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
    );
}