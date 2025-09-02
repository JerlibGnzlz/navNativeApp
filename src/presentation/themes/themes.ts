import { StyleSheet } from "react-native"

export const globalColors = {
    primary: '#5856D6',
    secondary: '#FF9500',
    tertiary: '#FF5858',
    background: '#F5F5F5',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
    info: '#2196F3',
    text: '#333333',

}


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background
    },

    primaryButton: {
        backgroundColor: globalColors.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10,
        textAlign: 'center',
        color: 'white'
    },
})