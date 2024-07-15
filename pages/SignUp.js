import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Headline from '../component/Headline';
import InputText from '../component/Input-text';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/Icon-Button';

const SignUp = () => {
    
    const [formSignUp, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const onSubmit = () => {
        console.log('Name:', formSignUp.name);
        console.log('Email:', formSignUp.email);
        console.log('Password:', formSignUp.password);


        if (formSignUp.email === 'Faisal@gmail.com' && formSignUp.password === '123' ) {
            Alert.alert('Success', 'Sign Up Berhasil');
            navigation.navigate('Login');
        } else {
            Alert.alert('Failure', 'Sign Up Gagal');
        }
    };

    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <View style={{ marginBottom: 50 }}>
                    <Headline text="Sign up" />
                </View>

                <View>
                    <InputText
                        placeholder="Name"
                        borderColor="gray"
                        placeholderTextColor="gray"
                        onChangeText={(hasil) => setForm({ ...formSignUp, name: hasil })}
                        value={formSignUp.name}
                    />

                    <InputText
                        placeholder="Email"
                        borderColor="gray"
                        placeholderTextColor="gray"
                        onChangeText={(hasil) => setForm({ ...formSignUp, email: hasil })}
                        value={formSignUp.email}
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
