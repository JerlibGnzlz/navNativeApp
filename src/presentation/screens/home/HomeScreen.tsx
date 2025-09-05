import { NavigationProp, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Button } from '@react-navigation/elements';
import { globalStyles } from '../../themes/themes';
import { RootStackParamList } from '../../routes/StackNavigator';


export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


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