import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Headline from '../component/Headline';
import InputText from '../component/Input-text';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text === '' || validateEmail(text)) {
      setEmailError('');
    } else {
      setEmailError('Not a valid email address. Should be your@email.com');
    }
  };

  const handleSend = () => {
    if (!validateEmail(email)) {
      setEmailError('Not a valid email address. Should be your@email.com');
    } else {
      setEmailError('');
      simulateSendEmail(email);
      Alert.alert('Data terkirim');
    }
  };

  const simulateSendEmail = () => {
    setTimeout(() => {
      Alert.alert(
        'Email terkirim!',
        'Periksa email Anda untuk instruksi mengatur ulang kata sandi Anda.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'), // Ganti 'Login' dengan nama rute halaman Login Anda
          },
        ]
      );
    }, 2000); // Simulate 2 seconds delay
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.heading}>
          <Headline text="Forgot password" />
        </View>

        <View style={styles.message}>
          <Konfirmasi text="Please, enter your email address. You will receive a link to create a new password via email." />
        </View>

        <View style={styles.inputContainer}>
          <InputText
            placeholder="Email"
            borderColor={emailError ? 'red' : email === '' ? '#FF0000' : 'black'}
            placeholderTextColor="#FF0000"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {emailError ? (
          <View style={styles.errorContainer}>
            <Konfirmasi text={emailError} color="red" fontSize={11} />
          </View>
        ) : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSend}>
          <ButtonComponent backgroundColor="#FF0000" text="SEND" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 250,
  },
  heading: {
    marginBottom: 50,
  },
  message: {
    padding: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  errorContainer: {
    marginTop: -30,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ForgotPassword;
