import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { signUp } from 'src/supabase/auth';
import { useRouter } from 'expo-router';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    const { error } = await signUp({ email, password });
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Account created successfully!', [{
        text: 'OK',
        onPress: () => router.push('/login'),
      }]);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Create account" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;