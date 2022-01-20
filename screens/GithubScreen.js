import {
	View,
	Text,
	Button,
	SafeAreaView,
	TouchableOpacity,
	Image,
	TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import useAuth from '../hooks/useAuth';

const GithubScreen = () => {
	const { user } = useAuth();
	const [username, setUsername] = useState(null);
	const [email, setEmail] = useState(null);
	const [fullName, setFullName] = useState(null);

	const navigation = useNavigation();

	const incompleteForm = !username || !email || !fullName;

	return (
		<SafeAreaView>
			<Header title="GitHub" />
			<View style={tw`flex items-center`}>
				<Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
					Welcome {user.displayName}
				</Text>

				<Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
					Please fill out the form below, your access will be granted within{' '}
					<Text style={tw`text-xl text-red-500 p-2 font-bold`}>
						24-48 hours after submitting
					</Text>
				</Text>

				<Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
					We appreciate your patience, please keep an eye on your inbox and spam
					folder for the GitHub invitation!
				</Text>

				<Text style={tw`text-center p-4 font-bold text-black`}>
					GitHub Username
				</Text>
				<TextInput
					value={username}
					onChangeText={setUsername}
					style={tw`text-center text-xl pb-2`}
					placeholder="Enter GitHub Username"
				/>

				<Text style={tw`text-center p-4 font-bold text-black`}>
					GitHub Email
				</Text>
				<TextInput
					value={email}
					onChangeText={setEmail}
					style={tw`text-center text-xl pb-2`}
					placeholder="Enter GitHub Email"
				/>

				<Text style={tw`text-center p-4 font-bold text-black`}>Full Name</Text>
				<TextInput
					value={fullName}
					onChangeText={setFullName}
					style={tw`text-center text-xl pb-2`}
					placeholder="Enter Full Name"
				/>

				<TouchableOpacity
					disabled={incompleteForm}
					style={[
						tw`w-64 p-3 rounded-xl mt-5`,
						incompleteForm ? tw`bg-gray-400` : tw`bg-yellow-400`,
					]}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={tw`text-center text-white text-xl`}>Submit</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default GithubScreen;
