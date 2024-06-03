import { Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
   'Metro-Bold' : require('./assets/fonts/Metropolis-Bold.otf'),
   'Metro-Medium' : require('./assets/fonts/Metropolis-Medium.otf'),
   'SemiBold' : require('./assets/fonts/Metropolis-SemiBold.otf'),
   'Black' : require('./assets/fonts/Metropolis-Black.otf'),

  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Font tidak di temukan!!!</Text>
      </View>
    );
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Font Bisa</Text>
      <Text style={{ fontFamily: 'Metro-Bold', fontSize: 30 }}>Metro Bold</Text>
      <Text style={{ fontFamily: 'Metro-Medium', fontSize: 30 }}>Metro Medium</Text>
      <Text style={{ fontFamily: 'SemiBold', fontSize: 30 }}>Semi Bold</Text>
      <Text style={{ fontFamily: 'Black', fontSize: 30 }}>Black</Text>
    </View>
  );
};

export default App;
