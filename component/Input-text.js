import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const InputText = ({ placeholder, borderColor, placeholderTextColor, passwordRules, value, onChangeText }) => {
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
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={passwordRules === '*' ? true : false}
                style={[styles.input, { borderColor, fontFamily: 'Medium' }]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        height: 64,
        width: 343,
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 4,
        fontFamily: 'Medium',
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
});

export default InputText;
