import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { Button } from '@react-navigation/elements';
import { globalStyles } from '../../themes/themes';


export const HomeScreen = () => {

    const navigation = useNavigation();


    return (
        <View style={globalStyles.container}>
            <Text >en el Home Screen</Text>
            <Button
                style={globalStyles.primaryButton}
                onPress={() => navigation.navigate('About' as never)}>
                Go to About
            </Button>
        </View>
    )
}