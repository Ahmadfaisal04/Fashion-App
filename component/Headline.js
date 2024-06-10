import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const Headline = ({text = "Default Text", color = "black", fontSize = 34}) => {
    const [fontsLoaded] = useFonts({
        'Metro-Bold' : require('../assets/fonts/Metropolis-Bold.otf'),
        'Metro-Medium' : require('../assets/fonts/Metropolis-Medium.otf'),
        'SemiBold' : require('../assets/fonts/Metropolis-SemiBold.otf'),
        'Black' : require('../assets/fonts/Metropolis-Black.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Font tidak di temukan!!!</Text>
            </View>
        );
    }

    return (
       <SafeAreaView>
        <View style={{
            alignItems: 'Right',
            marginLeft: 20
        }}>
            <Text style={{
                fontSize :  Number(fontSize),
                fontFamily: 'Metro-Bold',
                color: color,
                }}>
                {text}
            </Text>
        </View>
       </SafeAreaView>
    )
}

export default Headline;