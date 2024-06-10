import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';


const ButtonComponent = ({backgroundColor, text}) => {
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
            backgroundColor: backgroundColor,
            borderRadius: 25,
            width: 343,
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
            marginBottom: 100
        }}>
  
        <Text style={{
            color: 'white',
            fontSize: 14,
            lineHeight: 20,
            fontFamily: 'Metro-Medium',
        }}>
            {text}
        </Text>
    </View>
    </SafeAreaView>
    )
  }
  
export default ButtonComponent;
