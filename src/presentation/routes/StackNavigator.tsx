import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
        </Stack.Navigator>
    );
}