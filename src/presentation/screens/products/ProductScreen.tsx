/* eslint-disable react-native/no-inline-styles */
import { RouteProp, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { RootStackParamList } from '../../routes/StackNavigator';
import { globalStyles } from '../../themes/themes';

export const ProductScreen = () => {


    const [id, name] = useRoute<RouteProp<RootStackParamList, 'Product'>>().params as [number, string]


    return (
        <View style={globalStyles.container}>
            <Text>Product</Text>

            <Text style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold'
            }}>{id} - {name}</Text>
        </View>
    )
}