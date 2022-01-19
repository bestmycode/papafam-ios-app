import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const GithubScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Github</Text>
			<Text>Github</Text>
			<Text>Github</Text>
			<Button title="go back" onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default GithubScreen;
