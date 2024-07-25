import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import Headline from '../component/Headline';
import InputText from '../component/Input-text';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/Icon-Button';

const SignUp = () => {
  const [formSignUp, setForm] = useState({
    nim: '',
    password: '',
  });

  const navigation = useNavigation();

  const onSubmit = () => {
    const { nim, password } = formSignUp;
    if (!nim || !password) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    axios.post('https://api.beasiswa.unismuh.ac.id/api/signup', {
      username: nim,
      password: password
    })
    .then(async (response) => {
      if (response.status === 200) {
        await AsyncStorage.setItem("userName", response.data.data.nama);
        await AsyncStorage.setItem("userNim", nim);

        Alert.alert('Success', 'Logging in...');

        setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);
      } else {
        Alert.alert('Error', 'Invalid NIM or password!');
      }
    })
    .catch(error => {
      console.log("Error during login:", error.message);
      Alert.alert('Error', 'Failed to log in. Please try again later.');
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ marginBottom: 50 }}>
          <Headline text="Sign up" />
        </View>

        <View>
          <InputText
            placeholder="Nim"
            borderColor="gray"
            keyboardType="numeric"
            placeholderTextColor="gray"
            onChangeText={(hasil) => setForm({ ...formSignUp, nim: hasil })}
            value={formSignUp.nim}
          />

          <InputText
            placeholder="Password"
            borderColor="gray"
            placeholderTextColor="gray"
            passwordRules="*"
            onChangeText={(hasil) => setForm({ ...formSignUp, password: hasil })}
            value={formSignUp.password}
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

        <View style={{ marginTop: 5 }}>
          <TouchableOpacity onPress={onSubmit}>
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
