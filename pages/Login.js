import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Headline from '../component/Headline';
import InputText from '../component/Input-text';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/Icon-Button';

const Login = () => {
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });

    const onSubmit = () => {
        console.log('Email:', formLogin.email);
        console.log('Password:', formLogin.password);

        if (formLogin.email === 'Faisal@gmail.com' && formLogin.password === '123') {
            Alert.alert('Success', 'Login Berhasil');
            navigation.navigate('MyTabs');
        } else {
            Alert.alert('Failure', 'Login Gagal');
        }
    };

    const navigation = useNavigation();

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
                        placeholderTextColor="gray"
                        onChangeText={(text) => setFormLogin({ ...formLogin, email: text })}
                        value={formLogin.email}
                    />

                    <InputText
                        placeholder="Password"
                        borderColor="gray"
                        placeholderTextColor="gray"
                        passwordRules="*"
                        onChangeText={(text) => setFormLogin({ ...formLogin, password: text })}
                        value={formLogin.password}
                    />
                </View>

                <View style={{ marginTop: -10, marginLeft: 130 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
                        <Konfirmasi text="Forgot your password?" />
                        <Image
                            source={require('../assets/round-arrow_right_alt-24px.png')}
                            style={{ marginLeft: 210, marginTop: -24.5 }}
                        />
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={onSubmit}>
                        <ButtonComponent backgroundColor="#FF0000" text="LOGIN" />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 80 }}>
                    <Konfirmasi text="Or login with social account" />
                </View>

                <View style={{ marginTop: 0 }}>
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

export default Login;
