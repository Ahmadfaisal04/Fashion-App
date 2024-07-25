import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import Api from './Api';

const ApiPost = () => {
  const [data, setData] = useState({
    nim: '',
    password: ''
  });
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const onSubmit = () => {
    axios.post('https://api.beasiswa.unismuh.ac.id/api/login', {
      username: data.nim,
      password: data.password
    })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data);
          setError('');
        }
      })
      .catch(error => {
        console.log(error);
        setError('Ada kesalahan. Silahkan cek kembali nim dan password anda.');
        setUserData(null);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...data, nim: value })}
          placeholder="Nim"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...data, password: value })}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <Button title="Login" onPress={onSubmit} />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      {userData && (
        <View style={styles.userDataContainer}>
          <Text style={styles.userDataText}>ID: {userData.id}</Text>
          <Text style={styles.userDataText}>Username: {userData.username}</Text>
          <Text style={styles.userDataText}>Name: {userData.nama}</Text>
          <Text style={styles.userDataText}>Role: {userData.role}</Text>
          <Image
            style={styles.userImage}
            source={{ uri: `https://simakad.unismuh.ac.id/upload/mahasiswa/${userData.username}.jpg` }}
          />
        </View>
      )}
    </View>
  );
}

export default ApiPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  userDataContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  userDataText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
});