import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView
} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'; //triple equal to use hoga
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Namaste Duniya</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',//left to right krta 
        justifyContent: 'center', // top to bottom
    },
    whiteText: {
        color: '#FFFFFF',
    },
    darkText: {
        color: '#000000',
    },
});

export default AppPro;
