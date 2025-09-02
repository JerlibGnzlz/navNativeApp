import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '@react-navigation/elements';

export const AboutScreen = () => {

    const navigation = useNavigation();
    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About</Text>
            <Button
                onPress={() => navigation.navigate("Products" as never)}>
                Go to Products
            </Button>
        </View>
    )
}
