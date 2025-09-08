/* eslint-disable react-hooks/exhaustive-deps */
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Button } from '@react-navigation/elements';
import { globalStyles } from '../../themes/themes';
import { RootStackParamList } from '../../routes/StackNavigator';
import { useEffect } from 'react';
import { Pressable } from 'react-native-gesture-handler';


export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
        navigation.setOptions({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <Text>Menu</Text>
                </Pressable>

            ),
        })
    }, [])


    return (
        <View style={globalStyles.container}>
            <Text >en el Home Screen</Text>
            <Button
                style={globalStyles.primaryButton}
                onPress={() => navigation.navigate('About')}>
                Go to About
            </Button>
        </View>
    )
}