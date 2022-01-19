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
	const [interest, setInterest] = useState(null);
	const [age, setAge] = useState(null);

	const incompleteForm = !interest || !age;

	return (
		<SafeAreaView>
			<Header title="GitHub" />
			<View style={tw`flex items-center`}>
				<Text style={tw`text-xl text-gray-500 p-2 font-bold`}>
					Welcome {user.displayName}
				</Text>

				<Text style={tw`text-center p-4 font-bold text-pink-400`}>
					Step 1: Exercise interest(s)
				</Text>
				<TextInput
					value={interest}
					onChangeText={setInterest}
					style={tw`text-center text-xl pb-2`}
					placeholder="Enter an exercise interest(s)"
				/>

				<Text style={tw`text-center p-4 font-bold text-pink-400`}>
					Step 2: Age
				</Text>
				<TextInput
					value={age}
					onChangeText={setAge}
					style={tw`text-center text-xl pb-2`}
					placeholder="Enter your age"
					keyboardType="numeric"
					maxLength={2}
				/>

				<TouchableOpacity
					disabled={incompleteForm}
					style={[
						tw`w-64 p-3 rounded-xl absolute top-64`,
						incompleteForm ? tw`bg-gray-400` : tw`bg-pink-400`,
					]}
					onPress={() => navigation.navigate('Testimonial')}
				>
					<Text style={tw`text-center text-white text-xl`}>Update Profile</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default GithubScreen;
