import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <View style={{flex: 1,}}>
        <View style={{flex: 1, flexDirection: 'row' }}>
            <View style={{flex: 1,flexDirection: 'column'}}>
              <View style={{flex: 1,backgroundColor: 'red',}}></View>
              <View style={{flex: 1,backgroundColor: 'green',}}></View>
            </View>
            <View style={{flex: 1,flexDirection: 'column'}}>
                  <View style={{flex: 1,flexDirection: 'row'}}>
                    <View style={{flex: 1,backgroundColor: 'blue',}}></View>
                    <View style={{flex: 1,backgroundColor: 'purple',}}></View>
                  </View>
            </View>
        </View>
      <View style={{flex: 1,backgroundColor: 'yellow',}}></View>
    </View>
  );
}
