import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IconButton = ({ imageSource }) => {
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 92,
        height: 64,
        marginTop: -5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2

    },
    image: {
        width: 30,
        height: 30,
    },
});

export default IconButton;
