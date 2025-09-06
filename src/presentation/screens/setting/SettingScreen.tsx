/* eslint-disable react-native/no-inline-styles */
import { Text, View } from 'react-native'
import { globalStyles } from '../../themes/themes'
import { Button } from '@react-navigation/elements';
import { NavigationProp, useNavigation, StackActions } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/StackNavigator';


export const SettingScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={globalStyles.container}>
            <Text style={{ marginBottom: 20 }}>SettingScreen</Text>

            <Button
                style={globalStyles.primaryButton}
                onPress={() => navigation.goBack()}>
                Regresar
            </Button>

            <Button
                style={globalStyles.primaryButton}
                onPress={() => navigation.dispatch(StackActions.popToTop())}>
                Regresar al Home
            </Button>
        </View >
    )
}
