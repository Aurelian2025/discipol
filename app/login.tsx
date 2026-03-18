import { View, Text, Button } from 'react-native';
import { supabase } from '../src/supabase/auth';

export const Login = ({ navigation }) => {
    const handleSignIn = async () => {
        // Sign in logic using Supabase
        const { error } = await supabase.auth.signIn({
            email: 'email@example.com',
            password: 'password'
        });
        if (!error) {
            navigation.navigate('/(tabs)/explore');
        }
    };

    return (
        <View>
            <Text>Sign in</Text>
            <Button title="Sign in" onPress={handleSignIn} />
        </View>
    );
};