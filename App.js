import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUp from './SignUp';
import Login from './Login';
import ForgotPassword from './Forgot-Password';


const App = () => {
  return (
    <View>
      <SafeAreaView>
        {/* <SignUp />  */}
        {/* <Login /> */}
        <ForgotPassword />
       
      </SafeAreaView>
    </View>
  );
}

export default App;
