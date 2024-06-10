import React from 'react';
import { View } from 'react-native';
import {SafeAreaView } from 'react-native-safe-area-context';
import Headline from '../component/Headline';
import InputText from '../component/Input-text';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/Icon-Button';


const Login = () => {

    return (
        <SafeAreaView>
            <View>
              <View style={{
                marginBottom: 50,
              }}>
                <Headline text="Login" />
              </View>

            <View style={{}}>
                <InputText placeholder="Email" />
                <InputText placeholder="Password" />
            </View>

            <View style={{
                marginTop: -10,
                marginLeft: 150,
            }}>
                <Konfirmasi text="Forgot your password?" />
            </View>

            <View style={{}}>
            <ButtonComponent backgroundColor="#FF0000" text="LOGIN" />
            </View>

            <View style={{
                marginTop: 20,
            }}>
                <Konfirmasi text="Or login with social account" />
            </View>

            <View style={{
                marginTop: 10,
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 20,
                    marginTop: 10,
                    justifyContent: 'center',
                }}>
                    <IconButton imageSource={require('../assets/google.png')} />
                    <IconButton imageSource={require('../assets/facebook.png')} />
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;
