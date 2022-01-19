import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const TestimonialScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<Text>Hello</Text>
			<Text>Hello</Text>
			<Button title="go back" onPress={() => navigation.navigate('Home')} />
		</View>
	);
};

export default TestimonialScreen;
