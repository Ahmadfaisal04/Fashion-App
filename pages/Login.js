import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Headline from '../component/Headline';
import InputText from '../component/Input-text';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/Icon-Button';


const Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <View style={{
                    marginBottom: 50,
                }}>
                    <Headline text="Login" />
                </View>

                <View style={{}}>
                    <InputText placeholder="Email" />
                    <InputText placeholder="Password" passwordRules="*" />
                </View>

                <View style={{
                    marginTop: -10,
                    marginLeft: 130,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Forgot Password")}>
                        <Konfirmasi text="Forgot your password?" />
                        <Image source={require('../assets/round-arrow_right_alt-24px.png')} style=
                        {{
                            marginLeft: 210,
                            marginTop: -24.5, 
                        }} />
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <TouchableOpacity onPress={() => navigation.navigate("MyTabs")}>
                    <ButtonComponent backgroundColor="#FF0000" text="LOGIN" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginTop: 80,
                }}>
                    <Konfirmasi text="Or login with social account" />
                </View>

                <View style={{
                    marginTop: 0,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        gap: 20,
                        marginTop: -25,
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
