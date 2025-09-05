import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '@react-navigation/elements';
import { RootStackParamList } from '../../routes/StackNavigator';

export const AboutScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About</Text>
            <Button
                onPress={() => navigation.navigate("Products")}>
                Go to Products
            </Button>
        </View>
    )
}
