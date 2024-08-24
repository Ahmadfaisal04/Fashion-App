import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Headline from '../component/Headline';
import InputText from '../component/Input-text';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/Icon-Button';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ marginBottom: 50 }}>
          <Headline text="Login" />
        </View>

        <View>
          
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

        <View style={{ marginTop: -10, marginLeft: 130 }}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Konfirmasi text="Forgot your password?" />
            <Image
              source={require('../assets/round-arrow_right_alt-24px.png')}
              style={{ marginLeft: 210, marginTop: -24.5 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: -12 }}>
          <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
            <ButtonComponent backgroundColor="#FF0000" text="LOGIN" />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 80 }}>
          <Konfirmasi text="Or login with social account" />
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              marginTop: -20,
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

export default Login;
