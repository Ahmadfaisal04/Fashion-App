import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Headline = ({text}) => {
    return (
       <SafeAreaView>
        <View style={{
            alignItems: 'Right',
            marginLeft: 20,
            marginTop: 20,
        }}>
            <Text style={{
                fontSize :  34,
                fontWeight: 'bold'
                }}>
                {text}
            </Text>
        </View>
       </SafeAreaView>
    )
}

export default Headline;