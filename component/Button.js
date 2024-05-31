import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const ButtonComponent = ({backgroundColor, text}) => {
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
            lineHeight: 20
        }}>
            {text}
        </Text>
    </View>
    </SafeAreaView>
    )
  }
  
export default ButtonComponent;
