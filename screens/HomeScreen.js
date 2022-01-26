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

				<TouchableOpacity onPress={() => navigation.navigate('Hero')}>
					<Image
						style={tw`h-10 w-10 rounded-full`}
						source={require('../assets/papareactlogo.png')}
					/>
				</TouchableOpacity>
			</View>
			{/* End of Header */}

			{/* Zero to Full Stack Hero */}
			<View style={tw`flex items-center m-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Hero')}>
					<Image
						style={tw`h-32 w-56`}
						source={require('../assets/zero.jpeg')}
					/>
				</TouchableOpacity>
			</View>

			{/* Mastermind */}
			<View style={tw`flex items-center m-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Mastermind')}>
					<Image
						style={tw`h-32 w-56`}
						source={require('../assets/mastermind.jpeg')}
					/>
				</TouchableOpacity>
			</View>

			{/* Mentorship */}
			<View style={tw`flex items-center m-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Mentorship')}>
					<Image
						style={tw`h-32 w-56`}
						source={require('../assets/mentorship.png')}
					/>
				</TouchableOpacity>
			</View>

			{/* Github */}
			<View style={tw`flex items-center m-5`}>
				<TouchableOpacity onPress={() => navigation.navigate('Github')}>
					<Image
						style={tw`h-32 w-56`}
						source={require('../assets/github.jpeg')}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
