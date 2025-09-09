import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../themes/themes';
import { useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {


    const dimension = useWindowDimensions();
    return (
        <Drawer.Navigator

            // eslint-disable-next-line react/no-unstable-nested-components
            drawerContent={(props) => <><DrawerContent {...props} /></>}


            screenOptions={{
                headerShown: false,
                drawerType: (dimension.width >= 768 ? 'permanent' : 'slide'),
                drawerPosition: 'left',

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: globalColors.text,
            }}>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator >
    );
}

const DrawerContent = (props: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                height: 200,
                backgroundColor: globalColors.primary,
                margin: 20,
                borderRadius: 50
            }} />

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}