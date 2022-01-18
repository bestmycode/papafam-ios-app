import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
	View,
	Text,
	Button,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import useAuth from '../hooks/useAuth';
import tw from 'tailwind-react-native-classnames';

const LoginScreen = () => {
	const { signInWithGoogle } = useAuth();

	return (
		<View style={tw`flex-1`}>
			<ImageBackground
				resizeMode="cover"
				style={tw`flex-1`}
				source={require('../papareactlogo.png')}
			>
				<TouchableOpacity
					style={[
						tw`absolute bottom-40 w-52 bg-white p-4 rounded-2xl`,
						{ marginHorizontal: '25%' },
					]}
					onPress={signInWithGoogle}
				>
					<Text style={tw`font-semibold text-center`}>Sign in</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

export default LoginScreen;
