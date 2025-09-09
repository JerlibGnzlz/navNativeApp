import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingScreen } from '../screens/setting/SettingScreen';
import { ProductScreen } from '../screens/products/ProductScreen';



export type RootStackParamList = {
    Home: undefined;
    About: undefined;
    Product: [id: number, name: string];
    Products: undefined;
    Setting: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                // Removed drawerType as it is not a valid property for StackNavigator
                // headerTitle: 'Nav App',
                // headerStyle: {
                //     backgroundColor: 'green',
                //     shadowColor: 'transparent',
                //     elevation: 0
                // },
                // headerTintColor: 'black',
                // headerTitleAlign: 'center'

            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    );
}