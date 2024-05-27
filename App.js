import React from 'react';
import { View, Text } from 'react-native';

const CustomButton = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      padding: 20,
      marginBottom: 80
    }}>
      
      <ButtonComponent backgroundColor='blue' text='Register' />
    </View>
  );
}


const ButtonComponent = ({backgroundColor, text}) => {
  return (
      <View style={{
          backgroundColor: backgroundColor,
          borderRadius: 10,
          marginLeft: 10,
          width: 100
      }}>

      <Text style={{
          color: 'white',
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: 70
      }}>
          {text}
      </Text>
  </View>
  )
}

export default CustomButton;
