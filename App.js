import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1,}}>
        <View style={{flex: 1, flexDirection: 'row' }}>
            <View style={{flex: 1,flexDirection: 'column'}}>
              <View style={{flex: 1,backgroundColor: 'blue',}}></View>
              <View style={{flex: 1,backgroundColor: 'lightblue',}}></View>
            </View>
            <View style={{flex: 1,flexDirection: 'column'}}>
                  <View style={{flex: 1,flexDirection: 'row'}}>
                    <View style={{flex: 1,backgroundColor: 'red',}}></View>
                    <View style={{flex: 1,backgroundColor: 'orange',}}></View>
                  </View>
            </View>
        </View>
      <View style={{flex: 1,backgroundColor: 'pink',}}></View>
    </View>
  );
}