import React from 'react';
import {
	View,
	Text,
	Button,
	SafeAreaView,
	TouchableOpacity,
	Image,
} from 'react-native';
import useAuth from '../hooks/useAuth';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const { user, logout } = useAuth();
	const navigation = useNavigation();

	return (
		<SafeAreaView>
			{/* Header */}
			<View style={tw`flex-row items-center justify-between px-5 mb-5`}>
				<TouchableOpacity onPress={logout}>
					<Image
						style={tw`h-10 w-10 rounded-full`}
						source={{ uri: user.photoURL }}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => navigation.navigate('Testimonial')}>
					<Image
						style={tw`h-10 w-10 rounded-full`}
						source={require('../assets/papareactlogo.png')}
					/>
				</TouchableOpacity>
			</View>
			{/* End of Header */}

			{/* Zero to Full Stack Hero */}
			<View style={tw`flex flex-col py- items-center`}>
				<Image style={tw`h-20 w-30`} source={require('../assets/zero.jpeg')} />

				{/* Mastermind */}

				<Image
					style={tw`h-20 w-20 rounded-full`}
					source={require('../assets/mastermind.jpeg')}
				/>

				{/* Mentorship */}

				<Image
					style={tw`h-20 w-20 rounded-full`}
					source={require('../assets/mentorship.png')}
				/>

				{/* Github */}

				<Image
					style={tw`h-20 w-20 rounded-full`}
					source={require('../assets/github.jpeg')}
				/>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
