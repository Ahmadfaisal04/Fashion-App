import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const Konfirmasi = ({ text = "Default Text", color = "black", fontSize = 13 }) => {
    const [fontsLoaded] = useFonts({
        'Bold': require('../assets/fonts/Metropolis-Bold.otf'),
        'Medium': require('../assets/fonts/Metropolis-Medium.otf'),
        'SemiBold': require('../assets/fonts/Metropolis-SemiBold.otf'),
        'Black': require('../assets/fonts/Metropolis-Black.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Font tidak ditemukan!!!</Text>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <View style={styles.center}>
                <Text style={[styles.text, { color, fontSize: Number(fontSize) }]}>
                    {text}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Medium',
        padding: 3,
        lineHeight: 20,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
});

export default Konfirmasi;
