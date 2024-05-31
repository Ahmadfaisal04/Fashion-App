import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputText = ({ placeholder, borderColor, placeholderTextColor}) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.input, { borderColor }]}
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
        borderRadius: 4

    },
    text: {
        fontSize: 16,
    },
});

export default InputText;
