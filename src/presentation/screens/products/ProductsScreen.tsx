import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../themes/themes';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { type RootStackParamList } from '../../routes/StackNavigator';

export const ProductsScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


    const products = [
        {
            id: 1,
            name: 'Producto 1'
        },
        {
            id: 2,
            name: 'Producto 2'
        },
        {
            id: 3,
            name: 'Producto 3'
        },
        {
            id: 4,
            name: 'Producto 4'
        },
    ]


    return (
        <View style={globalStyles.container}>
            <Text >en el Home Screen</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={globalStyles.primaryButton}
                        onPress={() => navigation.navigate("Product", [item.id, item.name])}
                    >
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <Text >Ajustes</Text>

            <Button
                style={globalStyles.primaryButton}
                onPress={() => navigation.navigate("Setting")}>
                Ajustes
            </Button>
        </View>
    )
}