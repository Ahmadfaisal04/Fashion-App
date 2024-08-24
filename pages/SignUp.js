import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Headline from '../component/Headline';
import InputText from '../component/Input-text';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/Icon-Button';

const SignUp = ({navigation}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ marginBottom: 50 }}>
          <Headline text="Sign up" />
        </View>

        <View>
          <InputText
            placeholder="Username"
            borderColor="gray"
            placeholderTextColor="gray"
          />

          <InputText
            placeholder="Email"
            borderColor="gray"
            keyboardType="email-address"
            placeholderTextColor="gray"
          />

          <InputText
            placeholder="Password"
            borderColor="gray"
            placeholderTextColor="gray"
            passwordRules="*"
            secureTextEntry
          />
        </View>

        <View style={{ marginTop: -15, marginLeft: 100 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Konfirmasi text="Already have an account?" fontSize={14} />
            <Image
              source={require('../assets/round-arrow_right_alt-24px.png')}
              style={{
                marginLeft: 240,
                marginTop: -24.5,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: -5 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <ButtonComponent backgroundColor="#FF0000" text="SIGN UP" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: -5 }}>
          <Konfirmasi text="Or sign up with social account" fontSize={14} />
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              marginTop: -25,
              justifyContent: 'center',
            }}
          >
            <IconButton imageSource={require('../assets/google.png')} />
            <IconButton imageSource={require('../assets/facebook.png')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
