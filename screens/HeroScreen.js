import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HeroScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Welcome to the course!</Text>
			<Text>Welcome to the course!</Text>
			<Text>Welcome to the course!</Text>
			<Button title="go back" onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default HeroScreen;
